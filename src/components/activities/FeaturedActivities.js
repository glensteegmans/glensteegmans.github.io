// src/components/activities/FeaturedActivities.js
import React, { useState } from 'react';
import { featuredActivities } from '../../data/activities';
import '../../styles/components/FeaturedActivities.css';

const FeaturedActivities = () => {
  const [expandedActivity, setExpandedActivity] = useState(null);
  
  const toggleExpand = (id) => {
    if (expandedActivity === id) {
      setExpandedActivity(null);
    } else {
      setExpandedActivity(id);
    }
  };
  
  // Helper functie om het juiste logo te bepalen op basis van activiteit
  const getOrganizationLogo = (activity) => {
    // Eerst checken op basis van titel voor specificiteit
    if (activity.title && activity.title.includes('IT Manager')) {
      return `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`;
    }
    if (activity.title && (activity.title.includes('Buitenlandse Stage') || activity.title.includes('INSTICC'))) {
      return `${process.env.PUBLIC_URL}/images/INSTICC_Logo.png`;
    }
    if (activity.title && activity.title.includes('Hack The Future')) {
      return `${process.env.PUBLIC_URL}/images/Hack_The_Future_Logo.png`;
    }
    
    // Als geen match op titel, checken op basis van organisatie
    const orgLogoMap = {
      'ESN Belgium': `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`,
      'ESN Hasselt': `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`,
      'Hack The Future': `${process.env.PUBLIC_URL}/images/Hack_The_Future_Logo.png`,
      'INSTICC': `${process.env.PUBLIC_URL}/images/INSTICC_Logo.png`,
      'Cronos Groep': `${process.env.PUBLIC_URL}/images/Hack_The_Future_Logo.png`,
    };
    
    return orgLogoMap[activity.organization] || null;
  };
  
  return (
    <div className="featured-activities">
      <div className="featured-intro">
        <h3>Kernactiviteiten</h3>
        <p>
          Deze drie kernactiviteiten hebben een significante bijdrage geleverd aan mijn ontwikkeling 
          en vormen de basis van mijn X-Factor model. Klik op een activiteit voor meer details.
        </p>
      </div>
      
      {featuredActivities.map((activity, index) => (
        <div key={activity.id} className="featured-activity">
          <div 
            className={`activity-header ${expandedActivity === activity.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(activity.id)}
          >
            <div className="activity-number">{index + 1}</div>
            <h3>{activity.title}</h3>
            <div className="activity-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>{activity.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🗓️</span>
                <span>{activity.period}</span>
              </div>
            </div>
            <div className="expand-icon">
              {expandedActivity === activity.id ? '−' : '+'}
            </div>
          </div>
          
          {expandedActivity === activity.id && (
            <div className="activity-details">
              <div className="activity-image">
                <img 
                  src={getOrganizationLogo(activity)} 
                  alt={`${activity.organization} Logo`}
                  className="organization-logo"
                />
              </div>
              
              <div className="activity-tags">
                {activity.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="activity-section">
                <h4>Doelstellingen van de activiteit</h4>
                <ul>
                  {activity.content.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
              
              <div className="activity-section">
                <h4>Eigen doelstellingen</h4>
                <ul>
                  {activity.content.personalObjectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>
              
              {activity.content.team && (
                <div className="activity-section">
                  <h4>Team samenstelling</h4>
                  <p>{activity.content.team}</p>
                </div>
              )}
              
              <div className="activity-section">
                <h4>Kern</h4>
                {activity.content.description.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              
              <div className="activity-section">
                <h4>Reflectie</h4>
                {activity.content.reflection.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedActivities;