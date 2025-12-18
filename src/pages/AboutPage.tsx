
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Target, Eye, AlertCircle, Map, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="overview.mp4"
              autoPlay
              loop
              muted
              className='w-full h-full object-cover opacity-30'
              style={{ width: '100%', height: '100%' }}
              playsInline
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                About Absolute Health Group
              </h1>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Target className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Mission</h2>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    To deliver accessible, tech-enabled healthcare that improves patient outcomes while aligning payment models with value rather than volume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Eye className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Vision</h2>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    A national healthcare system where predictive AI catches issues early, personalized navigation guides every patient, and payment models reward outcomes that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <AlertCircle className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">The Problem We Solve</h2>
                  <p className="text-xl text-slate-700 mb-4 leading-relaxed">
                    Healthcare delivery is fragmented, reactive, and misaligned. Patients struggle to navigate complex systems, providers face administrative burdens, and payment models don't reward outcomes.
                  </p>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Absolute Health Group addresses these challenges through integrated care delivery, AI-powered clinical intelligence, and outcomes-aligned financial models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The AION Roadmap */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Map className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">The AION Roadmap</h2>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                    Our national roadmap for intelligent healthcare delivery includes:
                  </p>
                  <ul className="space-y-3 text-xl text-slate-700">
                    {[
                      "Hybrid care delivery (clinic, mobile, home)",
                      "AI-powered clinical intelligence",
                      "Personalized patient navigation",
                      "Outcomes-based reimbursement (RegFi)",
                      "National advocacy through AdvocateIQ™"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Users className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Leadership Team</h2>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                    Our team combines clinical expertise, technology innovation, and healthcare operations experience.
                  </p>
                  <Link
                    to="/about/leadership"
                    onClick={() => {
                      setTimeout(() => {
                        scrollToTop();
                      }, 100);
                    }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Meet the Leadership Team
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <TrendingUp className="text-white" size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Our Impact</h2>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Metrics and outcomes demonstrating our commitment to improving healthcare delivery and patient outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
