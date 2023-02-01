import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//CSS imports
import './Register.css';

//User imports
import logo from './utils/amazon_logo_black.png'
import { auth, createUserWithEmailAndPassword } from './firebase';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    function register(e) {
        e.preventDefault();
        if (password !== password2) {
            return alert("Error! Passwords do not match");
        }
        createUserWithEmailAndPassword(auth, email, password)
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
            setPassword2('');
        }, 500);
    };

    return (
        <div className='register'>
            <Link to="/">
                <img className='register__logo' src={logo} alt="" />
            </Link>
            <div className='register__container'>
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
                    <h5>Confirm Password:</h5>
                    <input
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <button className='register__registerButton' type='submit' onClick={register}>Create Account</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to="/login">
                    <button className='register__signInButton'>Sign into your Existing Account</button>
                </Link>
            </div>
        </div>
    );
};

export default Register;