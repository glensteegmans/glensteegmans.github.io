import React from 'react';

const RequiredActivityCard = ({ activity }) => {
  const { title, description, location, date } = activity;
  
  return (
    <div className="required-activity-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <div className="card-meta">
          <div className="meta-item">
            <span className="meta-icon">📍</span>
            <span>{location}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">🗓️</span>
            <span>{date}</span>
          </div>
        </div>
        
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default RequiredActivityCard;