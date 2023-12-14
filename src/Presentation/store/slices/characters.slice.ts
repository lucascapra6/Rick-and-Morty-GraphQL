import {createSlice} from '@reduxjs/toolkit';
import {RemoteCharacterDetailsModel} from '../../../Data/model/remoteLoadCharacterDetailsModel';
import {RemoteLoadAllCharactersModel} from '../../../Data/model/remoteLoadAllCharactersModel';

type CharactersInitialState = {
  characters: RemoteLoadAllCharactersModel[];
  characterDetails: RemoteCharacterDetailsModel;
  loading: boolean;
  error: boolean;
};

const initialState: CharactersInitialState = {
  characters: [],
  characterDetails: {
    character: {
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
  },
  loading: false,
  error: false,
};

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState: initialState,
  reducers: {
    setCharacters: (state: CharactersInitialState, action) => {
      state.characters = action.payload;
    },
    setCharacterDetails: (state: CharactersInitialState, action) => {
      state.characterDetails = action.payload;
    },
    setLoading: (state: CharactersInitialState, action) => {
      state.loading = action.payload;
    },
    setError: (state: CharactersInitialState, action) => {
      state.error = action.payload;
    },
  },
});

export const charactersActions = charactersSlice.actions;

export type CharactersRootState = {
  charactersReducer: CharactersInitialState;
};

export default charactersSlice.reducer;
