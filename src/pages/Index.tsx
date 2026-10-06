import React from 'react';
import HeroSection from '../components/HeroSection';
import ThreePillarsSection from '../components/ThreePillarsSection';
import TechnologyWorkflowSection from '../components/TechnologyWorkflowSection';
import WhoWeServeSection from '../components/WhoWeServeSection';\nimport CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ThreePillarsSection />
      <TechnologyWorkflowSection />
      <WhoWeServeSection />
      <Footer />
    </>
  );
};

export default Index;
