import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import {
  CssBaseline,
  ThemeProvider,
  useTheme,
} from '@mui/material';

import App from './App';

import { store } from './app/store';
import { selectTheme } from './features/selectedTheme';
// import { useAppSelector } from './app/hooks';

export const Root: React.FC = () => {
  selectTheme('dark');

  const theme = useTheme();

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};
