
import React from 'react';
import { Link } from 'react-router-dom';


const CTASection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Ready to Transform Your Healthcare Practice?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Schedule a personalized demonstration to see how our solutions can optimize your Medicare reimbursement and improve patient outcomes.
        </p>
        <Link 
          to="/contact"
          onClick={scrollToTop}     
          className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-slate-900 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
        >
          Request Demo
        </Link>
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
