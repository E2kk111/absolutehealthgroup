
import React from 'react';
import dashboardImage from '../assets/dashboard.jpg';

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
    <section className="py-16 md:py-20 bg-light" id="learn-more">
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
            
            <a href="#explore" className="cta-button">Explore Solutions</a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                alt="Dashboard Analytics" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
