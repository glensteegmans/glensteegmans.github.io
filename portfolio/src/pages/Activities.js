// src/pages/Activities.js
import React, { useState, useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { requiredActivities, extraActivities, featuredActivities } from '../data/activities';
import ActivityGallery from '../components/activities/ActivityGallery';
import '../styles/pages/Activities.css';

const Activities = () => {
  // State for active tab
  const [activeCategory, setActiveCategory] = useState('required');
  
  // Scroll page to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="activities-page">
      <PageHeader 
        title="Mijn Activiteiten" 
        subtitle="Een overzicht van mijn seminaries, workshops en extra-curriculaire activiteiten"
      />
      
      <div className="container section">
        <div className="activities-intro">
          <p>
            Tijdens mijn opleiding heb ik deelgenomen aan verschillende activiteiten die hebben bijgedragen aan mijn professionele en persoonlijke ontwikkeling. Op deze pagina vind je een overzicht van deze activiteiten.
          </p>
        </div>
        
        <div className="activities-nav">
          <button 
            className={`activity-tab ${activeCategory === 'required' ? 'active' : ''}`}
            onClick={() => setActiveCategory('required')}
          >
            Verplichte Activiteiten
          </button>
          <button 
            className={`activity-tab ${activeCategory === 'extra' ? 'active' : ''}`}
            onClick={() => setActiveCategory('extra')}
          >
            Extra Activiteiten
          </button>
          <button 
            className={`activity-tab ${activeCategory === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveCategory('gallery')}
          >
            Foto Galerij
          </button>
        </div>
        
        {activeCategory === 'required' && (
          <div className="activities-section fade-in">
            <h2>Seminaries & Workshops</h2>
            <p className="section-description">
              Deze activiteiten zijn onderdeel van mijn studieprogramma en gericht op het verbreden van mijn kennis in verschillende IT-domeinen.
            </p>
            
            <div className="activities-grid">
              {requiredActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span>{activity.location}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">🗓️</span>
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeCategory === 'extra' && (
          <div className="activities-section fade-in">
            <h2>Extra-Curriculaire Activiteiten</h2>
            <p className="section-description">
              Naast het studieprogramma ben ik betrokken bij activiteiten die bijdragen aan mijn persoonlijke ontwikkeling en maatschappelijke betrokkenheid.
            </p>
            
            <div className="activities-grid extra-grid">
              {extraActivities.map((activity, index) => (
                <div key={index} className="activity-card extra-card">
                  <div className="domain-badge">{activity.domain}</div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
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
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === 'gallery' && (
          <div className="activities-section fade-in">
            <h2>Foto Galerij</h2>
            <p className="section-description">
              Bekijk foto's van mijn drie kernactiviteiten: Hack The Future, ESN Belgium en mijn stage bij INSTICC.
            </p>
            
            <ActivityGallery featuredActivities={featuredActivities} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;