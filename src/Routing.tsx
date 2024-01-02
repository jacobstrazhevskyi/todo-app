import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';

export const Routing: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, [navigate, pathname]);

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
