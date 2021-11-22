import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {citiesReducer} from './slice/weatherSlicer';

export const store = configureStore({
  reducer: {
    weather : citiesReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const selectCities = (state : RootState) => state.weather.cities;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
