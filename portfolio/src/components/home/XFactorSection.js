import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/XFactorSection.css';

// X-factor data
const xFactors = [
  {
    title: 'Analytisch Denken',
    description: 'Ik ga methodisch te werk bij het oplossen van complexe problemen door ze op te splitsen in kleinere, hanteerbare componenten. Mijn sterke analytische vaardigheden stellen me in staat om patronen te herkennen en effectieve oplossingen te bedenken.'
  },
  {
    title: 'Zelfstandigheid',
    description: 'Ik ben in staat om zelfstandig opdrachten uit te voeren en projecten te beheren vanaf het begin tot de implementatie. Mijn proactieve werkhouding betekent dat ik initiatief neem wanneer nodig en verantwoordelijkheid neem voor mijn werk.'
  },
  {
    title: 'Leergierigheid',
    description: 'Ik ben voortdurend op zoek naar nieuwe kennis en vaardigheden. Technologie evolueert snel, en ik blijf op de hoogte door regelmatig online cursussen te volgen, artikelen te lezen en te experimenteren met nieuwe tools en frameworks.'
  }
];

const XFactorSection = () => {
  return (
    <section className="xfactor-section">
      <div className="container">
        <h2 className="section-title">Mijn X-Factor</h2>
        <p className="section-subtitle">
          Wat mij onderscheidt als IT-professional zijn deze drie kernkwaliteiten die ik in elk project toepas.
        </p>
        
        <div className="xfactors-grid">
          {xFactors.map((factor, index) => (
            <div key={index} className="xfactor-card">
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="xfactor-cta">
          <Link to="/profiel" className="btn-light">
            Meer over mijn profiel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default XFactorSection;