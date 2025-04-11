
import React from 'react';
import FeatureCard from './FeatureCard';
import { PlusCircle, FileText, BarChart4, CheckCircle, Briefcase, ClipboardList } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <PlusCircle />,
      title: "Medicare Reimbursement Software",
      description: "Maximize revenue from value-based care programs with our clinician-friendly solution designed for fee-for-value models.",
      link: "/solutions/medicare-reimbursement"
    },
    {
      icon: <FileText />,
      title: "Care Coordination Platform",
      description: "Streamline patient care with our comprehensive coordination software that enhances engagement and improves health outcomes.",
      link: "/solutions/care-coordination"
    },
    {
      icon: <BarChart4 />,
      title: "Healthcare Analytics",
      description: "Make informed care decisions with interactive reports and visualizations that provide real-time insights into patient data.",
      link: "/solutions/healthcare-analytics"
    },
    {
      icon: <CheckCircle />,
      title: "Risk Adjustment Tools",
      description: "Ensure accurate Medicare risk adjustment coding with our decision support system that improves compliance and reduces bottlenecks.",
      link: "/solutions/risk-adjustment"
    },
    {
      icon: <Briefcase />,
      title: "Remote Patient Monitoring",
      description: "Run effective RPM programs with simple devices, extensive data collection, and streamlined clinical workflows that maximize reimbursement.",
      link: "/solutions/remote-patient-monitoring"
    },
    {
      icon: <ClipboardList />,
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
