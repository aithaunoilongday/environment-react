import { configureStore } from '@reduxjs/toolkit';
import headerSlice from 'Containers/Header/slice';

export const store = configureStore({
  reducer: {
    headerSlice
  }
});
