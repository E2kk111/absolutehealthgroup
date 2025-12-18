
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, Shield, FileCheck, Target, AlertCircle } from 'lucide-react';

const RiskAdjustmentPage: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Accurate Risk Coding",
      description: "Ensure precise Medicare risk adjustment coding with intelligent decision support that identifies all relevant conditions and diagnoses."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-secondary" />,
      title: "Compliance Assurance",
      description: "Stay compliant with CMS regulations and reduce audit risk through automated validation and documentation verification."
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Maximize Reimbursement",
      description: "Capture all billable risk-adjusted conditions to optimize revenue while maintaining coding accuracy and integrity."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-secondary" />,
      title: "Risk Identification",
      description: "Identify gaps in documentation and missed opportunities for risk adjustment coding to improve patient risk scores."
    }
  ];

  const features = [
    "Automated HCC code suggestions",
    "Real-time coding validation",
    "Documentation gap analysis",
    "Risk score calculation tools",
    "CMS compliance checking",
    "ICD-10 code mapping",
    "Chronic condition tracking",
    "Provider education resources",
    "Audit trail and reporting",
    "Integration with EHR systems",
    "Risk adjustment factor (RAF) scoring",
    "Historical data analysis",
    "Coding workflow optimization",
    "Quality measure tracking"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 md:py-32 lg:py-40 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Risk Adjustment Tools</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Ensure accurate Medicare risk adjustment coding with our decision support system that improves compliance and reduces bottlenecks while maximizing appropriate reimbursement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://media.istockphoto.com/id/2163506577/photo/work-safety-and-compliance-concept-businessman-holding-magnifying-glass-with-icons-work.jpg?b=1&s=612x612&w=0&k=20&c=6W9Xw3FFH5KX4MMdMGqKAy7ndCLik6EfYV6AyWBNETE=" 
                  alt="Risk Adjustment Tools" 
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
                Our risk adjustment tools help healthcare providers accurately capture patient risk profiles, ensure compliance, and optimize Medicare reimbursement.
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
                  src="https://media.istockphoto.com/id/1461321266/vector/know-your-customer-verification-technology-software-kyc-and-kyb-conceptual-illustration.jpg?b=1&s=612x612&w=0&k=20&c=SiZDlI8sfAdSNLziIsPXboY3e6XiqPnbt-20RA3N-QA=" 
                  alt="Risk Adjustment Dashboard" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-left-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our risk adjustment platform provides comprehensive tools to support accurate coding, identify documentation gaps, and ensure compliance with CMS regulations.
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
            <h2 className="text-3xl font-bold mb-6">Ready to optimize your risk adjustment coding?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join healthcare providers who have improved coding accuracy, ensured compliance, and maximized appropriate Medicare reimbursement.
            </p>
            <a href="/contact" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RiskAdjustmentPage;
