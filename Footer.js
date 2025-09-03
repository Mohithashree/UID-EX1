import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <span className="footer-brand">Eco-Friendly Products</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
  {/* Navigation links removed as requested */}
    </div>
    <hr className="footer-divider" />
  </footer>
);

export default Footer;
