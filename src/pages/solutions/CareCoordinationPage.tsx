
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, Users, Heart, Clock, Shield, TrendingUp } from 'lucide-react';

const CareCoordinationPage: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Enhanced Patient Engagement",
      description: "Improve patient communication and involvement in their care journey with personalized care plans and real-time updates."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Better Health Outcomes",
      description: "Coordinate care across providers to ensure patients receive timely, appropriate interventions and follow-up care."
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Streamlined Workflows",
      description: "Reduce care gaps and improve efficiency with automated care coordination tasks and seamless provider communication."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Care Continuity",
      description: "Ensure smooth transitions between care settings and maintain continuity of care across the entire patient journey."
    }
  ];

  const features = [
    "Comprehensive care plan management",
    "Multi-provider communication hub",
    "Patient portal integration",
    "Automated care reminders and notifications",
    "Medication reconciliation tools",
    "Appointment scheduling and coordination",
    "Care team collaboration features",
    "Real-time care status tracking",
    "Transition of care management",
    "Patient engagement analytics",
    "Secure messaging between providers",
    "Document sharing and access management"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 md:py-32 lg:py-40 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Care Coordination Platform</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Streamline patient care with our comprehensive coordination software that enhances engagement and improves health outcomes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800" 
                  alt="Care Coordination Platform" 
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
                Our care coordination platform helps healthcare providers deliver seamless, patient-centered care while improving outcomes and reducing readmissions.
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
                  src="https://media.istockphoto.com/id/1369953931/photo/meeting-with-business-people-to-discuss-and-brainstorm-ideas-on-financial-reports-the-concept.jpg?b=1&s=612x612&w=0&k=20&c=YBGStToSaxii6vw00ag6-TfHOp7odfjouvTe9aoBHcU=" 
                  alt="Care Coordination Dashboard" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-left-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our care coordination platform is designed to connect all members of the care team, ensuring patients receive coordinated, high-quality care across all settings and providers.
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
            <h2 className="text-3xl font-bold mb-6">Ready to improve your care coordination?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join healthcare organizations that have enhanced patient outcomes and reduced readmissions through better care coordination.
            </p>
            <a href="/contact" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareCoordinationPage;
