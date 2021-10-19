import React from 'react';
import ReactDOM from 'react-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { worker } from './shared/mocks/browser';
import App from './App';

const queryClient = new QueryClient();

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
