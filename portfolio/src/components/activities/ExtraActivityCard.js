import React from 'react';

const ExtraActivityCard = ({ activity }) => {
  const { domain, title, description, location, period } = activity;
  
  return (
    <div className="extra-activity-card">
      <div className="card-content">
        <div className="domain-tag">{domain}</div>
        <h3 className="card-title">{title}</h3>
        
        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-icon">📍</span>
            <span>{location}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">🗓️</span>
            <span>{period}</span>
          </div>
        </div>
        
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ExtraActivityCard;