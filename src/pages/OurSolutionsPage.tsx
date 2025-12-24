
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Zap, Shield, Brain, Code, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/smoothScroll';

const OurSolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
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

  // Featured Solutions - Carousel items
  const featuredSolutions = [
    {
      title: "DermaIQ™",
      description: "Wound full care navigation app using AI-powered image analysis for accurate diagnosis and treatment planning.",
      image: "/dermaiq.png",
      url: "https://dermaiq.org",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "CardioSafe™",
      description: "Cardiac early warnings through predictive analytics, helping prevent cardiovascular events before they occur.",
      image: "https://media.istockphoto.com/id/2154976961/photo/woman-hand-hold-phone-with-app-heart-and-activity-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=HWRTgcD8nmwzypjtyyPylSBb194zVVFJGaCqnHHdI9A=",
      url: "https://app.cardiosafe.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "LiverSafe™",
      description: "Drug safety insights and liver function monitoring to ensure optimal medication management and patient safety.",
      image: "https://media.istockphoto.com/id/1487886497/photo/mental-health-concept-woman-using-mobile-application-to-checking-healing-and-practicing-mind.webp?a=1&b=1&s=612x612&w=0&k=20&c=7KMB1aCEo9ag2awlWBXfzXCpHR7476L4woMXxIdZrFg=",
      url: "https://app.liversafe.com",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Aion PGx™",
      description: "Genomic therapy matching for personalized medicine, optimizing treatments based on individual genetic profiles.",
      image: "https://media.istockphoto.com/id/2213558171/photo/man-using-a-mobile-app-for-pediatrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5b-5UTdEMkPO9U9ivzlPaNh281zJk4UA2Mbx3qiqm4=",
      url: "https://app.aionpgx.com",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "DoseAI™",
      description: "Autonomous dosing recommendations based on patient data, ensuring precise medication administration.",
      image: "https://media.istockphoto.com/id/1543830891/photo/close-up-of-a-senior-woman-ordering-medicines-online-using-a-mobile-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=VzuYd9Mzqy8QuHDJxDQ1P-Rtxox8JNszTRMlIvNifJU=",
      url: "https://app.doseai.com",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Aion Patch™",
      description: "Therapeutic skin delivery system with smart monitoring capabilities for advanced dermatological care.",
      image: "https://images.unsplash.com/photo-1659806361928-087a8f07f431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRoZXJhcGV1dGljJTIwc2tpbiUyMGRlbGl2ZXJ5JTIwYXBwJTIwd2l0aCUyMHNtYXJ0JTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      url: "https://app.aionpatch.com",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Aion Care™",
      description: "Telepresence + autonomous workflows for remote care, enabling comprehensive virtual healthcare delivery.",
      image: "https://media.istockphoto.com/id/1922985256/photo/serious-black-doctor-and-lady-patient-cry-on-big-phone-screen-isolated-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=luIqMkQkMdYzTIsDs3Tjv24zaOrN1_UqLqc0fkol-Rs=",
      url: "https://app.aioncare.com",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const handleOpenSolution = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % featuredSolutions.length);
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + featuredSolutions.length) % featuredSolutions.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % featuredSolutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/66e7e5735ae8cc2aea7b58e4-gg4r92n1zj__a116a2762eda66bf6547493ac7e218af__P360.mp4"
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
                  Our Products
                </h1>
                
                {/* H3 */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium mb-4 md:mb-6 text-blue-200 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  AI-powered clinical solutions transforming healthcare delivery.
                </h3>
                
                {/* Body */}
                <p className="text-sm sm:text-base md:text-[17px] mb-6 md:mb-8 text-gray-200 md:text-gray-300 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Discover innovative healthcare technologies designed to improve patient outcomes and streamline clinical workflows.
                </p>
                
                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="#featured-solutions"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('featured-solutions')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="group inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Solution Icon + Visual */}
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] flex flex-col items-center justify-center p-6 md:p-8">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4 md:mb-6 flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white" />
                  </div>
                  {/* Animated dots visualization */}
                  <div className="flex items-center justify-center gap-2 h-12 md:h-16">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 md:w-3 md:h-3 bg-white/60 rounded-full animate-pulse"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1.5s'
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mt-3 md:mt-4">AI-Powered Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect - 3-card-horizontal */}
        <section 
          id="what-to-expect"
          ref={setRef('what-to-expect')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['what-to-expect'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                What to Expect
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Intelligence",
                  description: "Advanced artificial intelligence and machine learning algorithms that analyze patient data, predict outcomes, and provide clinical decision support.",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: Shield,
                  title: "Secure & Compliant",
                  description: "Enterprise-grade security with HIPAA compliance, ensuring patient data protection and regulatory adherence across all solutions.",
                  gradient: "from-purple-500 to-purple-600"
                },
                {
                  icon: Zap,
                  title: "Seamless Integration",
                  description: "Easy integration with existing EHR systems, workflows, and healthcare infrastructure for minimal disruption and maximum efficiency.",
                  gradient: "from-green-500 to-green-600"
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['what-to-expect'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{item.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Solutions - Carousel */}
        <section 
          id="featured-solutions"
          ref={setRef('featured-solutions')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['featured-solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Featured Solutions
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['featured-solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Explore our curated collection of innovative healthcare solutions
              </p>
            </div>
            <div className="relative max-w-6xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCarouselIndex * 100}%)` }}
                >
                  {featuredSolutions.map((solution, index) => (
                    <div key={index} className="min-w-full flex justify-center px-4">
                      <Card className="border-0 shadow-lg hover:shadow-2xl bg-white/90 backdrop-blur-xl w-[420px] h-[520px] overflow-hidden group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                          <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenSolution(solution.url);
                              }}
                              className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                            >
                              <ExternalLink className="text-white" size={28} />
                            </button>
                          </div>
                        </div>
                        <CardContent className="p-8 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                          <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                            <Code className="text-white" size={24} />
                          </div>
                          <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{solution.title}</h3>
                          <p className="text-slate-600 text-base leading-relaxed line-clamp-4 relative z-10">{solution.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevCarousel}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-slate-200"
                >
                  <ChevronLeft className="text-slate-700" size={24} />
                </button>
                <div className="flex gap-2">
                  {featuredSolutions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCarouselIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCarouselIndex ? 'bg-blue-600 w-8' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextCarousel}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-slate-200"
                >
                  <ChevronRight className="text-slate-700" size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Solutions - width 880, center alignment */}
        <section 
          id="why-our-solutions"
          ref={setRef('why-our-solutions')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`max-w-[880px] mx-auto text-center transition-all duration-1000 ${isVisible['why-our-solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Why Our Products
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                <p>
                  Healthcare technology is evolving faster than ever, and clinicians need tools that work seamlessly with their existing workflows.
                </p>
                <p>
                  Our products are designed by healthcare professionals, for healthcare professionals—with a focus on what actually improves patient outcomes and reduces administrative burden.
                </p>
                <p>
                  From AI-powered diagnostics to personalized medicine platforms, we're building the next generation of clinical tools that make care delivery more intelligent, efficient, and effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section 
          id="key-benefits"
          ref={setRef('key-benefits')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container relative z-10">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['key-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Key Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  text: "Improved diagnostic accuracy",
                  gradient: "from-blue-500 to-blue-600"
                },
                { 
                  text: "Reduced administrative burden",
                  gradient: "from-purple-500 to-purple-600"
                },
                { 
                  text: "Enhanced patient outcomes",
                  gradient: "from-green-500 to-green-600"
                },
                { 
                  text: "Streamlined workflows",
                  gradient: "from-orange-500 to-orange-600"
                },
                { 
                  text: "Cost-effective solutions",
                  gradient: "from-pink-500 to-pink-600"
                },
                { 
                  text: "Scalable infrastructure",
                  gradient: "from-cyan-500 to-cyan-600"
                }
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden ${isVisible['key-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-10 h-10 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <CheckCircle2 className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{benefit.text}</h3>
                    </div>
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

export default OurSolutionsPage;
