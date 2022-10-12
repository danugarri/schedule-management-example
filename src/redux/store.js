import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { scheduleReducer } from './reducers/scheduleReducer';

export const store = configureStore({
  reducer: combineReducers({
    scheduleReducer,
  }),
});
