// src/pages/Home.js
import React from 'react';
import '../styles/pages/Home.css';

const Home = () => {
  // Update naar de nieuwe afbeeldingsnaam
  const bannerImageUrl = process.env.PUBLIC_URL + '/images/Transformers_Banner_2.png';
  
  return (
    <div className="home-page">
      <div 
        className="hero-section"
        style={{ 
          backgroundImage: `url(${bannerImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Glen Steegmans</h1>
          <h2>AI & Robotics Specialist</h2>
          <p>Toegepaste Informatica student met een passie voor technologie en mensgerichte innovatie</p>
        </div>
      </div>
      
      <div className="home-content">
        <div className="container">
          <div className="ai-inspiration-section">
            <h2>Geïnspireerd door Transformers</h2>
            <p>
              Net zoals hoe Transformers zich aanpassen aan verschillende situaties, 
              ben ik gefascineerd door het aanpassingsvermogen van AI-modellen, 
              met name Transformer-architecturen die revolutie hebben gebracht in 
              natuurlijke taalverwerking en computer vision.
            </p>
            <p>
              Deze invloed heeft mijn interesse in deep learning gevormd en mijn 
              focus gericht op het ontwikkelen van intelligente systemen die zich 
              kunnen aanpassen aan complexe problemen - een ware transformatie in 
              hoe we met technologie omgaan.
            </p>
          </div>
          
          <div className="welcome-section">
            <h2>Welkom op mijn Portfolio</h2>
            <p>
              Mijn reis in de technologiewereld combineert academische kennis met praktische 
              ervaring in internationale settings. Als IT Manager bij ESN Belgium en voormalig 
              Communication Manager bij ESN Hasselt heb ik geleerd hoe technologie mensen kan 
              verbinden over grenzen heen.
            </p>
            <p>
              Verken mijn projecten en ervaringen om meer te ontdekken over mijn werk 
              in AI, web development en robotica. Mijn doel is om oplossingen te creëren die 
              niet alleen technisch geavanceerd zijn, maar ook een betekenisvolle impact hebben.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;