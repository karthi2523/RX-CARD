import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component (check the correct path)
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the BrowserRouter for routing capabilities
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
