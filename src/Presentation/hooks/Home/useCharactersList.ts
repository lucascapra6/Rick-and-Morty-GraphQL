import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  charactersActions,
  CharactersRootState,
} from '../../store/slices/characters.slice';
import {LoadCharacters} from '../../../Domain/usecases/loadAllCharacteres';

export function useCharactersList(LoadCharacters: LoadCharacters) {
  const [hasListFinished, setHasListFinished] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const {characters, loading, error} = useSelector(
    (state: CharactersRootState) => state.charactersReducer,
  );
  const [characterNameToSearch, setCharacterNameToSearch] =
    useState<string>('');

  const dispatch = useDispatch();

  const FIRST_PAGE = 1;

  useEffect(() => {
    if (!characterNameToSearch) {
      loadCharacters(FIRST_PAGE, characterNameToSearch);
      setPage(FIRST_PAGE);
      setHasListFinished(false);
      return;
    }
    setPage(FIRST_PAGE);
    setHasListFinished(false);
    const timer = setTimeout(() => {
      loadCharacters(
        page > FIRST_PAGE ? FIRST_PAGE : page,
        characterNameToSearch,
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [characterNameToSearch]);

  async function loadCharacters(page: number, name: string) {
    try {
      dispatch(charactersActions.setError(false));
      dispatch(charactersActions.setLoading(true));
      const {data} = await LoadCharacters.loadAll(page, name);
      dispatch(charactersActions.setCharacters(data.characters.results));
    } catch (e) {
      dispatch(charactersActions.setError(true));
    } finally {
      dispatch(charactersActions.setLoading(false));
    }
  }
  async function loadMoreCharacters(page: number, name: string) {
    try {
      dispatch(charactersActions.setError(false));
      const {data} = await LoadCharacters.loadAll(page, name);
      dispatch(
        charactersActions.setCharacters([
          ...characters,
          ...data.characters.results,
        ]),
      );
      if (data.characters.info.next === null) {
        setHasListFinished(true);
      }
    } catch (e) {
      dispatch(charactersActions.setError(true));
    } finally {
      dispatch(charactersActions.setLoading(false));
    }
  }

  async function handlePagination() {
    if (!hasListFinished) {
      await loadMoreCharacters(page + 1, characterNameToSearch);
      setPage(page + 1);
    }
  }

  return {
    characters,
    loading,
    error,
    handlePagination,
    hasListFinished,
    page,
    characterNameToSearch,
    setCharacterNameToSearch,
  };
}
