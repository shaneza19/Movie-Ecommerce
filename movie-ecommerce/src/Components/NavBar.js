import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/popular">Popular Movies</a>
          <a href="/shopping">Shopping Cart</a>
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className={`nav-bar ${isNavOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
