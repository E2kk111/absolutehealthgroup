
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Users, Award, Heart, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Patient-Centered",
      description: "We put patients at the center of everything we do, focusing on solutions that improve their experience and outcomes."
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in all aspects of our work, from product development to customer support."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Compassion",
      description: "We understand the challenges healthcare providers face and approach our work with empathy and understanding."
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in healthcare technology to solve complex problems."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About TransformativeCare</h1>
              <p className="text-lg text-gray-700">
                We're on a mission to improve healthcare outcomes through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2018, TransformativeCare emerged from a simple observation: healthcare providers needed better technology to succeed in value-based care models.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founding team of physicians, engineers, and healthcare executives came together with a shared vision of creating solutions that would make quality care more accessible and sustainable.
                </p>
                <p className="text-gray-700">
                  Today, we serve hundreds of healthcare organizations across the country, helping them navigate the complex world of Medicare reimbursement while improving patient outcomes.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800" 
                  alt="Healthcare team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These core principles guide everything we do at TransformativeCare.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
