/* eslint-disable no-param-reassign */
import { Theme, ThemeOptions, createTheme } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const OSTheme = window
  .matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

type ThemeObject = {
  themeName: string,
  themeObject: ThemeOptions,
};

export const themes: ThemeObject[] = [
  {
    themeName: 'dark',
    themeObject: {
      palette: {
        mode: 'dark',
        common: {
          white: '#ffffff',
          black: '#000000',
        },
        primary: {
          main: '#373737',
          light: '#5f5f5f',
          dark: '#262626',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#221266',
          dark: '#170c47',
          light: '#4e4184',
        },
        background: {
          default: '#121212',
          paper: '#121212',
        },
        text: {
          primary: '#ffffff',
          secondary: '#6b675a',
          disabled: '#b81d25',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
      },
    },
  },
  {
    themeName: 'light',
    themeObject: {
      palette: {
        mode: 'light',
        common: {
          white: '#ffffff',
          black: '#000000',
        },
        primary: {
          main: '#673ab7',
          dark: '#482880',
          light: '#482880',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#651fff',
          dark: '#4615b2',
          light: '#834bff',
        },
        text: {
          primary: '#000000',
          secondary: '#291749',
          disabled: '#6b675a',
        },
        background: {
          default: '#ffffff',
          paper: '#ffffff',
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
      },
    },
  },
];

const getTheme = (themeName: string): Theme => {
  const theme = themes.find((foundTheme) => foundTheme.themeName === themeName)
    || { themeName: '', themeObject: createTheme() };

  return createTheme(theme.themeObject);
};

const themeFromLocalStorage = localStorage.getItem('theme');

const initialState: Theme = themeFromLocalStorage
  ? getTheme(themeFromLocalStorage)
  : getTheme(OSTheme);

const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState,
  reducers: {
    selectTheme: (_theme, action: PayloadAction<string>) => {
      const newTheme = getTheme(action.payload);

      localStorage.setItem('theme', action.payload);

      return newTheme;
    },
  },
});

export const { selectTheme } = selectedThemeSlice.actions;
export default selectedThemeSlice.reducer;
