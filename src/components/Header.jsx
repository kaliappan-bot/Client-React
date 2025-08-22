import React from 'react';
import logo from '../assets/ibots-logo.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo(0, 0); 
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a
            href="https://maps.app.goo.gl/BGrHGtcQwPLtRYfw6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="ibots logo" className="header-logo" />
          </a>
          <span className="office-title">-Meikavalputhur Office</span>
        </div>

        <nav className="nav-links">
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <Link to="/adminlogin">Admin Login</Link>
          <Link to="/employeelogin">Employee Login</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
