// src/components/reflection/ReflectionDetail.js
import React from 'react';
import '../../styles/components/ReflectionDetail.css';

const ReflectionDetail = ({ activeXFactor, xFactorData }) => {
  const factor = xFactorData[activeXFactor];
  
  if (!factor) return null;
  
  return (
    <div className="reflection-detail">
      <div className="detail-header" style={{ backgroundColor: factor.color }}>
        <div className="detail-icon">{factor.icon}</div>
        <h3>{factor.title}</h3>
        <p>{factor.description}</p>
      </div>
      
      <div className="detail-content">
        <div className="growth-indicator">
          <div className="growth-line">
            <div className="growth-start" style={{ left: `${factor.startLevel * 20}%` }}>
              <span className="growth-dot"></span>
              <span className="growth-label">Start</span>
              <span className="growth-value">{factor.startLevel}/5</span>
            </div>
            <div className="growth-end" style={{ left: `${factor.endLevel * 20}%` }}>
              <span className="growth-dot"></span>
              <span className="growth-label">Nu</span>
              <span className="growth-value">{factor.endLevel}/5</span>
            </div>
            <div className="growth-progress" style={{ 
              width: `${(factor.endLevel - factor.startLevel) * 20}%`,
              left: `${factor.startLevel * 20}%`,
              backgroundColor: factor.color
            }}></div>
          </div>
        </div>
        
        <div className="detail-text">
          {factor.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReflectionDetail;