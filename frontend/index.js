import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import styles from './style.css';
//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <App />
);