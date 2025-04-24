// src/components/reflection/XFactorModel.js
import React from 'react';
import '../../styles/components/XFactorModel.css';

const XFactorModel = ({ activeXFactor, setActiveXFactor, xFactorData }) => {
  return (
    <div className="x-factor-model">
      <div className="model-container">
        <div className="model-center">
          <span>X-Factor</span>
        </div>
        
        {Object.keys(xFactorData).map((factor) => (
          <div 
            key={factor}
            className={`model-factor ${activeXFactor === factor ? 'active' : ''}`}
            style={{ 
              '--factor-color': xFactorData[factor].color,
              '--factor-position': getFactorPosition(factor)
            }}
            onClick={() => setActiveXFactor(factor)}
          >
            <div className="factor-icon">{xFactorData[factor].icon}</div>
            <span className="factor-name">{xFactorData[factor].title}</span>
          </div>
        ))}
      </div>
      
      <div className="model-legend">
        <p>Klik op een factor voor meer details</p>
      </div>
    </div>
  );
};

// Helper function to position factors around the circle
function getFactorPosition(factor) {
  const positions = {
    passion: '0deg',
    entrepreneurship: '72deg',
    international: '144deg',
    multidisciplinary: '216deg',
    sustainability: '288deg'
  };
  
  return positions[factor] || '0deg';
}

export default XFactorModel;