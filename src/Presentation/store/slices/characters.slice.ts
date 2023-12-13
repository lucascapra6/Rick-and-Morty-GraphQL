import {createSlice} from '@reduxjs/toolkit';
import {CharacterBaseInfoModel} from '../../../Domain/models/characterBaseInfoModel';
import {CharacterDetailsModel} from '../../../Domain/models/characterDetailsModel';

type CharactersInitialState = {
  characters: CharacterBaseInfoModel[];
  characterDetails: CharacterDetailsModel;
  isLoading: boolean;
  isError: boolean;
};

const initialState: CharactersInitialState = {
  characters: [],
  characterDetails: {
    id: '',
    name: '',
    species: '',
    image: '',
    gender: '',
    type: '',
    status: '',
    location: {
      name: '',
    },
  },
  isLoading: false,
  isError: false,
};

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState: initialState,
  reducers: {},
});

export const charactersActions = charactersSlice.actions;

export type CharactersRootState = {
  charactersReducer: CharactersInitialState;
};

export default charactersSlice.reducer;
