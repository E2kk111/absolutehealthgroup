
import React from 'react';
import { MapPin, Brain, Navigation, DollarSign, Check } from 'lucide-react';

const WhyAHGSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: "Care delivered anywhere",
      description: "clinic • home • mobile"
    },
    {
      icon: Brain,
      title: "Predictive AI",
      description: "catching issues before they escalate"
    },
    {
      icon: Navigation,
      title: "Personalized navigation",
      description: "to guide every patient"
    },
    {
      icon: DollarSign,
      title: "Outcomes-aligned payment",
      description: "models aligned to outcomes, not volume"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
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
              <div
                key={index}
                className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAHGSection;

