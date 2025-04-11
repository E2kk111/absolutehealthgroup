
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-dark text-white py-16 md:py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Transformative Care for a Healthier Tomorrow
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Tech-enabled, data-driven healthcare solutions that optimize reimbursement and improve patient outcomes. Elevate your practice with our innovative Medicare software suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#demo" className="cta-button text-center">Schedule a Demo</a>
            <a href="#learn-more" className="cta-button secondary text-center">Learn More</a>
          </div>
        </div>
      </div>
      <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-secondary opacity-20 rounded-full z-0 hidden md:block"></div>
    </section>
  );
};

export default HeroSection;
