// src/components/reflection/ReflectionSection.js
import React, { useState } from 'react';
import XFactorModel from './XFactorModel';
import ReflectionDetail from './ReflectionDetail';
import ProgressChart from './ProgressChart';
import '../../styles/components/ReflectionSection.css';

const ReflectionSection = () => {
  const [activeXFactor, setActiveXFactor] = useState('passion');
  
  const xFactorData = {
    passion: {
      title: '(Em)passie',
      icon: '🔥',
      color: '#FF5733',
      description: 'Passie voor technologie en het overbrengen van deze passie op anderen',
      content: `
        Mijn reis door de IT-opleiding is begonnen uit pure nieuwsgierigheid en is uitgegroeid tot een diepe passie. 
        Bij de start van mijn studie was ik vooral gefascineerd door de mogelijkheden van code, maar had ik nog 
        weinig praktische ervaring. Nu, enkele jaren later, heeft deze nieuwsgierigheid zich ontwikkeld tot een 
        echte passie voor het ontwikkelen van innovatieve oplossingen.
        
        Tijdens Hack The Future merkte ik hoe mijn enthousiasme voor technologie aanstekelijk werkte op mijn teamgenoten. 
        Wanneer we vastliepen met een complexe .NET opdracht, was het mijn gedrevenheid om door te zetten die ons team 
        in beweging hield. Dit heeft me geleerd dat passie niet alleen een persoonlijke drijfveer is, maar ook een 
        krachtig instrument om anderen te motiveren.
        
        In mijn rol als IT Manager bij ESN Belgium kan ik deze passie nu doelgericht inzetten om andere 
        vrijwilligers te enthousiasmeren voor digitale innovatie. Door technische concepten toegankelijk uit te 
        leggen en de impact van ons werk zichtbaar te maken, help ik anderen om hun eigen interesse in technologie te ontwikkelen.
      `,
      startLevel: 3,
      endLevel: 4.5
    },
    entrepreneurship: {
      title: 'Ondernemerschap',
      icon: '🚀',
      color: '#33A1FD',
      description: 'Initiatief nemen en proactief handelen om oplossingen te creëren',
      content: `
        Aan het begin van mijn opleiding was ik vooral een uitvoerder - ik volgde instructies en leerde de basis. 
        Gaandeweg ben ik gegroeid naar iemand die zelf kansen ziet en initiatief neemt om deze te benutten.
        
        Tijdens mijn stage in Portugal kreeg ik veel vrijheid om zelf richting te geven aan het project. Deze 
        autonomie was aanvankelijk uitdagend maar heeft me gedwongen om ondernemend te worden. Waar ik vroeger 
        bij obstakels zou wachten op instructie, leerde ik nu zelf beslissingen te nemen, alternatieve benaderingen 
        te onderzoeken en creatieve oplossingen te implementeren.
        
        Het meest trots ben ik op de manier waarop ik mijn rol als IT Manager bij ESN Belgium heb ingevuld. 
        Wat begon als een functie gericht op website-onderhoud, heb ik uitgebreid tot een rol waarin ik proactief 
        IT-verbeteringen voorstel en implementeer. Door kansen te identificeren voor efficiëntieverbeteringen en 
        deze zelfstandig uit te werken, heb ik laten zien dat ondernemerschap niet alleen gaat over het starten 
        van een bedrijf, maar over het nemen van eigenaarschap en het creëren van meerwaarde.
      `,
      startLevel: 2,
      endLevel: 4
    },
    international: {
      title: 'Internationaal samenwerken',
      icon: '🌐',
      color: '#4CAF50',
      description: 'Effectief functioneren in internationale en interculturele contexten',
      content: `
        Mijn internationale competenties hebben een significante ontwikkeling doorgemaakt tijdens mijn opleiding. 
        Voorheen beperkte mijn internationale ervaring zich tot vakanties en oppervlakkige contacten, maar nu kan 
        ik effectief functioneren in multiculturele professionele omgevingen.
        
        Mijn buitenlandse stage in Portugal was een keerpunt. Het werken in een team met mensen uit verschillende 
        Europese landen dwong me om mijn communicatiestijl aan te passen en culturele verschillen te overbruggen. 
        Ik leerde hoe directe Nederlandse communicatie soms verkeerd begrepen kan worden en ontwikkelde een 
        gevoel voor cultuurgebonden communicatiepatronen.
        
        Bij ESN Belgium werk ik samen met een internationaal bestuur en heb ik regelmatig contact met IT-verantwoordelijken 
        uit meer dan 40 Europese landen. Deze ervaring heeft me geleerd hoe je technische kennis kunt overdragen 
        ondanks taalbarrières en culturele verschillen. Bovendien heb ik geleerd om te navigeren tussen verschillende 
        werkstijlen en verwachtingen, wat essentieel is in een globaliserende IT-sector.
        
        De grootste groei zit in mijn vermogen om niet alleen cultuurverschillen te respecteren, maar deze 
        actief in te zetten als bron van innovatie en verschillende perspectieven.
      `,
      startLevel: 2.5,
      endLevel: 4.5
    },
    multidisciplinary: {
      title: 'Multidisciplinariteit',
      icon: '🔄',
      color: '#9C27B0',
      description: 'Verbinden van IT met andere vakgebieden en competenties',
      content: `
        In het begin van mijn opleiding zag ik IT vooral als een puur technisch domein. Nu begrijp ik dat de 
        grootste meerwaarde ontstaat wanneer je technologie kunt verbinden met andere disciplines.
        
        Tijdens Hack The Future werd duidelijk dat technische kennis alleen niet voldoende was. Het combineren 
        van programmeervaardigheden met effectieve communicatie en projectmanagement bleek essentieel om binnen 
        de beperkte tijd resultaten te behalen. Deze ervaring leerde me dat technische oplossingen altijd ingebed 
        zijn in een bredere context.
        
        Mijn rol bij ESN Belgium heeft deze multidisciplinaire aanpak verder versterkt. Hier moet ik technische 
        kennis combineren met inzicht in gebruikerservaring, vrijwilligersmanagement en interculturele communicatie. 
        Het ontwikkelen van een nieuwe website vereiste niet alleen technische implementatie maar ook inzicht in 
        gebruikersbehoeften, toegankelijkheid en meertalige content.
        
        Tijdens mijn stage in Portugal was de integratie van IT met taalkundige principes essentieel bij het 
        ontwikkelen van het plagiaatdetectiesysteem. Deze ervaring heeft me geleerd om buiten de grenzen van 
        mijn vakgebied te denken en actief verbindingen te zoeken met andere disciplines voor betere oplossingen.
      `,
      startLevel: 2,
      endLevel: 3.5
    },
    sustainability: {
      title: 'Duurzaamheid',
      icon: '♻️',
      color: '#00796B',
      description: 'Ontwikkelen van duurzame oplossingen met maatschappelijke impact',
      content: `
        Mijn begrip van duurzaamheid in IT is aanzienlijk geëvolueerd. Aan het begin van mijn studie had ik 
        nauwelijks aandacht voor de duurzaamheidsaspecten van technologische oplossingen, maar nu beschouw ik 
        dit als een integraal onderdeel van goed IT-ontwerp.
        
        Bij het ontwikkelen van de ESN Belgium website heb ik bewust gekozen voor energiezuinige hosting en 
        geoptimaliseerde code die minder serverbronnen verbruikt. Daarnaast heb ik duurzaamheid geïntegreerd 
        in het ontwerp door te zorgen dat de website toegankelijk is voor alle gebruikers, inclusief degenen 
        met een beperking, waardoor digitale inclusie wordt bevorderd.
        
        Tijdens mijn stage in Portugal heb ik me gericht op het creëren van een systeem dat wetenschappelijk 
        onderzoek efficiënter maakt door plagiaatdetectie te automatiseren. Dit draagt bij aan de duurzaamheid 
        van academische kennis door duplicatie van onderzoek te verminderen en de integriteit van wetenschappelijke 
        publicaties te waarborgen.
        
        Mijn groei op dit gebied is zichtbaar in hoe ik duurzaamheid nu integreer in het ontwerp en de 
        implementatie van IT-oplossingen, in plaats van het achteraf als een extra overweging te behandelen.
      `,
      startLevel: 1.5,
      endLevel: 3
    }
  };
  
  return (
    <section className="reflection-section">
      <div className="container">
        <div className="reflection-intro">
          <h2>Eindreflectie I-Talent Traject</h2>
          <p>
            Gedurende mijn opleiding heb ik me gericht op de vijf X-factoren die mij vormen als 
            IT-professional. Hieronder deel ik mijn ontwikkeling en groei per factor, geïllustreerd 
            aan de hand van concrete voorbeelden uit mijn kernactiviteiten.
          </p>
        </div>
        
        <XFactorModel 
          activeXFactor={activeXFactor} 
          setActiveXFactor={setActiveXFactor} 
          xFactorData={xFactorData}
        />
        
        <ReflectionDetail 
          activeXFactor={activeXFactor}
          xFactorData={xFactorData}
        />
        
        <div className="progress-section">
          <h3>Mijn ontwikkeling in het X-Factor model</h3>
          <p className="progress-intro">
            Deze grafiek toont mijn ontwikkeling van de vijf X-factoren gedurende mijn I-Talent traject, 
            op een schaal van 1 (beginnend) tot 5 (expert).
          </p>
          
          <ProgressChart xFactorData={xFactorData} />
        </div>
        
        <div className="final-reflection">
          <h3>Algemene reflectie op mijn I-Talent traject</h3>
          <div className="reflection-content">
            <p>
              Terugkijkend op mijn I-Talent traject zie ik een duidelijke rode draad: van een onervaren 
              student met vooral theoretische kennis ben ik gegroeid naar een veelzijdige professional 
              die technische vaardigheden combineert met soft skills en een brede kijk op de maatschappelijke 
              impact van technologie.
            </p>
            <p>
              De meest waardevolle les die ik heb geleerd is dat technische excellentie alleen niet voldoende 
              is voor een succesvolle IT-carrière. Het vermogen om samen te werken, helder te communiceren en 
              creatief problemen op te lossen is minstens zo belangrijk als je programmeervaardigheden.
            </p>
            <p>
              Mijn internationale ervaringen hebben mijn horizon verbreed en me voorbereid op een 
              globaliserende arbeidsmarkt. Door samen te werken met mensen uit verschillende culturen heb 
              ik geleerd om flexibel te zijn in mijn benadering en open te staan voor diverse perspectieven.
            </p>
            <p>
              Voor de toekomst wil ik me verder ontwikkelen in het verbinden van AI-technologieën met 
              maatschappelijke uitdagingen. Ik zie mezelf als een bruggenbouwer die technische expertise 
              kan vertalen naar zinvolle toepassingen die een positieve impact hebben.
            </p>
            <p>
              Het I-Talent traject heeft me niet alleen voorbereid op mijn eerste professionele rol, maar 
              heeft me ook een mindset gegeven van continu leren en aanpassen - een essentiële eigenschap 
              in het snel veranderende IT-landschap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection;