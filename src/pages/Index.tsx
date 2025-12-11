
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SolutionsSection from '../components/SolutionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
