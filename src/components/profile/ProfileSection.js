// src/components/profile/ProfileSection.js
import React from 'react';
import '../../styles/components/ProfileSection.css';

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="container">
        <div className="profile-intro">
          <div className="profile-header">
            <div className="profile-image-container">
              <img 
                src={process.env.PUBLIC_URL + '/images/Me.jpg'} 
                alt="Glen Steegmans" 
                className="profile-image" 
              />
            </div>
            <div className="profile-intro-text">
              <h2>Over Mij</h2>
              <p>
                Als gedreven student Toegepaste Informatica met specialisatie in AI & Robotics, combineer 
                ik technische expertise met een passie voor innovatie. Mijn academische kennis 
                wordt verrijkt door mijn rollen binnen het Erasmus Student Network, waar ik eerst als 
                Communication Manager werkte bij ESN Hasselt en nu als IT Manager bij ESN Belgium, 
                waar ik digitale oplossingen ontwikkel voor een internationaal netwerk van studentenorganisaties.
              </p>
            </div>
          </div>
        </div>
        
        <div className="profile-grid">
          <div className="profile-card skills-card">
            <h3>Technische Vaardigheden</h3>
            <div className="skill-categories">
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span className="skill-name">React.js</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '85%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">HTML/CSS</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">Drupal Theming</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Backend Development</h4>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span className="skill-name">Python</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '85%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">ASP.NET Core</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">Drupal CMS</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>AI & Robotics</h4>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span className="skill-name">Machine Learning</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">Natural Language Processing</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">scikit-learn</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                  </li>
                  <li className="skill-item">
                    <span className="skill-name">Computer Vision</span>
                    <div className="skill-bar">
                      <div className="skill-level" style={{width: '65%'}}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="profile-card soft-skills-card">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🌍</div>
                <div className="soft-skill-content">
                  <h4>Interculturele Communicatie</h4>
                  <p>Ontwikkeld door samenwerking met internationale studenten en ESN-vrijwilligers uit verschillende landen.</p>
                </div>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">👥</div>
                <div className="soft-skill-content">
                  <h4>Leiderschap</h4>
                  <p>Aansturen van teams bij evenementen en projecten, en kennisoverdracht in een vrijwilligerscontext.</p>
                </div>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🚀</div>
                <div className="soft-skill-content">
                  <h4>Projectmanagement</h4>
                  <p>Plannen en coördineren van sociale en educatieve evenementen voor internationale studenten.</p>
                </div>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🗣️</div>
                <div className="soft-skill-content">
                  <h4>Technische Communicatie</h4>
                  <p>Vertaling van complexe concepten naar begrijpelijke taal voor diverse doelgroepen.</p>
                </div>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🧩</div>
                <div className="soft-skill-content">
                  <h4>Probleemoplossend Denken</h4>
                  <p>Analytische en creatieve benadering bij het oplossen van complexe technische en logistieke uitdagingen.</p>
                </div>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🔄</div>
                <div className="soft-skill-content">
                  <h4>Aanpassingsvermogen</h4>
                  <p>Flexibel schakelen tussen verschillende rollen, verantwoordelijkheden en werkomgevingen.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card experience-card">
            <h3>Relevante Ervaring</h3>
            <div className="experience-item">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h4>IT Manager</h4>
                  <span className="experience-period">feb 2024 - heden</span>
                </div>
                <p className="experience-company">Erasmus Student Network Belgium</p>
                <ul className="experience-tasks">
                  <li>Beheer en ontwikkeling van esnbelgium.org met het ESN Satellite systeem (Drupal CMS)</li>
                  <li>Implementatie van OAuth2-authenticatie gekoppeld aan internationale ESN-systemen</li>
                  <li>Technische ondersteuning van 11 lokale secties in België</li>
                  <li>IT-ondersteuning voor nationale projecten (ESNcard, ErasmusIntern, Research Projects)</li>
                  <li>Samenwerking met het IT-comité van ESN International voor platformontwikkeling</li>
                </ul>
              </div>
            </div>
            
            <div className="experience-item">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h4>Communication Manager</h4>
                  <span className="experience-period">aug 2022 - aug 2024</span>
                </div>
                <p className="experience-company">ESN Hasselt</p>
                <ul className="experience-tasks">
                  <li>Verantwoordelijk voor alle externe communicatie en sociale media strategie</li>
                  <li>Organisatie van evenementen voor internationale en Erasmus-studenten in Hasselt</li>
                  <li>Ontwikkelen van promotiemateriaal en het vergroten van de naamsbekendheid</li>
                  <li>Samenwerking met lokale partners en onderwijsinstellingen</li>
                  <li>Ondersteuning bieden aan internationale studenten bij hun verblijf in Hasselt</li>
                </ul>
              </div>
            </div>
            
            <div className="experience-item">
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h4>Hackathon Deelnemer</h4>
                  <span className="experience-period">15-16 nov 2022</span>
                </div>
                <p className="experience-company">Hack The Future - Cronos Groep, Antwerpen</p>
                <ul className="experience-tasks">
                  <li>Ontwikkeling van .NET Core en ASP.NET oplossingen in teamverband</li>
                  <li>Implementatie van pragmatische oplossingen onder tijdsdruk</li>
                  <li>Presentatie van technische oplossingen aan jury van professionals</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="profile-card education-card">
            <h3>Opleiding</h3>
            <div className="education-item">
              <div className="education-year">2019 - 2025</div>
              <div className="education-content">
                <h4>Bachelor Toegepaste Informatica: AI & Robotics</h4>
                <p className="education-institution">Hogeschool PXL, Hasselt</p>
                <p className="education-description">
                  Specialisatie in artificiële intelligentie en robotica met focus op 
                  machine learning en natuurlijke taalverwerking. Relevante vakken: 
                  Machine Learning, Computer Vision, Software Engineering, Web Development.
                </p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-year">24/02/2025 - 30/05/2025</div>
              <div className="education-content">
                <h4>Internationale Stage: Plagiaatdetectie & Aanbevelingssysteem</h4>
                <p className="education-institution">INSTICC, Portugal</p>
                <p className="education-description">
                  Ontwikkeling van een geautomatiseerd systeem voor wetenschappelijke publicaties 
                  met NLP en machine learning technieken voor plagiaatdetectie en aanbevelingen.
                </p>
              </div>
            </div>
          </div>
          
          <div className="profile-card languages-card">
            <h3>Talen</h3>
            <div className="language-items">
              <div className="language-item">
                <div className="language-info">
                  <span className="language-name">Nederlands</span>
                  <span className="language-level">Moedertaal</span>
                </div>
                <div className="language-bar">
                  <div className="language-progress" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="language-item">
                <div className="language-info">
                  <span className="language-name">Engels</span>
                  <span className="language-level">Moedertaal</span>
                </div>
                <div className="language-bar">
                  <div className="language-progress" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div className="language-item">
                <div className="language-info">
                  <span className="language-name">Frans</span>
                  <span className="language-level">Basis</span>
                </div>
                <div className="language-bar">
                  <div className="language-progress" style={{width: '40%'}}></div>
                </div>
              </div>
              
              <div className="language-item">
                <div className="language-info">
                  <span className="language-name">Duits</span>
                  <span className="language-level">Basis</span>
                </div>
                <div className="language-bar">
                  <div className="language-progress" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-card interests-card">
            <h3>Interesses</h3>
            <div className="interests-container">
              <div className="interest-item">
                <div className="interest-icon">💻</div>
                <span>Open Source</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🤖</div>
                <span>Robotica</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🧠</div>
                <span>Machine Learning</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🌍</div>
                <span>Reizen</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">📚</div>
                <span>Kennisdeling</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎮</div>
                <span>Gaming</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🏃</div>
                <span>Sport</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎵</div>
                <span>Muziek</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">💭</div>
                <span>Psychologie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;