import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
       
          <span className="logo-text">Codveda</span>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}


