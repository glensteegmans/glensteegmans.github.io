import React from 'react';
import { profileData } from '../../data/profile';
import '../../styles/components/ProfileSection.css';

const ProfileSection = () => {
  return (
    <section className="profile-section section">
      <div className="container">
        <div className="profile-grid">
          <div className="profile-info card">
            <h2>Over mij</h2>
            <p>{profileData.background}</p>
            
            <div className="profile-details">
              <div className="detail-item">
                <h3>Persoonlijkheid</h3>
                <p>{profileData.personality}</p>
              </div>
              
              <div className="detail-item">
                <h3>Toekomstvisie</h3>
                <p>{profileData.future}</p>
              </div>
              
              <div className="detail-item">
                <h3>Sterktes</h3>
                <p>{profileData.strengths}</p>
              </div>
              
              <div className="detail-item">
                <h3>Verbeterpunten</h3>
                <p>{profileData.improvements}</p>
              </div>
            </div>
          </div>
          
          <div className="profile-skills">
            <div className="skills-card card">
              <h2>Vaardigheden</h2>
              
              {profileData.skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h3>{skillCategory.category}</h3>
                  <div className="skills-tags">
                    {skillCategory.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;