import React, {useEffect, useState} from 'react';
import {useApolloClient} from '@apollo/client';
import {GraphQLClient} from '../../../Data/protocols/GraphQL/graphQLClient';
import {RemoteLoadAllCharacteres} from '../../../Data/usecases/remoteLoadAllCharacteres';
import {LoadingStyled} from '../../components/Loading.styled';
import {PaginatedList} from './components/PaginatedList';
import {
  charactersActions,
  CharactersRootState,
} from '../../store/slices/characters.slice';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

export function Home() {
  const client = useApolloClient() as GraphQLClient;
  const remoteLoadAllCharacteres = new RemoteLoadAllCharacteres(client);
  const [hasListFinished, setHasListFinished] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const {characters, loading, error} = useSelector(
    (state: CharactersRootState) => state.charactersReducer,
  );
  const dispatch = useDispatch();
  async function loadCharacters() {
    try {
      dispatch(charactersActions.setError(false));
      dispatch(charactersActions.setLoading(true));
      const {data} = await remoteLoadAllCharacteres.loadAll(page);
      dispatch(charactersActions.setCharacters(data.characters.results));
    } catch (e) {
      console.log(e);
      dispatch(charactersActions.setError(true));
    } finally {
      dispatch(charactersActions.setLoading(false));
    }
  }
  async function loadMoreCharacters(page: number) {
    try {
      dispatch(charactersActions.setError(false));
      const {data} = await remoteLoadAllCharacteres.loadAll(page);
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
    }
  }
  async function handlePagination(pageValue: number) {
    if (!hasListFinished) {
      await loadMoreCharacters(pageValue + 1);
      setPage(pageValue + 1);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  if (loading) return <LoadingStyled />;
  if (error) return <Text>Erro</Text>;

  return (
    <>
      <PaginatedList
        data={characters}
        handlePagination={() => handlePagination(page)}
        hasListFinished={hasListFinished}
      />
    </>
  );
}
