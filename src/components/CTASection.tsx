
import React from 'react';
import { Link } from 'react-router-dom';


const CTASection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-16 md:py-20 bg-primary text-white text-center" id="demo">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Schedule a personalized demonstration to see how our solutions can optimize your Medicare reimbursement and improve patient outcomes.
        </p>
        <Link 
          to="/contact"
          onClick={scrollToTop}     
          className="cta-button bg-white text-primary hover:bg-light"
        >
          Request Demo
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
