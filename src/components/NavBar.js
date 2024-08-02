// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles/NavBar.css'; // Ensure this line is present to import the styles

const NavBar = ({ user }) => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className='home'>Home</Link>
      </div>
      <div className="navbar-center">
        {user && (
          <span>
            Welcome😃, {user.displayName || user.Name}
          </span>
        )}
      </div>
      <div className="navbar-right">
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
