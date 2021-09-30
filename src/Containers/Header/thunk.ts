import { createAsyncThunk } from '@reduxjs/toolkit';

export const headerThunk = createAsyncThunk<number, number>('header/headerThunk', (params) => {
  return params;
});
