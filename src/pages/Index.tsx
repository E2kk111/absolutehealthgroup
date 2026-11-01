import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandIdentitySection from '../components/BrandIdentitySection';
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
      <BrandIdentitySection />
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
