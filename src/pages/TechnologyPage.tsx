
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Network, DollarSign, ArrowRight, Sparkles, Shield, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechnologyPage: React.FC = () => {
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
  const coreCapabilities = [
    {
      icon: Brain,
      title: "Unified Patient Record",
      description: "Aggregates EHRs, labs, imaging, pharmacy data, care plans, RPM feeds, and social determinants."
    },
    {
      icon: Network,
      title: "AI-Assisted Navigation Engine",
      description: "Predictive models identify rising-risk patients, missed care opportunities, medication gaps, and care-coordination bottlenecks."
    },
    {
      icon: DollarSign,
      title: "Workflow Automation",
      description: "Automated outreach, appointment optimization, documentation assistance, billing rules, and auth/pre-cert support."
    },
    {
      icon: Brain,
      title: "Care-at-Home Command Center",
      description: "Real-time vitals monitoring, escalations, triage workflows, and clinician decision support."
    },
    {
      icon: Network,
      title: "Interoperability Layer",
      description: "Plug-and-play connections to major EHRs, payers, remote monitoring devices, and value-based care platforms."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden group">
          {/* Animated Background Video */}
          <div className="absolute inset-0">
            <video 
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20250211-pm-chukhlomin-diabetic-medical-office-4-studio-crossmedia00000000-wlr6wv82b9__628a0b76825a302e617817f90000d3d3__P360.mp4"
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
                <span className="text-sm font-semibold text-white">AptusCore™</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                Health Operating System
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-blue-100 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                The unified layer connecting data, care delivery, and intelligent automation.
              </p>
              
              
              
              {/* CTA Button */}
              <Link
                to="#stacks"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('stacks')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Core Capabilities
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              
              {/* Decorative Dots */}
              <div className="flex items-center justify-center gap-2 mt-12 animate-in fade-in duration-1000 delay-700">
                <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="h-1.5 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section 
          id="stacks"
          ref={setRef('stacks')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['stacks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Core Capabilities
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['stacks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Powerful technology solutions designed to transform healthcare delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                const gradients = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-green-500 to-green-600",
                  "from-orange-500 to-orange-600",
                  "from-pink-500 to-pink-600"
                ];
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['stacks'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{capability.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{capability.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

{/* Workflow Section */}
<section 
          id="workflow"
          ref={setRef('workflow')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Workflow
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Streamlined processes that drive efficiency and improve patient outcomes
                </p>
              </div>
              <Card className={`border-0 shadow-2xl bg-white/90 backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
                    <img
                      src="/workflow.jpg"
                      alt="Workflow"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why It Matters */}
        <section 
          id="why-it-matters"
          ref={setRef('why-it-matters')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="container">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['why-it-matters'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-12 md:p-16 border border-blue-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Why It Matters
                  </h2>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      Care teams shouldn't drown in admin work.
                    </p>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      Patients shouldn't navigate a maze.
                    </p>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      Health systems shouldn't struggle to integrate tools.
                    </p>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mt-6 pt-6 border-t border-blue-200">
                      AptusCore™ brings everything together—quietly, intelligently, and in the background—so clinicians can focus on care and patients can focus on living.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Security & Compliance */}
        <section 
          id="security"
          ref={setRef('security')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Security & Compliance
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 text-center mb-12 transition-all duration-1000 delay-200 ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Enterprise-grade security protecting patient data and ensuring compliance
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "HIPAA-compliant data infrastructure", gradient: "from-blue-500 to-blue-600" },
                  { icon: Lock, text: "End-to-end encryption", gradient: "from-purple-500 to-purple-600" },
                  { icon: Shield, text: "Zero-trust architecture", gradient: "from-green-500 to-green-600" },
                  { icon: CheckCircle2, text: "Full audit trails for all clinical and operational events", gradient: "from-orange-500 to-orange-600" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card 
                      key={index}
                      className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <p className="text-slate-700 text-lg font-medium group-hover:text-slate-900 transition-colors">{item.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <p className={`text-center text-lg md:text-xl text-slate-700 mt-12 font-semibold transition-all duration-1000 delay-500 ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                This is the backbone powering TransformativeCare™ and the entire Absolute Health ecosystem.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
