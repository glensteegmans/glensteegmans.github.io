// src/components/activities/ActivityTables.js
import React from 'react';
import { requiredActivities, extraActivities } from '../../data/activities';
import '../../styles/components/ActivityTables.css';

const ActivityTables = ({ type }) => {
  const activities = type === 'required' ? requiredActivities : extraActivities;
  
  return (
    <div className="activity-tables">
      {type === 'required' ? (
        <>
          <div className="table-intro">
            <h3>Verplichte activiteiten</h3>
            <p>
              Deze activiteiten waren onderdeel van het I-Talent traject binnen mijn opleiding 
              Toegepaste Informatica. Ze hebben bijgedragen aan mijn technische kennis en soft skills.
            </p>
          </div>
          
          <div className="table-container">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Activiteit</th>
                  <th>Beschrijving</th>
                  <th>Locatie</th>
                  <th>Datum</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td className="activity-title">{activity.title}</td>
                    <td>{activity.description}</td>
                    <td className="activity-location">{activity.location}</td>
                    <td className="activity-date">{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="table-intro">
            <h3>Extra activiteiten</h3>
            <p>
              Naast de verplichte activiteiten heb ik ook andere initiatieven ondernomen 
              die mijn ontwikkeling hebben versterkt en mijn interesses hebben verdiept.
            </p>
          </div>
          
          <div className="table-container">
            <table className="activity-table">
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
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td className="activity-domain">{activity.domain}</td>
                    <td className="activity-title">{activity.title}</td>
                    <td>{activity.description}</td>
                    <td className="activity-location">{activity.location}</td>
                    <td className="activity-period">{activity.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityTables;