import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default AppRouter;