import React from 'react';
import { AppProvider } from './providers/AppProvider';
import AppRouter from './router/appRouter'; 
import './styles/globals.css';
import '@shared/css/app.module.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;