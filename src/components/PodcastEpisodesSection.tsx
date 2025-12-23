
import React, { useEffect, useState, useRef } from 'react';
import { Headphones, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const PodcastEpisodesSection: React.FC = () => {
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

  const episodes = [
    {
      id: 1,
      title: "The Future of Hybrid Care Delivery",
      description: "Exploring how hybrid clinics are transforming patient access to care.",
      duration: "45 min",
      imageUrl: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/H7krVEJDhlin0ywnl/000091-30333-hl932wh1p1_thumb.jpg"
    },
    {
      id: 2,
      title: "AION Clinical Intelligence in Action",
      description: "Real-world applications of AI-powered clinical decision support.",
      duration: "38 min",
      imageUrl: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/NDcUKEpwx/000090-30030-5mf1bqf6zx_thumb.jpg"
    },
    {
      id: 3,
      title: "Outcomes-Based Payment Models",
      description: "How RegFi is revolutionizing healthcare reimbursement.",
      duration: "42 min",
      imageUrl: "https://images.unsplash.com/photo-1559137781-875af01c14bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGVsZXByZXNlbmNlJTIwJTJCJTIwYXV0b25vbW91cyUyMHdvcmtmbG93cyUyMGFwcCUyMGZvciUyMHJlbW90ZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
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
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'}`}>
            <Headphones className="text-white" size={36} />
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Podcast Episodes
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Listen to AdvocateIQ™ episodes featuring insights on the AION roadmap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {episodes.map((episode, index) => (
            <Card 
              key={episode.id} 
              className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors relative z-10">
                  {episode.title}
                </h3>
                <p className="text-slate-600 mb-4 text-lg leading-relaxed relative z-10">{episode.description}</p>
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-sm text-slate-500 font-medium">{episode.duration}</span>
                  <Link 
                    to="/podcast"
                    onClick={scrollToTop}
                    className="text-blue-600 hover:text-purple-600 font-semibold text-sm transition-all duration-300 flex items-center gap-1 hover:gap-2"
                  >
                    Listen
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/podcast"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center gap-2">
              View All Episodes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PodcastEpisodesSection;

