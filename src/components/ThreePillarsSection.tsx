
import React from 'react';
import { Building2, Brain, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/smoothScroll';

const ThreePillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Building2,
      title: "Absolute Care™",
      subtitle: "Hybrid, Mobile & At-Home Care Delivery",
      description: "Comprehensive care solutions that go where patients need them most.",
      link: "/clinic",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AION Stacks™",
      subtitle: "Clinical Intelligence + Navigation + RegFi",
      description: "AI-powered clinical intelligence and financial solutions.",
      link: "/technology",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Healthcare Podcast",
      subtitle: "The Voice of the AION Roadmap",
      description: "Conversations about the future of healthcare.",
      link: "/podcast",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden" id="pillars">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            The 3 Pillars
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive ecosystem delivers care, intelligence, and advocacy
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
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <video
                    src={pillarVideos[index]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
                <div className="p-8 bg-gradient-to-br from-white to-slate-50">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{pillar.subtitle}</p>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{pillar.description}</p>
                <Link
                  to={pillar.link}
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;

