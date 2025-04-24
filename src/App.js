// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import Router from './Router.jsx';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
