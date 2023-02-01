import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  gallerySlice from '../features/gallery/counterSlice';

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
