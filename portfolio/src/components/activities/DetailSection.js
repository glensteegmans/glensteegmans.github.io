import React from 'react';
import '../../styles/components/DetailSection.css';

const DetailSection = ({ activity }) => {
  // Split the description and reflection into paragraphs for better readability
  const descriptionParagraphs = activity.content.description.split('\n\n');
  const reflectionParagraphs = activity.content.reflection.split('\n\n');

  return (
    <section className="activity-detail">
      <div className="container">
        <div className="activity-content-container">
          <div className="activity-main-content">
            <div className="activity-section">
              <div className="activity-tags">
                {activity.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <h3>Beschrijving</h3>
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="activity-section">
              <h3>Reflectie</h3>
              {reflectionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="activity-sidebar">
            {activity.content.objectives && (
              <div className="activity-section">
                <h3>Doelstellingen</h3>
                <ul className="objectives-list">
                  {activity.content.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activity.content.personalObjectives && (
              <div className="activity-section">
                <h3>Persoonlijke doelen</h3>
                <ul className="objectives-list">
                  {activity.content.personalObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activity.content.team && typeof activity.content.team === 'string' && (
              <div className="activity-section">
                <h3>Team</h3>
                <p>{activity.content.team}</p>
              </div>
            )}
            
            {activity.content.team && Array.isArray(activity.content.team) && (
              <div className="activity-section">
                <h3>Team</h3>
                <ul className="team-list">
                  {activity.content.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="activity-section">
              <h3>Details</h3>
              <div className="activity-meta-item">
                <span className="icon">📍</span>
                <span>{activity.location}</span>
              </div>
              <div className="activity-meta-item">
                <span className="icon">🗓️</span>
                <span>{activity.period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;