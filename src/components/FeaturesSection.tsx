
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/10565/10565579.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Medicare Reimbursement Software",
      description: "Maximize revenue from value-based care programs with our clinician-friendly solution designed for fee-for-value models.",
      link: "/solutions/medicare-reimbursement"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/18615/18615306.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Care Coordination Platform",
      description: "Streamline patient care with our comprehensive coordination software that enhances engagement and improves health outcomes.",
      link: "/solutions/care-coordination"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/12628/12628368.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Healthcare Analytics",
      description: "Make informed care decisions with interactive reports and visualizations that provide real-time insights into patient data.",
      link: "/solutions/healthcare-analytics"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/17791/17791743.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Risk Adjustment Tools",
      description: "Ensure accurate Medicare risk adjustment coding with our decision support system that improves compliance and reduces bottlenecks.",
      link: "/solutions/risk-adjustment"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/14795/14795305.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Remote Patient Monitoring",
      description: "Run effective RPM programs with simple devices, extensive data collection, and streamlined clinical workflows that maximize reimbursement.",
      link: "/solutions/remote-patient-monitoring"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/18367/18367354.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Chronic Care Management",
      description: "Support Medicare's core preventive and wellness programs with an integrated solution for chronic condition management.",
      link: "/solutions/chronic-care-management"
    }
  ];

  return (
    <section className="py-16 md:py-20" id="solutions">
      <div className="container">
        <div className="section-title">
          <h2>Comprehensive Healthcare Technology Solutions</h2>
          <p>Our integrated platform helps you capture value-based care revenue while enhancing patient engagement</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
