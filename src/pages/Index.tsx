
import React from 'react';
import HeroSection from '../components/HeroSection';
import ThreePillarsSection from '../components/ThreePillarsSection';
import WhyAHGSection from '../components/WhyAHGSection';
import AIONStacksSection from '../components/AIONStacksSection';
import PodcastEpisodesSection from '../components/PodcastEpisodesSection';
import WhoWeServeSection from '../components/WhoWeServeSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ThreePillarsSection />
      <WhyAHGSection />
      <AIONStacksSection />
      <PodcastEpisodesSection />
      <WhoWeServeSection />
      <Footer />
    </>
  );
};

export default Index;
