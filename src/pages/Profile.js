// src/pages/Profile.js
import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ProfileSection from '../components/profile/ProfileSection';

const Profile = () => {
  return (
    <>
      <PageHeader 
        title="Mijn Profiel" 
        subtitle="Over mijn vaardigheden, achtergrond en ambities"
      />
      <ProfileSection />
    </>
  );
};

export default Profile;