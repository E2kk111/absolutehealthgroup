
import React, { useEffect, useState, useRef } from 'react';
import { Building2, Brain, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const ThreePillarsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Building2,
      title: "TransformativeCare™ Clinic",
      subtitle: "Navigation-Led. Prevention-Driven. Personalized.",
      description: "Patients do better when someone actually guides them through the system.",
      link: "/clinic",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AptusCore™ Health OS",
      subtitle: "Unified layer connecting data, care delivery, and intelligent automation",
      description: "The technology stack removing friction across the entire care journey.",
      link: "/technology",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "The Absolute Health Podcast",
      subtitle: "Where clinical innovators and policy architects talk about building the future",
      description: "Expert conversations exploring value-based care, home-based models, and digital transformation.",
      link: "/podcast",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" 
      id="pillars"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The 3 Pillars
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our comprehensive ecosystem delivering navigation-led care, intelligent automation, and expert insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const pillarVideos = [
              "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-medical-nurse-consulting-patient-online-using-smartphone-explaining-treatment-for-disease-therapist-remote-consultation-in-teleconference-virtual-mobile-chat-application-telehealth-helping-concept_sr3rt2yko__3b441d93c6e7d7634529b633534071cb__P360.mp4",
              "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20250211-pm-chukhlomin-diabetic-medical-office-4-studio-crossmedia00000000-wlr6wv82b9__628a0b76825a302e617817f90000d3d3__P360.mp4",
              "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-v1-0001_20220418-pm-garelin-medical-training-5-palada00000000_bx5jyaqpi__b76f78ab034cd952caa9e2a9670a6c08__P360.mp4"
            ];
            return (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <video
                    src={pillarVideos[index]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                </div>
                <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors relative z-10">{pillar.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4 relative z-10">{pillar.subtitle}</p>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed relative z-10">{pillar.description}</p>
                  <Link
                    to={pillar.link}
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
  );
};

export default ThreePillarsSection;

