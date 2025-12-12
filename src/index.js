import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './app/styles/globals.css';

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}

const CONTAINER = document.getElementById('root');
const ROOT = ReactDOM.createRoot(CONTAINER);

ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);