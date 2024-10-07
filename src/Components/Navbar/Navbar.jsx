import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import Logo from '../../assets/Logo.svg';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu
  };

  return (
    <nav className={navBackground ? 'navbar navbar--scrolled' : 'navbar'}>
      <div className="container">
        {/* Left Section (Logo) */}
        <div className="navbar__left">
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="navbar__toggle" onClick={toggleMenu}>
          <span className="navbar__toggle-icon">&#9776;</span>
        </div>

        {/* Middle Section (Navigation Links) */}
        <div className={`navbar__middle ${menuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Section (Buttons) */}
        <div className={`navbar__right ${menuOpen ? 'active' : ''}`}>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
