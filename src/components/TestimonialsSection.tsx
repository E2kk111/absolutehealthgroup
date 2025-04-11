
import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="section-title">
          <h2>Trusted by Healthcare Providers</h2>
          <p>See how our solutions are transforming healthcare practices across the country</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 md:p-10 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-dark mb-8">
            "Implementing this platform has revolutionized our practice. We've seen a 30% increase in Medicare reimbursement and significantly improved our patient satisfaction scores."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-light flex items-center justify-center text-lg font-bold text-primary">
              DR
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Dr. Rebecca Johnson</h4>
              <p className="text-gray">Medical Director, Riverside Health Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
