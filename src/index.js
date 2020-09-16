import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BackgroundContextProvider } from './context/context';

ReactDOM.render(
  <BackgroundContextProvider>
    <App />
  </BackgroundContextProvider>,
  document.getElementById('root')
);
