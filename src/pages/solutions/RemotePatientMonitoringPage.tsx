
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, Monitor, Heart, Clock, TrendingUp } from 'lucide-react';

const RemotePatientMonitoringPage: React.FC = () => {
  const benefits = [
    {
      icon: <Monitor className="w-8 h-8 text-secondary" />,
      title: "Continuous Monitoring",
      description: "Monitor patients' vital signs and health metrics remotely in real-time, enabling early intervention and proactive care management."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Improved Outcomes",
      description: "Reduce hospitalizations and emergency visits by detecting health issues early and providing timely interventions."
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "24/7 Patient Support",
      description: "Provide round-the-clock monitoring and support, giving patients peace of mind and reducing care gaps."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Maximize Reimbursement",
      description: "Capture billable RPM services with automated documentation and streamlined billing workflows that maximize revenue."
    }
  ];

  const features = [
    "Simple, user-friendly monitoring devices",
    "Real-time vital sign tracking",
    "Automated data collection and transmission",
    "Clinical alert system for abnormal readings",
    "Patient engagement tools and reminders",
    "Medicare RPM billing support",
    "Integration with EHR systems",
    "Customizable care plans",
    "Provider dashboard and analytics",
    "Patient portal access",
    "Mobile app for patients",
    "Automated report generation",
    "Compliance with CMS regulations",
    "Multi-device support (blood pressure, glucose, weight, etc.)"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 md:py-32 lg:py-40 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Remote Patient Monitoring</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Run effective RPM programs with simple devices, extensive data collection, and streamlined clinical workflows that maximize reimbursement while improving patient outcomes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://media.istockphoto.com/id/2192940658/photo/asia-people-young-woman-video-call-talk-chat-help-guide-online-at-home-by-ai-tele-consult.jpg?b=1&s=612x612&w=0&k=20&c=XUaz5dDLcKJvhKDVc0Q4DKdFVNwKhViGSRn04zoZ_cw=" 
                  alt="Remote Patient Monitoring" 
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
                Our remote patient monitoring platform enables healthcare providers to deliver proactive, continuous care while maximizing Medicare reimbursement and improving patient outcomes.
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
                  src="https://media.istockphoto.com/id/1494984673/photo/doctor-or-nurse-in-uniform-with-stethoscope-writing-something-information-of-patient.jpg?b=1&s=612x612&w=0&k=20&c=-Hg39lhM6BT4g_TyzUP5v8JS4JPYioSP03ckgH_YeR0=" 
                  alt="RPM Dashboard" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-left-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our remote patient monitoring platform provides comprehensive tools to monitor patients remotely, collect vital health data, and deliver proactive care interventions.
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
            <h2 className="text-3xl font-bold mb-6">Ready to launch your remote patient monitoring program?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join healthcare providers who are improving patient outcomes and maximizing reimbursement through effective remote monitoring programs.
            </p>
            <a href="/contact" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RemotePatientMonitoringPage;
