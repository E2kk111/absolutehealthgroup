
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Heart, Activity, Pill, Brain, Stethoscope, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const ChronicConditionOptimizationPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  const programs = [
    {
      icon: Heart,
      title: "Cardiometabolic Disease",
      description: "Comprehensive management of diabetes, hypertension, heart disease, and related conditions through evidence-based protocols and personalized care plans.",
      gradient: "from-red-500 to-pink-600",
      image: "https://media.istockphoto.com/id/690539572/photo/doctor-shows-the-human-kidney.webp?a=1&b=1&s=612x612&w=0&k=20&c=U28v3k-ZnXesNaeSsaUKBU1mQWPoPHOtBfM1ZsFbxzY="
    },
    {
      icon: Activity,
      title: "COPD & Respiratory Health",
      description: "Specialized programs for chronic obstructive pulmonary disease, asthma, and respiratory conditions with pulmonary rehabilitation and monitoring.",
      gradient: "from-blue-500 to-cyan-600",
      image: "https://media.istockphoto.com/id/1727831783/photo/visiting-senior.webp?a=1&b=1&s=612x612&w=0&k=20&c=jUOB0k0cOFn-iBSfnMYUUMl2BMniZ9aW2mDZh0FxCd8="
    },
    {
      icon: Brain,
      title: "Behavioral Health",
      description: "Integrated mental health support, depression management, anxiety treatment, and behavioral interventions coordinated with primary care.",
      gradient: "from-purple-500 to-indigo-600",
      image: "https://media.istockphoto.com/id/2243378146/photo/doctor-holding-stethoscope-with-healthcare-icons-representing-annual-health-checkup-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=OerDvc_FdUHlHq8dXY8BPMGnKPr7lmhSEMsbJJybYGY="
    },
    {
      icon: Pill,
      title: "Polypharmacy Management",
      description: "Medication review, reconciliation, and optimization to reduce adverse drug interactions and improve adherence.",
      gradient: "from-green-500 to-emerald-600",
      image: "https://plus.unsplash.com/premium_photo-1679709304283-d96cae20860c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdpbmclMjBoZWFsdGhjYXJlJTIwYXQlMjBob21lfGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - responsive height */}
        <section className="relative min-h-[500px] md:h-[780px] flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20250211-pm-chukhlomin-diabetic-medical-office-4-studio-crossmedia00000000-wlr6wv82b9__628a0b76825a302e617817f90000d3d3__P360.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Mobile: Stronger dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
          
          <div className="container relative z-10 py-8 md:py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center relative z-20">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl sm:rounded-2xl mb-6 sm:mb-8 border border-white/10 shadow-2xl">
                <Heart className="text-white" size={28} />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Chronic Condition Optimization
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-purple-100 font-light px-4 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Structured programs for cardiometabolic disease, COPD, kidney health, behavioral health, frailty, and polypharmacy management
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section 
          id="programs"
          ref={setRef('programs')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Specialized Programs
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive care programs designed to manage and improve outcomes for chronic conditions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card 
                    key={index} 
                    className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors relative z-10">{program.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{program.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Care Approach */}
        <section 
          id="approach"
          ref={setRef('approach')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible['approach'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="md:w-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
                    Evidence-Based Approach
                  </h2>
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                    Our chronic condition programs are built on clinical guidelines, best practices, and personalized care plans tailored to each patient's unique needs.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Structured care protocols based on clinical guidelines",
                      "Regular monitoring and proactive intervention",
                      "Coordinated care across multiple specialists",
                      "Patient education and self-management support"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-slate-700 text-lg group-hover/item:text-purple-600 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-12 text-center relative overflow-hidden border border-purple-100">
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <TrendingUp className="text-white" size={48} />
                        </div>
                        <p className="text-slate-700 text-lg font-medium">Improved Outcomes</p>
                        <p className="text-sm text-slate-500 mt-4">Reduced hospitalizations, better medication adherence, and enhanced quality of life</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Workflow */}
        <section 
          id="workflow"
          ref={setRef('workflow')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Program Workflow
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  A structured approach to chronic condition management
                </p>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Assessment & Stratification", desc: "Comprehensive evaluation of condition severity, risk factors, and care needs.", gradient: "from-purple-500 to-purple-600" },
                      { num: 2, title: "Care Plan Development", desc: "Personalized care plan with evidence-based protocols and treatment goals.", gradient: "from-pink-500 to-pink-600" },
                      { num: 3, title: "Ongoing Management", desc: "Regular monitoring, medication management, and care coordination.", gradient: "from-red-500 to-red-600" },
                      { num: 4, title: "Outcome Tracking", desc: "Continuous evaluation of outcomes and adjustment of care plans as needed.", gradient: "from-orange-500 to-orange-600" }
                    ].map((step, idx) => (
                      <div key={step.num} className={`flex items-start gap-6 group relative transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                            {step.num}
                          </div>
                          {idx < 3 && (
                            <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-purple-300 to-pink-300" />
                          )}
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{step.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChronicConditionOptimizationPage;

