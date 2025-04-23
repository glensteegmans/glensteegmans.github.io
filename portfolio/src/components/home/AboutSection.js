import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
import '../../styles/components/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section-title">Over Mij</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>{profileData.background}</p>
            <Link to="/profiel" className="btn">Lees meer over mij</Link>
          </div>
          
          <div className="about-skills">
            <h3>Technologieën</h3>
            <div className="skills-tags">
              {profileData.skills[0].items.slice(0, 5).map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
              {profileData.skills[1].items.slice(0, 5).map((skill, index) => (
                <span key={`framework-${index}`} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;