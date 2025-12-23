
import React, { useEffect, useState, useRef } from 'react';
import { Users, Stethoscope, Building, FileText, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhoWeServeSection: React.FC = () => {
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

  const audiences = [
    { icon: Users, title: "Patients", gradient: "from-blue-500 to-blue-600" },
    { icon: Stethoscope, title: "Providers", gradient: "from-purple-500 to-purple-600" },
    { icon: Building, title: "Health systems", gradient: "from-green-500 to-green-600" },
    { icon: FileText, title: "Policymakers", gradient: "from-orange-500 to-orange-600" },
    { icon: Lightbulb, title: "Innovators", gradient: "from-pink-500 to-pink-600" },
    { icon: TrendingUp, title: "Investors", gradient: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Who We Serve
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our solutions benefit everyone in the healthcare ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${audience.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`w-16 h-16 bg-gradient-to-br ${audience.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors relative z-10">{audience.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;

