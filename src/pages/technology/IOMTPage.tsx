
import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Network, Activity, Home, Building2, ArrowRight, CheckCircle2, Radio, Heart } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { scrollToTop } from '../../utils/smoothScroll';

const IOMTPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  const applications = [
    {
      icon: Building2,
      title: "Hospital Devices",
      description: "Thousands of connected medical devices in hospitals including monitors, infusion pumps, ventilators, and diagnostic equipment.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Home Monitoring",
      description: "Remote patient monitoring devices for continuous health tracking including wearables, blood pressure monitors, and glucose meters.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous vital signs monitoring with instant alerts for critical changes in patient condition.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Connected Ecosystem",
      description: "Seamless integration of all medical devices into a unified platform for comprehensive patient care management.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Continuous patient monitoring and early intervention",
    "Reduced hospital readmissions through home monitoring",
    "Improved patient outcomes with real-time data",
    "Enhanced care coordination across settings",
    "Cost-effective remote patient management",
    "Better chronic disease management"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          id="hero"
          ref={setRef('hero')}
          className="relative min-h-[600px] md:h-[780px] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
        >
          <div className="absolute inset-0">
            <video 
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/TOEwt0C/videoblocks-internet-of-things-iot-cloud-computing-information-technology-network_rq2en0rsw__SB_PM.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
          
          <div className="container relative z-10 py-8 md:py-12 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`transition-all duration-1000 relative z-20 ${isVisible['hero'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl mb-6 border border-white/10">
                  <Network className="text-white" size={32} />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold mb-4 md:mb-6 leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Internet of Medical Things (IoMT)
                </h1>
                <p className="text-base sm:text-lg md:text-[21px] mb-6 md:mb-8 text-blue-100 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Thousands of connected hospital devices and home monitoring systems creating a comprehensive healthcare ecosystem.
                </p>
                <Link
                  to="#applications"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Applications
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1298626492/photo/medical-tech-science-innovative-iot-global-healthcare-ai-technology-world-health-day-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=61EJ0xRVl7VaW5Qt0bPLR-4_73gqbf2p-swgRcxB248="
                    alt="IoMT"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section 
          id="applications"
          ref={setRef('applications')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Applications
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Connected devices transforming healthcare delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {applications.map((app, index) => {
                const Icon = app.icon;
                return (
                  <Card
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{app.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{app.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          id="benefits"
          ref={setRef('benefits')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Benefits
                </h2>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-lg text-slate-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          ref={setRef('cta')}
          className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Connect Your Medical Devices
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Discover how IoMT can enhance patient monitoring and improve care outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/technology"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IOMTPage;

