// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Glen Steegmans
        </Link>
        
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/activiteiten" 
              className={location.pathname.includes('/activiteiten') || location.pathname.includes('/activiteit/') ? 'active' : ''}
            >
              Activiteiten
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/profiel" 
              className={location.pathname === '/profiel' ? 'active' : ''}
            >
              Profiel
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/reflectie" 
              className={location.pathname === '/reflectie' ? 'active' : ''}
            >
              Reflectie
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/galerij" 
              className={location.pathname === '/galerij' ? 'active' : ''}
            >
              Fotogalerij
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;