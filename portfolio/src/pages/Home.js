import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ActivitiesPreview from '../components/home/ActivitiesPreview';
import XFactorSection from '../components/home/XFactorSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ActivitiesPreview />
      <XFactorSection />
    </>
  );
};

export default Home;