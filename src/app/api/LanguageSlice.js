import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'kurdi',
};

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
