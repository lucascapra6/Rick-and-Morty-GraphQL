import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducers = combineReducers({});

export const store = configureStore({
  reducer: reducers,
  // enhancers: reactotronEnhancer !== null ? [reactotronEnhancer] : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default () => {
  return {store};
};
