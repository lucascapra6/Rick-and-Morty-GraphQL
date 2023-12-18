import React, {useCallback} from 'react';
import {charactersActions} from '../../store/slices/characters.slice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '../useNavigation';
import {LoadCharacterDetails} from '../../../Domain/usecases/loadCharacterDetails';

export function useDetails(LoadCharacterDetails: LoadCharacterDetails) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onCardPress = useCallback(async (id: string) => {
    try {
      dispatch(charactersActions.setError(false));
      dispatch(charactersActions.setLoading(true));
      const {data} = await LoadCharacterDetails.loadDetails(id);
      dispatch(charactersActions.setCharacterDetails(data));
      navigation.navigate('Details');
    } catch (e) {
      console.log(e);
      dispatch(charactersActions.setError(true));
    } finally {
      dispatch(charactersActions.setLoading(false));
    }
  }, []);

  return {onCardPress};
}
