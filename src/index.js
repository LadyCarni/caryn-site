import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import reportWebVitals from './reportWebVitals';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-190600893-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
