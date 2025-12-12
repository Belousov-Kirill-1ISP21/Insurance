import React from 'react';
import { StoreProvider } from './StoreProvider';
import { QueryProvider } from './QueryProvider';

export const AppProvider = ({ children }) => {
  return (
    <StoreProvider>
      <QueryProvider>
          {children}
      </QueryProvider>
    </StoreProvider>
  );
};