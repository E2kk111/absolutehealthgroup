
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Careers</h1>
              <p className="text-lg text-gray-700">
                Join our team and help transform healthcare through technology
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-2xl">Career Opportunities Coming Soon</h2>
            <p className="mt-4">We're growing our team! Check back soon for open positions.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
