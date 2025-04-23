// src/components/reflection/ReflectionSection.js
import React from 'react';
import XFactorCard from './XFactorCard';
import ProgressChart from './ProgressChart';
import { reflectionContent } from '../../data/reflection';
import '../../styles/components/ReflectionSection.css';

const ReflectionSection = () => {
  // Split main reflection into paragraphs for better readability
  const introText = reflectionContent.content.split('\n\n')[0];
  const mainParagraphs = reflectionContent.content.split('\n\n').slice(1, -1);
  const conclusionText = reflectionContent.content.split('\n\n').slice(-1)[0];

  return (
    <section className="reflection-section">
      <div className="container">
        {/* Introduction */}
        <div className="reflection-intro">
          <p>{introText}</p>
        </div>
        
        {/* X-Factor Visual Grid */}
        <div className="x-factor-grid">
          {reflectionContent.xfactors.map((factor, index) => (
            <XFactorCard key={index} factor={factor} index={index} />
          ))}
        </div>
        
        {/* Main reflection content - structured by X-factors */}
        <div className="reflection-main">
          {reflectionContent.xfactors.map((factor, index) => (
            <div key={index} className="reflection-factor-section">
              <h3 className="factor-title">
                <span className="factor-number">{index + 1}</span>
                {factor.title}
              </h3>
              <p>{mainParagraphs[index]}</p>
            </div>
          ))}
        </div>
        
        {/* Conclusion */}
        <div className="reflection-conclusion">
          <h3>Conclusie</h3>
          <p>{conclusionText}</p>
        </div>
        
        {/* Visual summary - Activities and their impact */}
        <div className="activities-impact">
          <h3>Activiteiten & Impact</h3>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">💻</div>
              <h4>Hack The Future</h4>
              <p>Ontwikkelde probleemoplossend vermogen en leerde werken onder druk met nieuwe technologieën.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🌐</div>
              <h4>ESN Belgium</h4>
              <p>Versterkte communicatie en mentorvaardigheden in een internationale context.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🔍</div>
              <h4>INSTICC Stage</h4>
              <p>Verdiepte technische kennis en ervaring met internationale samenwerking.</p>
            </div>
          </div>
        </div>
        
        {/* Progress Chart */}
        <ProgressChart />
        
        {/* Future outlook */}
        <div className="future-outlook">
          <h3>Toekomstperspectief</h3>
          <p>
            Met deze X-Factor ben ik klaar om een duurzame bijdrage te leveren aan 
            de IT-sector, in België of internationaal, en samen met anderen te bouwen 
            aan de technologie van morgen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;