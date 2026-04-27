import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">ProlificDev</span>
        </Link>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/works" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Works
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
