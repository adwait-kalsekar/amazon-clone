import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS Imports
import './App.css';

// User Imports
import Navbar from './Navbar';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import { useStateValue } from './StateProvider';
import { auth, onAuthStateChanged } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return (() => {
      //cleanup operations
      unsubscribe();
    });
  }, []);

  console.log(user);

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
            <Login />
          </div>
        } />
        <Route path='/register' element={
          <div>
            <Register />
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
