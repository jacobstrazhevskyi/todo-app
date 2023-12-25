/* eslint-disable no-param-reassign */
import { createTheme } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const OSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getTheme = (themeType: 'dark' | 'light') => {
  return createTheme({
    palette: {
      mode: themeType,
    },
  });
};

const themeFromLocalStorage = localStorage.getItem('theme');

const initialState = themeFromLocalStorage
  ? getTheme(themeFromLocalStorage as 'dark' | 'light')
  : getTheme(OSTheme);

const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (_theme, action: PayloadAction<'dark' | 'light'>) => {
      const newTheme = getTheme(action.payload);

      return newTheme;
    },
  },
});

export const { selectTheme } = selectedThemeSlice.actions;
export default selectedThemeSlice.reducer;
