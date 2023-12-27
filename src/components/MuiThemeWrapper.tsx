import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import App from './App';

export const MuiThemeWrapper: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#373737',
      },
      secondary: {
        main: '#221266',
      },
      background: {
        default: '#121212',
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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
