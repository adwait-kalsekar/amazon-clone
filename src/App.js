import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS Imports
import './App.css';

// User Imports
import Navbar from './Navbar';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar />
            <Home />
          </div>
        } />
        <Route path='/login' element={
          <div>
            <h1>Login</h1>
          </div>
        } />
        <Route path='/checkout' element={
          <div>
            <Navbar />
            <Checkout />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
