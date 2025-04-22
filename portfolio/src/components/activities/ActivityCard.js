import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card card">
      <div className="activity-image">
        <img src={activity.image} alt={activity.title} />
      </div>
      <div className="activity-content">
        <h3>{activity.title}</h3>
        <div className="activity-tags">
          {activity.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <p>{activity.description}</p>
        <div className="activity-meta">
          <div className="activity-location">
            <span className="icon">📍</span> {activity.location}
          </div>
          <div className="activity-period">
            <span className="icon">🗓️</span> {activity.period}
          </div>
        </div>
        <Link to={`/activiteit/${activity.id}`} className="btn">
          Lees meer
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard;