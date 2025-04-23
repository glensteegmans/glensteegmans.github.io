// src/components/activities/ActivitiesTabs.js
import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import { featuredActivities, requiredActivities, extraActivities } from '../../data/activities';
import '../../styles/components/ActivitiesTabs.css';

const ActivitiesTabs = () => {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="activities-tabs">
      <div className="tabs-header">
        <button 
          className={`tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
          onClick={() => setActiveTab('featured')}
        >
          Uitgelichte activiteiten
        </button>
        <button 
          className={`tab-btn ${activeTab === 'required' ? 'active' : ''}`}
          onClick={() => setActiveTab('required')}
        >
          Verplichte activiteiten
        </button>
        <button 
          className={`tab-btn ${activeTab === 'extra' ? 'active' : ''}`}
          onClick={() => setActiveTab('extra')}
        >
          Extra activiteiten
        </button>
      </div>
      
      <div className="tabs-content">
        {activeTab === 'featured' && (
          <div className="activities-grid">
            {featuredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
        
        {activeTab === 'required' && (
          <div className="activities-table-container">
            <table className="activities-table">
              <thead>
                <tr>
                  <th>Activiteit</th>
                  <th>Beschrijving</th>
                  <th>Locatie</th>
                  <th>Datum</th>
                </tr>
              </thead>
              <tbody>
                {requiredActivities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.title}</td>
                    <td>{activity.description}</td>
                    <td>{activity.location}</td>
                    <td>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'extra' && (
          <div className="activities-table-container">
            <table className="activities-table">
              <thead>
                <tr>
                  <th>Domein</th>
                  <th>Activiteit</th>
                  <th>Beschrijving</th>
                  <th>Locatie</th>
                  <th>Periode</th>
                </tr>
              </thead>
              <tbody>
                {extraActivities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.domain}</td>
                    <td>{activity.title}</td>
                    <td>{activity.description}</td>
                    <td>{activity.location}</td>
                    <td>{activity.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesTabs;