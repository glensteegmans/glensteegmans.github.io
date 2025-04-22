import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/components/Header.css';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">Glen<span>Steegmans</span></Link>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profiel" className={location.pathname === '/profiel' ? 'active' : ''}>
                Profiel
              </Link>
            </li>
            <li>
              <Link to="/activiteiten" className={location.pathname === '/activiteiten' ? 'active' : ''}>
                Activiteiten
              </Link>
            </li>
            <li>
              <Link to="/reflectie" className={location.pathname === '/reflectie' ? 'active' : ''}>
                Eindreflectie
              </Link>
            </li>
          </ul>
        </nav>
        
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;