// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Glen Steegmans</h3>
            <p>Portfolio I-Talent | Toegepaste Informatica | AI & Robotics</p>
          </div>
          
          <div className="footer-nav">
            <h4>Navigatie</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/activiteiten">Activiteiten</Link></li>
              <li><Link to="/profiel">Profiel</Link></li>
              <li><Link to="/reflectie">Reflectie</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              PXL Hasselt<br />
              Toegepaste Informatica<br />
              AI & Robotics
            </p>
            <div className="contact-links">
              <p>
                <a href="https://be.linkedin.com/in/glen-steegmans-00a178207" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/glensteegmans" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              <p>
                <a href="mailto:glensteegmans@gmail.com">
                  glensteegmans@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Glen Steegmans. Portfolio voor I-Talent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;