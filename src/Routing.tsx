import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';

export const Routing: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
