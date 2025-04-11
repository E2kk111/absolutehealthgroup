
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WhitePapersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">White Papers</h1>
              <p className="text-lg text-gray-700">
                In-depth research and analysis on key healthcare industry challenges
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-2xl">White Papers Coming Soon</h2>
            <p className="mt-4">Our team is preparing thoughtful white papers to help you navigate complex healthcare challenges.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhitePapersPage;
