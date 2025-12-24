
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Heart, Users, Home, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { scrollToTop } from '../../utils/smoothScroll';

const CareersPage: React.FC = () => {
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

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health benefits",
    "Remote/hybrid work options",
    "Professional development opportunities",
    "Flexible PTO",
    "401(k) matching"
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Clinical AI Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Healthcare Navigation Specialist",
      department: "Operations",
      location: "Hybrid",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Product Manager - AptusCore™ Health OS",
      department: "Product",
      location: "Remote",
      type: "Full-time"
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/qmraJpx/m1254v053-4k-yfy42xc-gf__d6a08e1355b64e1ebb951b18d405a416__P360.mp4"
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
                  Careers at Absolute Health Group
                </h1>
                
                {/* H3 */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium mb-4 md:mb-6 text-blue-200 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Join us in transforming healthcare delivery.
                </h3>
              
                {/* Body */}
                <p className="text-sm sm:text-base md:text-[17px] mb-6 md:mb-8 text-gray-200 md:text-gray-300 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Build the future of healthcare with a team that's passionate about improving patient outcomes.
                </p>
                
                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="#positions"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      View Open Positions
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Image Placeholder */}
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1217753666/photo/medical-experts-and-businessmen-having-a-meeting-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=X-_xtydO-yEBwCXIY4-hNlQ9pck_qfvBSesF0xNrjZk="
                    alt="Careers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section 
          id="culture"
          ref={setRef('culture')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['culture'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Our Culture
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['culture'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  What makes us unique
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group transition-shadow">
                  <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/1468499951/photo/hands-together-of-doctors-and-nurses-in-healthcare-teamwork-solidarity-and-support-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=rCxqC77sv9dC7E1N6MlKWAw1Ly8aq2aYOb5-TjNUua8="
                      alt="Mission-Driven"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Mission-Driven</h3>
                  <p className="text-slate-600 text-lg">We're committed to improving healthcare outcomes</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group transition-shadow">
                  <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/2214032926/photo/data-driven-decisions-in-healthcare-team-analyzing-health-statistics.webp?a=1&b=1&s=612x612&w=0&k=20&c=s1xOXWpGh_Nl-Ih-v30FCpqFknRsp4MQH3jBLrePeo8="
                      alt="Collaborative"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Collaborative</h3>
                  <p className="text-slate-600 text-lg">We work together to solve complex challenges</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
                  <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                      src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400"
                      alt="Flexible"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Home className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Flexible</h3>
                  <p className="text-slate-600 text-lg">Remote and hybrid work options available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Comprehensive benefits package for our team
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className={`flex items-center gap-4 p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300 relative z-10" />
                    <span className="text-slate-700 text-lg font-medium group-hover:text-blue-600 transition-colors relative z-10">{benefit}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section 
          id="positions"
          ref={setRef('positions')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['positions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Open Positions
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['positions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Join our team and make a difference
                </p>
              </div>
              <div className="space-y-6">
                {jobListings.map((job, index) => (
                  <Card 
                    key={job.id} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['positions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-base text-slate-600">
                            <span className="font-medium">{job.department}</span>
                            <span className="text-slate-400">•</span>
                            <span>{job.location}</span>
                            <span className="text-slate-400">•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                        <Link
                          to="/contact"
                          onClick={() => {
                            setTimeout(() => {
                              scrollToTop();
                            }, 100);
                          }}
                          className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                          <span className="relative z-10 flex items-center gap-2">
                            Apply Now
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apply Form Section */}
        <section 
          id="apply"
          ref={setRef('apply')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['apply'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Don't see a role that fits?
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['apply'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
              </div>
              <Card className={`bg-white/90 backdrop-blur-xl rounded-2xl border-0 shadow-xl p-8 md:p-12 group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['apply'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <form className="space-y-6 relative z-10">
                  <div>
                    <label className="block text-base font-semibold text-slate-900 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-slate-900 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-slate-900 mb-3">
                      Resume/CV
                    </label>
                    <input
                      type="file"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-600 file:to-purple-600 file:text-white hover:file:from-blue-700 hover:file:to-purple-700 file:cursor-pointer file:transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10">Submit Application</span>
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
