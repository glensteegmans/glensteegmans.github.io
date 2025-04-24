// src/pages/Activities.js
import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import FeaturedSummary from '../components/activities/FeaturedSummary';
import ActivityTables from '../components/activities/ActivityTables';
import '../styles/components/Activities.css';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const switchToTab = (tabName) => {
    setActiveTab(tabName);
  };
  
  return (
    <>
      <PageHeader 
        title="Activiteiten" 
        subtitle="Een overzicht van mijn ervaringen en ontwikkeling tijdens mijn opleiding"
      />
      
      <section className="activities-section">
        <div className="container">
          <div className="activities-intro">
            <h2>Mijn Activiteiten</h2>
            <p>
              Tijdens mijn opleiding Toegepaste Informatica met specialisatie in AI & Robotics heb ik 
              deelgenomen aan diverse activiteiten die mijn professionele en persoonlijke ontwikkeling 
              hebben versterkt. Van hackathons tot vrijwilligerswerk en een internationale stage — 
              elke ervaring heeft bijgedragen aan mijn groei als IT-professional.
            </p>
          </div>
          
          <div className="activities-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => switchToTab('overview')}
            >
              Overzicht kernactiviteiten
            </button>
            <button 
              className={`tab-btn ${activeTab === 'required' ? 'active' : ''}`}
              onClick={() => switchToTab('required')}
            >
              Verplichte activiteiten
            </button>
            <button 
              className={`tab-btn ${activeTab === 'extra' ? 'active' : ''}`}
              onClick={() => switchToTab('extra')}
            >
              Extra activiteiten
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'overview' && <FeaturedSummary />}
            {activeTab === 'required' && <ActivityTables type="required" />}
            {activeTab === 'extra' && <ActivityTables type="extra" />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;