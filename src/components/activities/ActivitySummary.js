// src/components/activities/ActivitySummary.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/ActivitySummary.css';

const ActivitySummary = ({ activities }) => {
  // Helper functie om het juiste logo te bepalen op basis van organisatie en titel
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
    <section className="activity-summary-section">
      <div className="container">
        <div className="activity-summary-grid">
          {activities.map((activity, index) => (
            <Link 
              to={`/activiteit/${activity.id}`} 
              className="activity-card" 
              key={index}
            >
              <div className="activity-banner">
                {activity.image && (
                  <img 
                    src={`${process.env.PUBLIC_URL}${activity.image}`} 
                    alt={activity.title} 
                    className="activity-image"
                  />
                )}
                {getOrganizationLogo(activity) && (
                  <img 
                    src={getOrganizationLogo(activity)} 
                    alt={`${activity.organization} Logo`} 
                    className="organization-logo"
                  />
                )}
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p className="activity-organization">{activity.organization}</p>
                <p className="activity-period">{activity.period}</p>
                <p className="activity-description">{activity.summary}</p>
                <div className="activity-skills">
                  {activity.skills && activity.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                  {activity.skills && activity.skills.length > 4 && (
                    <span className="skill-tag more-skills">+{activity.skills.length - 4}</span>
                  )}
                </div>
                <span className="view-details">Bekijk details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySummary;