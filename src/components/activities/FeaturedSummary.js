// src/components/activities/FeaturedSummary.js
import React from 'react';
import { Link } from 'react-router-dom';
import { featuredActivities } from '../../data/activities';
import '../../styles/components/FeaturedSummary.css';

const FeaturedSummary = () => {
  return (
    <div className="featured-summary">
      <h3 className="summary-title">Mijn Kernactiviteiten</h3>
      <p className="summary-intro">
        Deze drie activiteiten vormen de kern van mijn I-Talent portfolio en tonen mijn ontwikkeling 
        op technisch, professioneel en persoonlijk vlak.
      </p>
      
      <div className="summary-cards">
        {featuredActivities.map((activity) => (
          <div className="summary-card" key={activity.id}>
            <div className="card-image">
              <img src={`${process.env.PUBLIC_URL}${activity.image}`} alt={activity.title} />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              <h4>{activity.title}</h4>
              <div className="card-meta">
                <span>{activity.subtitle}</span>
                <span>•</span>
                <span>{activity.period}</span>
              </div>
              <p className="card-description">
                {activity.subtitle === "Hackathon" && 
                  "Intensieve tweedaagse hackathon gericht op .NET Core en ASP.NET ontwikkeling waarbij ik in teamverband werkte aan technische uitdagingen onder tijdsdruk."}
                {activity.subtitle === "Vrijwilligerswerk" && 
                  "Nationale rol bij Erasmus Student Network België, verantwoordelijk voor de technische infrastructuur en website van deze internationale studentenorganisatie."}
                {activity.subtitle === "Internationale stage" && 
                  "Ontwikkeling van een AI-gebaseerd plagiaatdetectie- en aanbevelingssysteem voor wetenschappelijke papers tijdens een stage in Portugal."}
              </p>
              <div className="card-tags">
                {activity.tags && activity.tags.slice(0, 3).map((tag, index) => (
                  <span className="card-tag" key={index}>{tag}</span>
                ))}
              </div>
              <Link to={`/activiteit/${activity.id}`} className="view-details">
                Bekijk details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSummary;