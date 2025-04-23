import React from 'react';
import { Link } from 'react-router-dom';
import { featuredActivities } from '../../data/activities';
import ActivityCard from '../activities/ActivityCard';
import '../../styles/components/ActivitiesPreview.css';

const ActivitiesPreview = () => {
  // Your featuredActivities are already defined and filtered in the activities.js file
  // Just slice to make sure we only show up to 3 items (in case you add more later)
  const previewActivities = featuredActivities.slice(0, 3);
  
  return (
    <section className="activities-preview section">
      <div className="container">
        <h2 className="section-title">Mijn Activiteiten</h2>
        <p className="section-subtitle">Een selectie van mijn belangrijkste projecten en ervaringen</p>
        
        <div className="activities-grid">
          {previewActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        
        <div className="view-all-btn">
          <Link to="/activiteiten" className="btn">
            Bekijk alle activiteiten
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;