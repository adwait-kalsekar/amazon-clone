import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//CSS imports
import './Login.css';

//User imports
import logo from './utils/amazon_logo_black.png'
import { auth, signInWithEmailAndPassword } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
        setTimeout(() => {
            setEmail('');
            setPassword('');
        }, 500);
    };

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src={logo} alt="" />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form action="submit">
                    <h5>Email:</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password:</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='login__signInButton' type='submit' onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to="/register">
                    <button className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;