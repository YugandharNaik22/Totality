// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const LoginPage = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, name, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
      <h2 >Login</h2>
      <form onSubmit={handleLogin}>
      <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br/>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
