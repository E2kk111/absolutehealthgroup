
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, BarChart3, TrendingUp, Eye, Zap } from 'lucide-react';

const HealthcareAnalyticsPage: React.FC = () => {
  const benefits = [
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools that reveal patterns and trends."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Performance Optimization",
      description: "Identify opportunities to improve clinical outcomes, reduce costs, and enhance operational efficiency across your organization."
    },
    {
      icon: <Eye className="w-8 h-8 text-secondary" />,
      title: "Real-Time Monitoring",
      description: "Monitor key performance indicators and patient metrics in real-time to make proactive decisions and interventions."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Predictive Analytics",
      description: "Leverage machine learning and predictive models to forecast patient outcomes and identify at-risk populations early."
    }
  ];

  const features = [
    "Interactive dashboards and reports",
    "Real-time data visualization",
    "Customizable KPI tracking",
    "Population health analytics",
    "Clinical quality metrics",
    "Financial performance analysis",
    "Patient outcome tracking",
    "Provider performance benchmarking",
    "Risk stratification tools",
    "Predictive modeling capabilities",
    "Data integration from multiple sources",
    "Export and sharing capabilities",
    "Automated report generation",
    "Trend analysis and forecasting"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 md:py-32 lg:py-40 bg-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Healthcare Analytics</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Make informed care decisions with interactive reports and visualizations that provide real-time insights into patient data and organizational performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="cta-button">Request Demo</a>
                  <a href="#learn-more" className="cta-button bg-white border-2 border-primary text-primary hover:bg-light">Learn More</a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl group">
                <img 
                  src="https://media.istockphoto.com/id/1770654774/photo/lecture-global-business.jpg?b=1&s=612x612&w=0&k=20&c=RS_iuWykCuqLy9qrB2j-Y5gcN7F7I9zEsBgaNMU7l1U=" 
                  alt="Healthcare Analytics Dashboard" 
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
                Our healthcare analytics platform empowers organizations to make data-driven decisions that improve patient outcomes, optimize operations, and drive financial performance.
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
                  src="https://media.istockphoto.com/id/1165046681/photo/healthcare-business-graph-and-medical-examination-and-businessman-analyzing-data-and-growth.jpg?b=1&s=612x612&w=0&k=20&c=ufz_Z35f3j9tLgNRmSK9ErssvCx1B2R_Hq6jXLwHDq8=" 
                  alt="Analytics Visualization" 
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 animate-in fade-in slide-in-from-left-10"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Features</h2>
                <p className="text-gray-700 mb-6">
                  Our analytics platform provides comprehensive tools to analyze, visualize, and act on healthcare data, enabling organizations to improve care quality and operational efficiency.
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
            <h2 className="text-3xl font-bold mb-6">Ready to unlock the power of your healthcare data?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join healthcare organizations that are making smarter decisions and improving outcomes through advanced analytics and data insights.
            </p>
            <a href="/contact" className="cta-button bg-white text-primary hover:bg-gray-100">Schedule a Demo</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareAnalyticsPage;
