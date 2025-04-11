
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, FileText, Users, Settings } from 'lucide-react';

const MedicareReimbursementPage: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Maximize Revenue",
      description: "Capture all billable services with accurate coding and documentation support."
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Reduce Administrative Burden",
      description: "Automate time-consuming documentation and claim submission processes."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Improve Patient Care",
      description: "Focus more on patients and less on paperwork with streamlined workflows."
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Ensure Compliance",
      description: "Stay compliant with ever-changing Medicare rules and regulations."
    }
  ];

  const features = [
    "Automated Medicare coding suggestions",
    "Real-time eligibility verification",
    "Chronic care management tracking",
    "Value-based care quality metrics",
    "Annual wellness visit templates",
    "Custom documentation templates",
    "Claim scrubbing and error detection",
    "Comprehensive analytics dashboard",
    "Integration with major EHR systems",
    "Multi-provider practice support"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Medicare Reimbursement Software</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Maximize your practice's revenue through optimized Medicare billing and documentation processes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#demo" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800" 
                  alt="Medicare Reimbursement Software" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Key Benefits</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our Medicare reimbursement software helps healthcare providers optimize their revenue while reducing administrative burden.
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
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" 
                  alt="Software Dashboard" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our platform is designed specifically for healthcare providers participating in Medicare programs, with features tailored to maximize reimbursement and improve clinical workflows.
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
            <h2 className="text-3xl font-bold mb-6">Ready to optimize your Medicare reimbursement?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who have increased their revenue while reducing administrative burden.
            </p>
            <a href="#demo" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MedicareReimbursementPage;
