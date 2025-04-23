import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import '../../styles/components/Footer.css';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <footer className={darkMode ? 'dark-mode' : ''}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Glen Steegmans</h3>
            <p>Toegepaste Informatica — PXL Hasselt</p>
            <p>AI & Robotics</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>glen.steegmans@student.pxl.be</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Hasselt, België</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="https://github.com/glensteegmans" target="_blank" rel="noopener noreferrer">
                  <span className="icon">💻</span> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/glen-steegmans" target="_blank" rel="noopener noreferrer">
                  <span className="icon">🔗</span> LinkedIn
                </a>
              </li>
              <li>
                <Link to="/activiteiten">
                  <span className="icon">🔍</span> Mijn Activiteiten
                </Link>
              </li>
              <li>
                <Link to="/reflectie">
                  <span className="icon">💭</span> Reflectie
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} - Glen Steegmans</p>
          <p>Portfolio gemaakt met React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;