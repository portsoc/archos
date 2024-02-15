import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This file should contain your Tailwind CSS imports
import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
