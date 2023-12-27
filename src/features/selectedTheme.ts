/* eslint-disable no-param-reassign */
import { Theme, createTheme } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const OSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

type ThemeMode = 'dark' | 'light';

const getTheme = (themeType: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeType,
    },
  });
};

const themeFromLocalStorage = localStorage.getItem('theme');

const initialState: Theme = themeFromLocalStorage
  ? getTheme(themeFromLocalStorage as ThemeMode)
  : getTheme(OSTheme);

const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (_theme, action: PayloadAction<ThemeMode>) => {
      const newTheme = getTheme(action.payload);

      return newTheme;
    },
  },
});

export const { selectTheme } = selectedThemeSlice.actions;
export default selectedThemeSlice.reducer;
