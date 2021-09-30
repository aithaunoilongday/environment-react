import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { headerThunk } from './thunk';

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(headerThunk.fulfilled, (state, action: PayloadAction<number>) => ({
      ...state,
      value: action.payload
    }));
  }
});

export default headerSlice.reducer;
