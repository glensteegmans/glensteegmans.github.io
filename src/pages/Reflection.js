// src/pages/Reflection.js
import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ReflectionSection from '../components/reflection/ReflectionSection';

const Reflection = () => {
  return (
    <>
      <PageHeader 
        title="Eindreflectie" 
        subtitle="Mijn ontwikkeling en groei door het X-Factor model"
      />
      <ReflectionSection />
    </>
  );
};

export default Reflection;