import React, { useState } from 'react';
import './Login.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth(firebaseConfig);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        if (user) {
          console.log('User logged in:', user.email);
          // Redirect to '/Booking'
          window.location.href = "/Booking";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorCode, errorMessage);
      });
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text"> Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/mail_646094.png')} alt="" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/padlock_2889676.png')} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div>
        <a href="/forgot-password" className="forgot-password-link">Forgot Password</a>
      </div>
      <div className='login-container'>
        <div className='login-button' onClick={handleLogin}>Login</div>
          <button className="login-button">Login with Google</button>
          <button className="login-button">Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
