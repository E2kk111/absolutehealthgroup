
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Target, Eye, AlertCircle, Map, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle2, Heart, Shield, Zap, Award, Clock, Building2, Globe, BarChart3, Activity, Handshake, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const AboutPage: React.FC = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every decision we make prioritizes patient outcomes and experience.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology to solve complex healthcare challenges.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in everything we do.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships to transform healthcare delivery.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in clinical care and operational performance.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We're committed to making quality healthcare accessible to all communities.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Patients Served", gradient: "from-blue-500 to-cyan-500" },
    { icon: Building2, value: "200+", label: "Care Locations", gradient: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "40%", label: "Reduced Readmissions", gradient: "from-green-500 to-emerald-500" },
    { icon: Award, value: "95%", label: "Patient Satisfaction", gradient: "from-orange-500 to-red-500" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Absolute Health Group was founded with a vision to transform healthcare delivery through technology and innovation.",
      icon: Sparkles
    },
    {
      year: "2021",
      title: "First Clinic Launch",
      description: "Opened our first hybrid care clinic, combining in-person and virtual care capabilities.",
      icon: Building2
    },
    {
      year: "2022",
      title: "Technology™ Platform",
      description: "Launched Technology™ Health OS, our unified platform for intelligent care coordination.",
      icon: Zap
    },
    {
      year: "2023",
      title: "National Expansion",
      description: "Expanded operations across multiple states, serving diverse patient populations.",
      icon: Globe
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated advanced AI capabilities for predictive analytics and clinical decision support.",
      icon: Activity
    }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "20+ years in healthcare leadership, former CMO at major health system.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Healthcare technology innovator with expertise in AI and data analytics.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with focus on population health and care coordination.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop&q=60"
    }
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BlTHC8iPiqt683o5/videoblocks-64f852292d49ce62a13682b0_sxxuv1802__4ac97d28a3583a1ab6d332b85cf88bd2__P360.mp4"
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold mb-4 md:mb-6 leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  About Absolute Health Group
                </h1>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium mb-4 md:mb-6 text-blue-200 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Transforming healthcare delivery through innovation and technology.
                </h3>
                <p className="text-sm sm:text-base md:text-[17px] mb-6 md:mb-8 text-gray-200 md:text-gray-300 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  We're building the future of healthcare—one patient, one outcome, one innovation at a time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/clinic"
                    onClick={scrollToTop}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Our Services
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="group inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] flex items-center justify-center">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681842883882-b5c1c9f37869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZSUyMGdyb3VwfGVufDB8fDB8fHww"
                    alt="About Absolute Health Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Mission & Vision */}
        <section 
          id="mission-vision"
          ref={setRef('mission-vision')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Mission */}
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isVisible['mission-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">Mission</h2>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    To deliver accessible, tech-enabled healthcare that improves patient outcomes while aligning payment models with value rather than volume.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${isVisible['mission-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Eye className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">Vision</h2>
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                    A national healthcare system where predictive AI catches issues early, personalized navigation guides every patient, and payment models reward outcomes that matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section 
          id="values"
          ref={setRef('values')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Our Values
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
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
                      <p className="text-lg md:text-xl text-slate-700 mb-4 leading-relaxed">
                        Healthcare delivery is fragmented, reactive, and misaligned. Patients struggle to navigate complex systems, providers face administrative burdens, and payment models don't reward outcomes.
                      </p>
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                        Absolute Health Group addresses these challenges through integrated care delivery, AI-powered clinical intelligence, and outcomes-aligned financial models.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section 
          id="approach"
          ref={setRef('approach')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['approach'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Our Approach
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['approach'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                How we're transforming healthcare delivery
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl transition-all duration-1000 ${isVisible['approach'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6">
                    {[
                      {
                        icon: Users,
                        title: "Patient Navigation",
                        description: "Dedicated navigators guide patients through every step of their care journey, ensuring seamless coordination and support."
                      },
                      {
                        icon: Zap,
                        title: "AI-Powered Intelligence",
                        description: "Advanced analytics and predictive models identify risks early and optimize care plans for better outcomes."
                      },
                      {
                        icon: Building2,
                        title: "Hybrid Care Delivery",
                        description: "Combining clinic visits, mobile units, and home-based care to meet patients where they are."
                      },
                      {
                        icon: BarChart3,
                        title: "Value-Based Models",
                        description: "Outcomes-aligned payment structures that reward quality care and patient satisfaction over volume."
                      }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-6 p-6 rounded-xl hover:bg-slate-50 transition-all duration-300 group">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section 
          id="stats"
          ref={setRef('stats')}
          className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className={`border-0 shadow-xl bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 md:p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4 shadow-lg`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                      <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section 
          id="leadership"
          ref={setRef('leadership')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Leadership Team
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Experienced leaders driving innovation in healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card
                  key={index}
                  className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section 
          id="impact"
          ref={setRef('impact')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
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
                      <div className="space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                        <p>
                          Our comprehensive approach to healthcare delivery has demonstrated measurable improvements in patient outcomes and system efficiency.
                        </p>
                        <ul className="space-y-3 mt-6">
                          {[
                            "40% reduction in hospital readmissions",
                            "95% patient satisfaction scores",
                            "30% improvement in care coordination efficiency",
                            "50K+ patients served across multiple states"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
                Join Us in Transforming Healthcare
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Whether you're a patient, provider, or partner, we'd love to connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/careers"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Careers
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

export default AboutPage;
