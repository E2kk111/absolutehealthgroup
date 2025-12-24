import React, { useState, useEffect, useRef } from 'react';
import { Database, Brain, CheckCircle2, ArrowRight as ArrowRightIcon, ArrowDown } from 'lucide-react';
import { Card } from './ui/card';

const TechnologyWorkflowSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
            Technology Workflow
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
            How our technology transforms healthcare delivery
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-12">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Database className="text-white" size={36} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-lg">1. Collect</h4>
                <p className="text-slate-600 text-sm">Data from all sources is collected and normalized</p>
              </div>
              <div className="flex justify-center">
                <ArrowRightIcon className="w-8 h-8 text-blue-600 hidden md:block" />
                <ArrowDown className="w-8 h-8 text-blue-600 md:hidden" />
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Brain className="text-white" size={36} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-lg">2. Process</h4>
                <p className="text-slate-600 text-sm">AI and automation process data to generate insights</p>
              </div>
              <div className="flex justify-center">
                <ArrowRightIcon className="w-8 h-8 text-blue-600 hidden md:block" />
                <ArrowDown className="w-8 h-8 text-blue-600 md:hidden" />
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <CheckCircle2 className="text-white" size={36} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 text-lg">3. Deliver</h4>
                <p className="text-slate-600 text-sm">Actionable outputs drive better care coordination</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologyWorkflowSection;

