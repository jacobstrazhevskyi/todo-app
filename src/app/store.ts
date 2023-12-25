import { configureStore } from '@reduxjs/toolkit';
import selectedTheme from '../features/selectedTheme';

export const store = configureStore({
  reducer: {
    theme: selectedTheme,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
