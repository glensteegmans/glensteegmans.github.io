// src/components/activities/ActivityDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { requiredActivities, extraActivities, featuredActivities } from '../data/activities';
import '../styles/pages/ActivityDetail.css';

const ActivityDetail = () => {
  // Haal het ID van de activiteit uit de URL parameters
  const { id } = useParams();
  
  // Combineer alle activiteiten in één array
  const allActivities = [...featuredActivities, ...requiredActivities, ...extraActivities];
  
  // Zoek de activiteit op basis van het ID
  const activity = allActivities.find(act => act.id.toString() === id);
  
  // Gedetailleerde informatie voor kernactiviteiten
  const detailedInfo = {
    'Hack The Future (Cronos Groep)': {
      detailedDescription: `
        <p>Een intensieve tweedaagse hackathon waar ik in teamverband werkte aan een .NET Core oplossing, ondanks beperkte voorkennis en technische uitdagingen. Samen met drie medestudenten vormden we een team en werkten we aan verschillende technische opdrachten onder tijdsdruk.</p>
        <p>Tijdens de hackathon kregen we verschillende uitdagingen voorgeschoteld die we binnen een beperkte tijd moesten oplossen. We begonnen met eenvoudige opdrachten om het systeem te leren kennen en bouwden daarna complexere functionaliteiten.</p>
        <p>Een grote uitdaging was het leren werken met ASP.NET en .NET Core, technologieën waar ik vooraf weinig ervaring mee had. Daarnaast zorgden onverwachte technische problemen zoals netwerkissues voor extra druk, maar dit heeft ons teamwork en probleemoplossend vermogen versterkt.</p>
        <p>Uiteindelijk hebben we 6 van de 15 opdrachten succesvol kunnen voltooien, wat gezien onze beperkte voorkennis een goede prestatie was. We hebben onze oplossingen gepresenteerd aan een jury van professionals uit de sector.</p>
      `,
      achievements: [
        "Succesvol 6 van de 15 opdrachten voltooid binnen zeer beperkte tijd",
        "Een functionele webapplicatie gebouwd met ASP.NET ondanks beperkte voorkennis",
        "Effectief omgegaan met onverwachte technische obstakels zoals netwerkproblemen",
        "Het team behield focus en effectiviteit onder aanzienlijke tijdsdruk"
      ],
      learnings: [
        "Snel nieuwe technologieën leren (.NET Core) en direct toepassen",
        "Probleemoplossend vermogen en flexibiliteit ontwikkelen bij onverwachte obstakels",
        "Effectief samenwerken onder tijdsdruk",
        "Analyseren van problemen en helder communiceren in stressvolle situaties"
      ],
      tools: [
        "ASP.NET Core",
        "C#",
        "Visual Studio",
        "Git",
        "Azure DevOps"
      ],
      competences: [
        "Technisch: .NET Core, ASP.NET, API-integratie",
        "Soft skills: Flexibiliteit, aanpassingsvermogen, communicatie",
        "Professioneel: Werken onder tijdsdruk, oplossingsgerichtheid"
      ]
    },
    'IT Manager (ESN Belgium)': {
      detailedDescription: `
        <p>Als IT Manager bij ESN Belgium ben ik verantwoordelijk voor de nationale website en IT-infrastructuur van deze internationale studentenorganisatie. Deze rol combineert technische expertise met leiderschap en internationale samenwerking.</p>
        <p>Mijn hoofdverantwoordelijkheden omvatten het beheren en vernieuwen van de nationale website, het ondersteunen van lokale ESN-afdelingen met hun IT-behoeften en het leveren van technische ondersteuning tijdens nationale en internationale evenementen.</p>
        <p>Een groot project waar ik aan werk is de migratie van de huidige website naar het vernieuwde Satellite 5 CMS (gebaseerd op Drupal). Dit omvat niet alleen technische aspecten maar ook het trainen van lokale IT-verantwoordelijken en het waarborgen van een veilige en efficiënte overstap.</p>
        <p>Daarnaast implementeer ik veilige authenticatiemethoden zoals OAuth2 en werk ik samen met het internationale IT-team om best practices uit te wisselen en de dienstverlening te verbeteren.</p>
      `,
      achievements: [
        "Succesvolle coördinatie van de website-migratie naar Satellite 5 (Drupal-CMS)",
        "Implementatie van veilige OAuth2-authenticatie voor gebruikers",
        "Opzetten van een kennisdelingsplatform voor lokale IT-verantwoordelijken",
        "Technische ondersteuning tijdens drie nationale conferenties"
      ],
      learnings: [
        "Manage en coördineer IT-projecten in een internationale vrijwilligersomgeving",
        "Duidelijk communiceren over technische concepten naar niet-technische stakeholders",
        "Balanceren van technische optimalisatie met gebruiksvriendelijkheid",
        "Samenwerken in een gedistribueerd internationaal team met verschillende culturele achtergronden"
      ],
      tools: [
        "Drupal CMS (Satellite 5)",
        "PHP",
        "MySQL",
        "Git",
        "OAuth2",
        "Microsoft Azure"
      ],
      competences: [
        "Technisch: Drupal, PHP, MySQL, hosting, CMS, OAuth2",
        "Leiderschap: Mentoring, kennisdeling, probleemoplossing",
        "Intercultureel: Samenwerken over grenzen heen"
      ]
    },
    'Buitenlandse Stage - INSTICC': {
      detailedDescription: `
        <p>Mijn komende internationale stage bij INSTICC (Institute for Systems and Technologies of Information, Control and Communication) in Portugal biedt de kans om te werken aan geavanceerde machine learning projecten in een internationale onderzoeksomgeving.</p>
        <p>Tijdens deze stage zal ik werken aan de ontwikkeling van een hybride plagiaatdetectie- en aanbevelingssysteem voor wetenschappelijke publicaties. Dit systeem zal gebruikmaken van natuurlijke taalverwerking en machine learning technieken om manuscripten te analyseren en potentiële plagiaatgevallen te identificeren.</p>
        <p>De frontend van het systeem zal worden ontwikkeld in React.js, terwijl de backend zal bestaan uit Python-services die gebruikmaken van libraries zoals scikit-learn en spaCy voor tekstanalyse. Het geheel zal worden geïntegreerd in een Docker-omgeving voor schaalbaarheid.</p>
        <p>Deze stage biedt een unieke kans om technische vaardigheden te combineren met internationale werkervaring en om te werken aan een project dat echte impact heeft in de academische wereld.</p>
      `,
      achievements: [
        "Deze stage moet nog plaatsvinden in 2025",
        "Geplande ontwikkeling van een plagiaatdetectiesysteem met machine learning",
        "Integratie van frontend (React) en backend (Python) technologieën",
        "Internationale werkervaring in een onderzoeksinstituut"
      ],
      learnings: [
        "Werken met state-of-the-art NLP en machine learning technieken",
        "Ontwikkelen van een volledig systeem van ontwerp tot implementatie",
        "Aanpassen aan een internationale werkomgeving",
        "Zelfstandig projectmanagement en besluitvorming"
      ],
      tools: [
        "Python",
        "scikit-learn",
        "spaCy",
        "React.js",
        "Docker",
        "Git"
      ],
      competences: [
        "Technisch: Machine learning, NLP, React, Docker, Python",
        "Professioneel: Zelfstandig werken, besluitvorming",
        "Internationaal: Werken in een multiculturele omgeving"
      ]
    }
  };
  
  // Helper functie om het juiste logo te bepalen op basis van activiteit
  const getOrganizationLogo = (activity) => {
    if (!activity) return null;
    
    // Eerst checken op basis van titel voor specificiteit
    if (activity.title && activity.title.includes('IT Manager')) {
      return `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`;
    }
    if (activity.title && (activity.title.includes('Buitenlandse Stage') || activity.title.includes('INSTICC'))) {
      return `${process.env.PUBLIC_URL}/images/INSTICC_Logo.png`;
    }
    if (activity.title && activity.title.includes('Hack The Future')) {
      return `${process.env.PUBLIC_URL}/images/Hack_The_Future_Logo.png`;
    }
    
    // Als geen match op titel, checken op basis van organisatie
    const orgLogoMap = {
      'ESN Belgium': `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`,
      'ESN Hasselt': `${process.env.PUBLIC_URL}/images/ESN_Belgium_Logo.png`,
      'Hack The Future': `${process.env.PUBLIC_URL}/images/Hack_The_Future_Logo.png`,
      'INSTICC': `${process.env.PUBLIC_URL}/images/INSTICC_Logo.png`,
      'Cronos Groep': `${process.env.PUBLIC_URL}/images/Cronos_Groep_Logo.png`,
    };
    
    return orgLogoMap[activity.organization] || null;
  };
  
  // Get extra detail information if this is a core activity
  const getDetailedInfo = (activity) => {
    if (!activity) return null;
    
    for (const [title, info] of Object.entries(detailedInfo)) {
      if (activity.title.includes(title)) {
        return info;
      }
    }
    
    return null;
  };
  
  // Find enhanced information for this activity
  const enhancedInfo = activity ? getDetailedInfo(activity) : null;
  
  if (!activity) {
    return (
      <div className="loading">
        <div className="container">
          <p>Activiteit niet gevonden...</p>
          <Link to="/activiteiten" className="back-link">Terug naar overzicht</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="activity-detail">
      <div className="activity-header">
        <div className="activity-header-content container">
          <h1>{activity.title}</h1>
          
          {/* Banner image */}
          <div className="activity-banner">
            <img 
              src={getOrganizationLogo(activity)} 
              alt={`${activity.organization} Banner`} 
            />
          </div>
          
          <div className="activity-meta">
            <div className="activity-organization-period">
              <p className="activity-organization">{activity.organization}</p>
              <p className="activity-period">{activity.period}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="activity-content container">
        <div className="activity-main">
          <div className="activity-description">
            <h2>Beschrijving</h2>
            {/* Use enhanced description if available, otherwise use the standard one */}
            {enhancedInfo ? (
              <div dangerouslySetInnerHTML={{ __html: enhancedInfo.detailedDescription }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: activity.description }} />
            )}
          </div>

          {/* Use enhanced achievements if available, otherwise use standard ones */}
          {(enhancedInfo?.achievements || activity.achievements) && (
            <div className="activity-achievements">
              <h2>Prestaties</h2>
              <ul>
                {(enhancedInfo?.achievements || activity.achievements).map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Add learnings section if available */}
          {(enhancedInfo?.learnings || activity.learnings) && (
            <div className="activity-achievements">
              <h2>Leerervaringen</h2>
              <ul>
                {(enhancedInfo?.learnings || activity.learnings).map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Add competencies if available */}
          {enhancedInfo?.competences && (
            <div className="activity-achievements">
              <h2>Ontwikkelde competenties</h2>
              <ul>
                {enhancedInfo.competences.map((competence, index) => (
                  <li key={index}>{competence}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="activity-sidebar">
          {/* Use enhanced skills or standard skills */}
          {(activity.skills || activity.skills) && (
            <div className="activity-skills-box">
              <h3>Ontwikkelde Vaardigheden</h3>
              <div className="skills-list">
                {activity.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Use enhanced tools or standard tools */}
          {(enhancedInfo?.tools || activity.tools) && (
            <div className="activity-tools-box">
              <h3>Gebruikte Tools</h3>
              <ul>
                {(enhancedInfo?.tools || activity.tools).map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          )}

          {activity.links && activity.links.length > 0 && (
            <div className="activity-links-box">
              <h3>Relevante Links</h3>
              <ul>
                {activity.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="back-section">
            <Link to="/activiteiten" className="back-button">
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;