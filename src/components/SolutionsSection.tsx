
import React from 'react';
import dashboardImage from '../assets/dashboard.jpg';
import { handleSmoothScroll } from '../utils/smoothScroll';

const SolutionsSection: React.FC = () => {
  const solutionItems = [
    {
      title: "Increase Medicare reimbursement",
      description: "through accurate coding and documentation"
    },
    {
      title: "Reduce readmissions",
      description: "and improve transitions of care"
    },
    {
      title: "Enhance patient engagement",
      description: "with personalized care plans"
    },
    {
      title: "Streamline clinical workflows",
      description: "with intuitive software solutions"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-light" id="explore">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Optimize Value-Based Care & Medicare Reimbursement
            </h2>
            <p className="text-dark mb-8">
              Our comprehensive platform helps healthcare providers maximize revenue while improving patient outcomes through streamlined workflows and data-driven insights.
            </p>
            
            <div className="space-y-6 mb-8">
              {solutionItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="solutions-check">✓</div>
                  <div>
                    <strong>{item.title}</strong> {item.description}
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#solutions" 
              onClick={(e) => handleSmoothScroll(e, 'solutions')}
              className="cta-button"
            >
              Explore Solutions
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl group">
              <video 
                src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rS5r4eB/1266328__326fea413ef4f274b64746fc47fbbe06__P360.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
