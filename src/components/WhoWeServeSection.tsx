
import React from 'react';
import { Users, Stethoscope, Building, FileText, Lightbulb, TrendingUp } from 'lucide-react';

const WhoWeServeSection: React.FC = () => {
  const audiences = [
    { icon: Users, title: "Patients" },
    { icon: Stethoscope, title: "Providers" },
    { icon: Building, title: "Health systems" },
    { icon: FileText, title: "Policymakers" },
    { icon: Lightbulb, title: "Innovators" },
    { icon: TrendingUp, title: "Investors" }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Who We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our solutions benefit everyone in the healthcare ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{audience.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;

