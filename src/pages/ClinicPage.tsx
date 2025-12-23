
import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, Truck, Home, Navigation, ArrowRight, CheckCircle2, Users, Heart, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const ClinicPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  const clinicTypes = [
    {
      icon: Building2,
      title: "Hybrid Clinics",
      path: "/clinic/hybrid-clinics",
      description: "Preventive medicine & diagnostics, chronic condition programs, procedure support & recovery, care plan management",
      features: ["Conditions we treat", "Example workflows", "Patient testimonials"]
    },
    {
      icon: Truck,
      title: "Mobile Clinics",
      path: "/clinic/mobile-clinics",
      description: "Community visits, labs + diagnostics in the field, prevention units, rapid response teams",
      features: ["Deployment map", "Mobile fleet capabilities", "Impact metrics"]
    },
    {
      icon: Home,
      title: "Care-At-Home",
      path: "/clinic/care-at-home",
      description: "NP/PA home visits, wound care & post-acute recovery, medication management, longevity & preventive pathways",
      features: ["Visit workflow", "Home equipment", "Virtual support"]
    },
    {
      icon: Navigation,
      title: "Care Navigation Layer",
      path: "/clinic/care-navigation",
      description: "Every patient receives benefits + coverage guidance, specialist matching, care plan coordination, ongoing monitoring",
      features: ["Patient app", "Navigation workflow", "Support availability"]
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rS5r4eB/1266328__326fea413ef4f274b64746fc47fbbe06__P360.mp4"
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
                <span className="text-sm font-semibold text-white">TransformativeCare™</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                Navigation-Led Care
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-blue-100 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                Prevention-Driven. Personalized for Every Patient.
              </p>
              
              {/* Description */}
              <p className="text-lg md:text-xl mb-4 text-blue-200 leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
                TransformativeCare™ Clinic is built around one principle: <span className="font-semibold text-white">patients do better when someone actually guides them through the system.</span>
              </p>
              
              {/* CTA Button */}
              <Link
                to="/clinic/care-navigation"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Care Navigation
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

        {/* What We Do */}
        <section 
          id="what-we-do"
          ref={(el) => (sectionRefs.current['what-we-do'] = el as HTMLDivElement | null)}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['what-we-do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                What We Do
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['what-we-do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive care solutions designed to keep patients healthier at home
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Navigation,
                  title: "Whole-Person Navigation",
                  description: "A dedicated navigator coordinates everything—appointments, meds, referrals, tests, results, home services, and social support.",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: Heart,
                  title: "Chronic Condition Optimization",
                  description: "Structured programs for cardiometabolic disease, COPD, kidney health, behavioral health, frailty, and polypharmacy management.",
                  gradient: "from-purple-500 to-purple-600"
                },
                {
                  icon: Home,
                  title: "Care-at-Home Enablement",
                  description: "Hospital-at-home, SNF-at-home, and post-acute pathways supported by NPs, PAs, nurses, and remote monitoring.",
                  gradient: "from-green-500 to-green-600"
                },
                {
                  icon: Shield,
                  title: "Preventive Health Programs",
                  description: "Annual screenings, risk stratification, lifestyle interventions, and early detection protocols.",
                  gradient: "from-orange-500 to-orange-600"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 ${isVisible['what-we-do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clinic Types */}
        <section 
          id="care-models"
          ref={setRef('care-models')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['care-models'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Our Care Delivery Models
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['care-models'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Flexible care options designed to meet patients where they are
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clinicTypes.map((clinic, index) => {
                const IconComponent = clinic.icon;
                const images = [
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
                  "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
                  "https://plus.unsplash.com/premium_photo-1663054397533-2a3fb0cab5de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZSUyMGF0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1723618898312-54269787cbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aGNhcmUlMjBuYXZpZ2F0aW9ufGVufDB8fDB8fHww"
                ];
                return (
                  <Card 
                    key={index}
                    className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 ${isVisible['care-models'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                      <img
                        src={images[index]}
                        alt={clinic.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <IconComponent className="text-blue-600" size={24} />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50">
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{clinic.title}</h3>
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">{clinic.description}</p>
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          Modules:
                        </h4>
                        <ul className="space-y-2">
                          {clinic.features.map((feature, idx) => (
                            <li key={idx} className="text-slate-600 flex items-center group/item">
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform" />
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={clinic.path}
                        onClick={scrollToTop}
                        className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section 
          id="how-it-works"
          ref={setRef('how-it-works')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                How It Works
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                A seamless four-step process that transforms patient care
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { step: "01", title: "Navigate", description: "We onboard patients, consolidate their data, and build a care map.", color: "from-blue-500 to-blue-600" },
                  { step: "02", title: "Coordinate", description: "We take over scheduling, handoffs, follow-ups, and communication with every provider.", color: "from-purple-500 to-purple-600" },
                  { step: "03", title: "Intervene Early", description: "Remote monitoring flags issues early; clinicians respond before escalation.", color: "from-green-500 to-green-600" },
                  { step: "04", title: "Deliver Better Outcomes", description: "Reduced admissions, smoother transitions, stronger adherence, and higher patient satisfaction.", color: "from-orange-500 to-orange-600" }
                ].map((item, index) => (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <span className="text-white font-black text-xl">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-2xl font-extrabold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section 
          id="who-we-serve"
          ref={setRef('who-we-serve')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['who-we-serve'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Who We Serve
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['who-we-serve'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Serving diverse populations with personalized care solutions
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Users, text: "Individuals with multiple chronic conditions", gradient: "from-blue-500 to-blue-600" },
                { icon: Heart, text: "Aging adults who want safer independence at home", gradient: "from-purple-500 to-purple-600" },
                { icon: Building2, text: "Employers and health plans seeking lower cost, higher quality", gradient: "from-green-500 to-green-600" },
                { icon: Shield, text: "Health systems needing a full navigation and care-continuity partner", gradient: "from-orange-500 to-orange-600" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['who-we-serve'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed font-medium group-hover:text-slate-900 transition-colors">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section 
          id="the-experience"
          ref={setRef('the-experience')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="container relative z-10">
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible['the-experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-12 md:p-16 border border-blue-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                      The Experience
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-semibold">
                      No call-center chaos. No fragmented handoffs.
                    </p>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                      Just one connected team making sure nothing falls through the cracks.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {["Seamless Coordination", "24/7 Support", "Personalized Care"].map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-600 border border-blue-200 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

export default ClinicPage;

