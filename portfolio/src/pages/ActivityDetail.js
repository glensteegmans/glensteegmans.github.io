// src/pages/ActivityDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredActivities } from '../data/activities';
import PageHeader from '../components/layout/PageHeader';
import '../styles/components/ActivityDetail.css';

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  
  useEffect(() => {
    const foundActivity = featuredActivities.find(act => act.id === id);
    setActivity(foundActivity);
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!activity) {
    return (
      <div className="container not-found">
        <h2>Activiteit niet gevonden</h2>
        <p>De gevraagde activiteit kon niet worden gevonden.</p>
        <Link to="/activiteiten" className="btn">Terug naar activiteiten</Link>
      </div>
    );
  }
  
  return (
    <>
      <PageHeader 
        title={activity.title} 
        subtitle={`${activity.location} | ${activity.period}`}
      />
      
      <section className="activity-detail">
        <div className="container">
          <div className="activity-detail-header">
            <div className="activity-tags">
              {activity.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <img src={activity.image} alt={activity.title} className="activity-detail-image" />
          </div>
          
          <div className="activity-content">
            <div className="activity-section">
              <h3>Doelstellingen van de activiteit</h3>
              <ul>
                {activity.content.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            
            <div className="activity-section">
              <h3>Persoonlijke doelstellingen</h3>
              <ul>
                {activity.content.personalObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            
            {activity.content.team && (
              <div className="activity-section">
                <h3>Team samenstelling</h3>
                {Array.isArray(activity.content.team) ? (
                  <ul>
                    {activity.content.team.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{activity.content.team}</p>
                )}
              </div>
            )}
            
            <div className="activity-section">
              <h3>Omschrijving</h3>
              {activity.content.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="activity-section">
              <h3>Reflectie</h3>
              {activity.content.reflection.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="activity-nav">
            <Link to="/activiteiten" className="btn btn-secondary">
              &larr; Terug naar activiteiten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivityDetail;