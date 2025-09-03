
import React from 'react';
import './Header.css';
import ecologo from './ecologo.jpeg';

const Header = () => (
  <header className="header">
    <div className="logo-nav">
      <img src={ecologo} alt="Eco Logo" className="logo" />
      <span className="navbar-title">ECO FRIENDLY PRODUCTS</span>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
