import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ReflectionSection from '../components/reflection/ReflectionSection';

const Reflection = () => {
  return (
    <>
      <PageHeader 
        title="Eindreflectie" 
        subtitle="Mijn groei als IT-professional tijdens de opleiding"
      />
      <ReflectionSection />
    </>
  );
};

export default Reflection;