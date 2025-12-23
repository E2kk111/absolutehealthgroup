
import React from 'react';
import { Brain, Network, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/smoothScroll';

const AptusCoreStacksSection: React.FC = () => {
  const stacks = [
    {
      icon: Brain,
      title: "Intelligence",
      description: "AI-powered clinical insights"
    },
    {
      icon: Network,
      title: "Navigation",
      description: "Patient journey coordination"
    },
    {
      icon: DollarSign,
      title: "Payment",
      description: "Outcomes-based reimbursement"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            AptusCore™ Overview
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The unified layer connecting data, care delivery, and intelligent automation
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12 relative">
            {stacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <div key={index} className="flex flex-col items-center group relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="text-white" size={44} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{stack.title}</h3>
                  <p className="text-slate-600 text-center text-lg">{stack.description}</p>
                  {index < stacks.length - 1 && (
                    <div className="hidden md:block absolute left-full top-12 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link
              to="/technology"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore AptusCore™
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AptusCoreStacksSection;

