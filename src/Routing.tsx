import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const Routing: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route />
      </Routes>
    </>
  );
};
