import React from 'react';
import HeroSection from '../components/HeroSection';
import CarePortfolioSection from '../components/CarePortfolioSection';
import ThreePillarsSection from '../components/ThreePillarsSection';
import TechnologyWorkflowSection from '../components/TechnologyWorkflowSection';
import WhoWeServeSection from '../components/WhoWeServeSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CarePortfolioSection />
      <ThreePillarsSection />
      <TechnologyWorkflowSection />
      <WhoWeServeSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
