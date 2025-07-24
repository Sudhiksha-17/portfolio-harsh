// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import App, not Home
import './index.css'; // Keep your global/Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* This contains <BrowserRouter> */}
  </React.StrictMode>
);
