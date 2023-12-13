import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rootReducer from '../../Presentation/store/index';
import charactersReducer from '../../Presentation/store/index';

const reducers = combineReducers(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default () => {
  return {store};
};
