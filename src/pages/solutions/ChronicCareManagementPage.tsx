
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, Heart, Calendar, Users, FileText } from 'lucide-react';

const ChronicCareManagementPage: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Better Disease Management",
      description: "Improve outcomes for patients with chronic conditions through coordinated care plans, regular monitoring, and proactive interventions."
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: "Preventive Care Focus",
      description: "Support Medicare's preventive and wellness programs with structured care coordination and regular patient check-ins."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Care Team Coordination",
      description: "Coordinate care across multiple providers and specialists to ensure comprehensive, integrated chronic disease management."
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Streamlined Documentation",
      description: "Simplify CCM billing and documentation with automated workflows that capture billable services and ensure compliance."
    }
  ];

  const features = [
    "Comprehensive care plan development",
    "Monthly care coordination services",
    "24/7 patient access to care team",
    "Medication management and reconciliation",
    "Care transitions management",
    "Medicare CCM billing support",
    "Patient portal and engagement tools",
    "Clinical decision support",
    "Care team collaboration features",
    "Automated care reminders",
    "Health goal tracking",
    "Integration with EHR systems",
    "Quality measure reporting",
    "Multi-condition management support"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Chronic Care Management</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Support Medicare's core preventive and wellness programs with an integrated solution for chronic condition management that improves outcomes and maximizes reimbursement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://media.istockphoto.com/id/1796958238/photo/teenage-girl-discussing-test-results-with-paediatrician-doctor-prescribing-medication-to-ill.jpg?b=1&s=612x612&w=0&k=20&c=lzqBbfT1-X2oil_MtnROupGdUMMfZ4KilhX6ZlNuiQE=" 
                  alt="Chronic Care Management" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-right-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="learn-more">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Key Benefits</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our chronic care management platform helps healthcare providers deliver coordinated, proactive care to patients with chronic conditions while maximizing Medicare reimbursement.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://media.istockphoto.com/id/2192599090/photo/weekly-pill-organizer-with-medicine-on-a-medical-document-and-stethoscope-in-a-healthcare.jpg?b=1&s=612x612&w=0&k=20&c=lBo8kJzUl-QVm7D7k8jbbCNpEt21qMs_hM7KXZ2r9hA=" 
                  alt="CCM Dashboard" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-left-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our chronic care management platform provides comprehensive tools to coordinate care, manage chronic conditions, and ensure compliance with Medicare CCM requirements.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-secondary h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to enhance your chronic care management program?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join healthcare providers who are improving outcomes for patients with chronic conditions while maximizing Medicare reimbursement through effective care coordination.
            </p>
            <a href="/contact" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChronicCareManagementPage;
