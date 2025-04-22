import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredActivities } from '../data/activities';
import PageHeader from '../components/layout/PageHeader';
import DetailSection from '../components/activities/DetailSection';
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
      <div className="container">
        <h2>Activiteit niet gevonden</h2>
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
      <DetailSection activity={activity} />
      <div className="container">
        <Link to="/activiteiten" className="back-link">
          &larr; Terug naar alle activiteiten
        </Link>
      </div>
    </>
  );
};

export default ActivityDetail;