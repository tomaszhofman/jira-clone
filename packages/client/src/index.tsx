import React from 'react';
import ReactDOM from 'react-dom';
import { worker } from './shared/mocks/browser';
import App from './App';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
