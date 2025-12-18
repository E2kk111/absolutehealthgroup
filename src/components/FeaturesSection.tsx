
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/10565/10565579.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Medicare Reimbursement Software",
      description: "Maximize revenue from value-based care programs with our clinician-friendly solution designed for fee-for-value models.",
      link: "/clinic/medicare-reimbursement"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/18615/18615306.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Care Coordination Platform",
      description: "Streamline patient care with our comprehensive coordination software that enhances engagement and improves health outcomes.",
      link: "/clinic/care-coordination"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/12628/12628368.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Healthcare Analytics",
      description: "Make informed care decisions with interactive reports and visualizations that provide real-time insights into patient data.",
      link: "/clinic/healthcare-analytics"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/17791/17791743.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Risk Adjustment Tools",
      description: "Ensure accurate Medicare risk adjustment coding with our decision support system that improves compliance and reduces bottlenecks.",
      link: "/clinic/risk-adjustment"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/14795/14795305.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Remote Patient Monitoring",
      description: "Run effective RPM programs with simple devices, extensive data collection, and streamlined clinical workflows that maximize reimbursement.",
      link: "/clinic/remote-patient-monitoring"
    },
    {
      icon: <img src="https://cdn-icons-png.flaticon.com/128/18367/18367354.png" alt="Medicare Reimbursement" className="w-12 h-12" />,
      title: "Chronic Care Management",
      description: "Support Medicare's core preventive and wellness programs with an integrated solution for chronic condition management.",
      link: "/clinic/chronic-care-management"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Comprehensive Healthcare Technology Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our integrated platform helps you capture value-based care revenue while enhancing patient engagement
          </p>
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
