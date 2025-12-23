
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Brain, Navigation, DollarSign, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyAHGSection: React.FC = () => {
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

  const features = [
    {
      icon: Navigation,
      title: "Navigation-Led Care",
      description: "Dedicated navigators coordinate everything—appointments, meds, referrals, and support",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AptusCore™ removes friction across the entire care journey",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Precision Care Plans",
      description: "Proactive prevention keeping people healthier at home and out of the hospital",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Check,
      title: "Better Outcomes",
      description: "Reduced admissions, smoother transitions, stronger adherence",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Absolute Health Group
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const featureImages = [
              "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/Bo-ziHq_jlbqx8330/000192-80000-m7-z5uwhxx_thumb.jpg",
              "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rTfBBPywhlin8fuh0/000100-40000-w0mdem2i6_thumb.jpg",
              "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/B04Gfy1teiz3sdqe6/000270-90090-yddhwogovq_thumb.jpg",
              "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/BgrICs-NZj4hksnn3/000600-250250-zauo5yx4re_thumb.jpg"
            ];
            return (
              <Card
                key={index}
                className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors relative z-10">{feature.title}</h3>
                  <p className="text-slate-600 text-lg relative z-10">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAHGSection;

