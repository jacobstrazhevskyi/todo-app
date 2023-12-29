import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import App from './App';
import { useAppSelector } from '../app/hooks';

export const MuiThemeWrapper: React.FC = () => {
  const theme = useAppSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
