
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Target, Eye, AlertCircle, Map, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isVisible, sectionRefs } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden group">
          {/* Animated Background Video */}
          <div className="absolute inset-0">
            <video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-medical-nurse-consulting-patient-online-using-smartphone-explaining-treatment-for-disease-therapist-remote-consultation-in-teleconference-virtual-mobile-chat-application-telehealth-helping-concept_sr3rt2yko__3b441d93c6e7d7634529b633534071cb__P360.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30 animate-ken-burns"
            />
          </div>
          
          {/* Animated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Floating Animated Shapes */}
          <div 
            className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow opacity-50 md:opacity-100"
            style={{ 
              transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow opacity-50 md:opacity-100"
            style={{ 
              animationDelay: '2s',
              transform: `translate(${(mousePosition.x - 50) * -0.15}px, ${(mousePosition.y - 50) * -0.15}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full mb-8 border border-white/20 animate-in fade-in slide-in-from-top-10 duration-1000">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-semibold text-white">About Us</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                Absolute Health Group
              </h1>
              
              {/* Decorative Dots */}
              <div className="flex items-center justify-center gap-2 mt-12 animate-in fade-in duration-1000 delay-400">
                <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="h-1.5 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section 
          id="mission"
          ref={setRef('mission')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Target className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Mission</h2>
                      <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                        To deliver accessible, tech-enabled healthcare that improves patient outcomes while aligning payment models with value rather than volume.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section 
          id="vision"
          ref={setRef('vision')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="container">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Eye className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">Vision</h2>
                      <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                        A national healthcare system where predictive AI catches issues early, personalized navigation guides every patient, and payment models reward outcomes that matter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section 
          id="problem"
          ref={setRef('problem')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <AlertCircle className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 bg-clip-text text-transparent">The Problem We Solve</h2>
                      <p className="text-xl md:text-2xl text-slate-700 mb-4 leading-relaxed">
                        Healthcare delivery is fragmented, reactive, and misaligned. Patients struggle to navigate complex systems, providers face administrative burdens, and payment models don't reward outcomes.
                      </p>
                      <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                        Absolute Health Group addresses these challenges through integrated care delivery, AI-powered clinical intelligence, and outcomes-aligned financial models.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The AION Roadmap */}
        <section 
          id="roadmap"
          ref={setRef('roadmap')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="container">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['roadmap'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Map className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent">The Roadmap</h2>
                      <p className="text-xl md:text-2xl text-slate-700 mb-6 leading-relaxed">
                        Our national roadmap for intelligent healthcare delivery includes:
                      </p>
                      <ul className="space-y-4 text-xl text-slate-700">
                        {[
                          "Hybrid care delivery (clinic, mobile, home)",
                          "AI-powered clinical intelligence",
                          "Personalized patient navigation",
                          "Outcomes-based reimbursement (RegFi)"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section 
          id="leadership"
          ref={setRef('leadership')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Users className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Leadership Team</h2>
                      <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                        Our team combines clinical expertise, technology innovation, and healthcare operations experience.
                      </p>
                      <Link
                        to="/about/leadership"
                        onClick={() => {
                          setTimeout(() => {
                            scrollToTop();
                          }, 100);
                        }}
                        className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center gap-2">
                          Meet the Leadership Team
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section 
          id="impact"
          ref={setRef('impact')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="container">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['impact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <TrendingUp className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">Our Impact</h2>
                      <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                        Metrics and outcomes demonstrating our commitment to improving healthcare delivery and patient outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
