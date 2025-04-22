import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Glen Steegmans</h1>
          <p className="hero-subtitle">Toegepaste Informatica student met specialisatie in AI & Robotics</p>
          <p className="hero-text">
            Een pragmatische en gestructureerde IT'er met een passie voor internationale samenwerking, 
            artificiële intelligentie en innovatieve oplossingen.
          </p>
          <div className="hero-buttons">
            <Link to="/profiel" className="btn">Leer mij kennen</Link>
            <Link to="/activiteiten" className="btn btn-secondary">Bekijk mijn activiteiten</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* We'll generate a profile SVG in the imageGenerators.js file */}
          <svg width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="150" r="100" fill="#2a6df4" opacity="0.1" />
            <circle cx="200" cy="150" r="80" fill="#2a6df4" opacity="0.3" />
            <circle cx="200" cy="150" r="60" fill="#2a6df4" opacity="0.5" />
            <circle cx="200" cy="150" r="40" fill="#2a6df4" opacity="0.7" />
            <text x="200" y="300" textAnchor="middle" fontSize="24" fill="currentColor">
              Glen Steegmans
            </text>
            <text x="200" y="330" textAnchor="middle" fontSize="16" fill="currentColor">
              Toegepaste Informatica • AI & Robotics
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;