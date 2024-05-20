// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for header styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Tuinue Wasichana</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/charities">Charities</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login" className="login-link">Login/Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
