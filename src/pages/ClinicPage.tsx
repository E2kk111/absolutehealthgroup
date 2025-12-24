
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
      path: "/clinic/whole-person-navigation",
      description: "Every patient receives benefits + coverage guidance, specialist matching, care plan coordination, ongoing monitoring",
      features: ["Patient app", "Navigation workflow", "Support availability"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - 2-column layout, responsive height */}
        <section 
          id="hero"
          ref={setRef('hero')}
          className="relative min-h-[600px] md:h-[780px] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
        >
          {/* Animated Background Video */}
          <div className="absolute inset-0">
            <video 
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rS5r4eB/1266328__326fea413ef4f274b64746fc47fbbe06__P360.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          {/* Animated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Mobile: Stronger dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
          
          <div className="container relative z-10 py-8 md:py-12 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column */}
              <div className={`transition-all duration-1000 relative z-20 ${isVisible['hero'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
                {/* H1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold mb-4 md:mb-6 leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  TransformativeCare™ Clinic
                </h1>
                
                {/* H3 */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium mb-4 md:mb-6 text-blue-200 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Navigation-Led. Prevention-Driven. Personalized for Every Patient.
                </h3>
              
                {/* Body */}
                <p className="text-sm sm:text-base md:text-[17px] mb-6 md:mb-8 text-gray-200 md:text-gray-300 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Patients do better when someone actually guides them through the system.
                </p>
                
                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="#value-props"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('value-props')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Explore the Care Model
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    to="/clinic/whole-person-navigation"
                    onClick={scrollToTop}
                    className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Meet Your Navigation Team
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/502665955/photo/all-hands-on-deck.webp?a=1&b=1&s=612x612&w=0&k=20&c=FDeAbWac-ZuQIfh9GMUY39lgOoZ_DentQIyYZ_dJDd8="
                    alt="Care Coordination Visual"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props - 3-card-grid */}
        <section 
          id="value-props"
          ref={setRef('value-props')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['value-props'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Value Props
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Navigation,
                  title: "Whole-Person Navigation",
                  description: "A dedicated navigator coordinates everything—appointments, meds, referrals, tests, results, home services, and social support.",
                  gradient: "from-blue-500 to-blue-600",
                  image: "https://media.istockphoto.com/id/598520888/photo/medical-navigation.webp?a=1&b=1&s=612x612&w=0&k=20&c=pM-v-_9NbFOUwYfarPDJPvucFZCjcjgzePpgST2ENnA=",
                  link: "/clinic/whole-person-navigation"
                },
                {
                  icon: Heart,
                  title: "Chronic Condition Optimization",
                  description: "Structured programs for cardiometabolic disease, COPD, kidney health, behavioral health, frailty, and polypharmacy management.",
                  gradient: "from-purple-500 to-purple-600",
                  image: "https://media.istockphoto.com/id/1727831783/photo/visiting-senior.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUOB0k0cOFn-iBSfnMYUUMl2BMniZ9aW2mDZh0FxCd8=",
                  link: "#programs"
                },
                {
                  icon: Home,
                  title: "Care-at-Home Pathways",
                  description: "Hospital-at-home, SNF-at-home, and post-acute pathways supported by NPs, PAs, nurses, and remote monitoring.",
                  gradient: "from-green-500 to-green-600",
                  image: "https://media.istockphoto.com/id/1399636016/photo/home-care-for-old-people.webp?a=1&b=1&s=612x612&w=0&k=20&c=5C3nMylhgAltgJOn5wM2bpgiuDT3UnGfoh1UtQzuigA=",
                  link: "/clinic/care-at-home"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (item.link.startsWith('#')) {
                    // Prevent default navigation for anchor links
                    e.preventDefault();
                    const element = document.getElementById(item.link.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    // Navigate to different page
                    scrollToTop();
                  }
                };
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={handleClick}
                    className="block"
                  >
                    <Card 
                      className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer ${isVisible['value-props'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Icon overlay */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{item.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-blue-600 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                        <span className="font-semibold text-sm">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
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

        {/* Programs - Alternating Image/Text */}
        <section 
          id="programs"
          ref={setRef('programs')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Programs
              </h2>
            </div>
            {[
              {
                title: "Chronic Condition Optimization",
                description: "Comprehensive programs designed to manage and improve outcomes for patients with multiple chronic conditions through structured interventions and coordinated care.",
                image: "https://media.istockphoto.com/id/690539572/photo/doctor-shows-the-human-kidney.webp?a=1&b=1&s=612x612&w=0&k=20&c=U28v3k-ZnXesNaeSsaUKBU1mQWPoPHOtBfM1ZsFbxzY=",
                reverse: false,
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Preventive Health Programs",
                description: "Annual screenings, risk stratification, lifestyle interventions, and early detection protocols to prevent disease progression and maintain optimal health.",
                image: "https://media.istockphoto.com/id/2243378146/photo/doctor-holding-stethoscope-with-healthcare-icons-representing-annual-health-checkup-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=OerDvc_FdUHlHq8dXY8BPMGnKPr7lmhSEMsbJJybYGY=",
                reverse: true,
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Aging-at-Home Safety & Monitoring",
                description: "Comprehensive safety assessments, fall prevention, medication management, and 24/7 monitoring for aging adults to ensure safe independence at home.",
                image: "https://plus.unsplash.com/premium_photo-1679709304283-d96cae20860c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdpbmclMjBoZWFsdGhjYXJlJTIwYXQlMjBob21lfGVufDB8fDB8fHww",
                reverse: false,
                gradient: "from-green-500/20 to-teal-500/20"
              }
            ].map((program, index) => (
              <Card
                key={index}
                className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-white/90 backdrop-blur-xl mb-20 last:mb-0 overflow-hidden ${isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${program.reverse ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${program.reverse ? 'lg:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                      <span className="text-sm font-semibold text-slate-900">Program {index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center relative overflow-hidden ${program.reverse ? 'lg:order-1' : ''}`}>
                    {/* Background gradient effect */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${program.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 group-hover:scale-150 transition-all duration-700`} />
                    
                    {/* Number indicator */}
                    <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 flex items-center justify-center group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 relative z-10">
                      {program.title}
                    </h3>
                    <p className="text-xl text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-500 relative z-10">
                      {program.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="mt-8 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-32 transition-all duration-500 relative z-10" />
                  </div>
                </div>
              </Card>
            ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, text: "Multi-chronic adults", gradient: "from-blue-500 to-blue-600" },
                { icon: Heart, text: "Aging adults at home", gradient: "from-purple-500 to-purple-600" },
                { icon: Building2, text: "Employers & health plans", gradient: "from-green-500 to-green-600" },
                { icon: Shield, text: "Health systems", gradient: "from-orange-500 to-orange-600" }
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

        {/* CTA Banner - Accent background */}
        <section 
          id="cta-banner"
          ref={setRef('cta-banner')}
          className="py-20 md:py-28 bg-gradient-to-r from-[#1AB7B7] to-[#2AC7C7] relative overflow-hidden"
        >
          <div className="container relative z-10">
            <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 ${isVisible['cta-banner'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
                Experience connected, coordinated care.
              </h2>
                      <Link
                to="/contact"
                        onClick={scrollToTop}
                className="group inline-flex items-center gap-2 bg-white text-[#1AB7B7] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
                      >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1AB7B7]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Link>
            </div>
          </div>
        </section>

        

      </main>
      <Footer />
    </div>
  );
};

export default ClinicPage;

