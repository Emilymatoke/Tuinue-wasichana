// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact-us">Contact Us</a>
      </div>
      <div className="social-media">
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
