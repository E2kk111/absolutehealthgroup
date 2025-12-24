
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Network, DollarSign, ArrowRight, Sparkles, Shield, Lock, CheckCircle2, BarChart3, Database, Zap, FileText, Activity, Users, ArrowDown, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechnologyPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isVisible, sectionRefs } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  // Capabilities - 6 cards matching blueprint
  const capabilities = [
    {
      icon: Database,
      title: "Unified Patient Record",
      description: "Aggregates EHRs, labs, imaging, pharmacy data, care plans, RPM feeds, and social determinants.",
      image: "https://media.istockphoto.com/id/2163961358/photo/laptop-display-medical-report-on-blurred-doctor-office-rigid.webp?a=1&b=1&s=612x612&w=0&k=20&c=lEQ_svdGXmFrdDjnYN_Ey1YVpMwZZUhk_EU9EV7sAHc="
    },
    {
      icon: Network,
      title: "Navigation Engine",
      description: "Predictive models identify rising-risk patients, missed care opportunities, medication gaps, and care-coordination bottlenecks.",
      image: "https://media.istockphoto.com/id/598520888/photo/medical-navigation.webp?a=1&b=1&s=612x612&w=0&k=20&c=pM-v-_9NbFOUwYfarPDJPvucFZCjcjgzePpgST2ENnA="
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automated outreach, appointment optimization, documentation assistance, billing rules, and auth/pre-cert support.",
      image: "https://media.istockphoto.com/id/1180955065/photo/doctor-and-nurse-walking-by-patients-in-lobby.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cw9TgPSYwRh0cvd9lqnCquvk7QYUtUoLqkCyGPMDq8Y="
    },
    {
      icon: Brain,
      title: "Care-at-Home Command Center",
      description: "Real-time vitals monitoring, escalations, triage workflows, and clinician decision support.",
      image: "https://media.istockphoto.com/id/1180955726/photo/doctor-using-digital-tablet-in-control-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=DMtXEfbejkvNhTFsZU-_z04i22O8YKioXKPv-ZKZbKM="
    },
    {
      icon: Network,
      title: "Interoperability Layer",
      description: "Plug-and-play connections to major EHRs, payers, remote monitoring devices, and value-based care platforms.",
      image: "https://media.istockphoto.com/id/1494984673/photo/doctor-or-nurse-in-uniform-with-stethoscope-writing-something-information-of-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=4w760y0xhrD7LLGhyP-pVVCiYXbAyIG02hu9bLB_zcE="
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics and machine learning models to predict outcomes, optimize care pathways, and improve decision-making.",
      image: "https://media.istockphoto.com/id/2203229406/photo/middle-eastern-man-giving-presentation-at-conference-pointing-at-data-on-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=-550sxjUhL5-7iDdOJ9Pow6KoROkVsunSR5MbHwl3Aw="
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - 2-column layout, responsive height */}
        <section 
          id="hero"
          ref={setRef('hero')}
          className="relative min-h-[600px] md:h-[780px] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
        >
          {/* Animated Background Video */}
          <div className="absolute inset-0">
            <video 
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20250211-pm-chukhlomin-diabetic-medical-office-4-studio-crossmedia00000000-wlr6wv82b9__628a0b76825a302e617817f90000d3d3__P360.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          {/* Animated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Mobile: Stronger dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
          
          <div className="container relative z-10 py-8 md:py-12 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column */}
              <div className={`transition-all duration-1000 relative z-20 ${isVisible['hero'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
                {/* H1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold mb-4 md:mb-6 leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  AptusCore™ Health Operating System
                </h1>
                
                {/* BodyLarge */}
                <p className="text-base sm:text-lg md:text-[21px] mb-6 md:mb-8 text-blue-100 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  The unified layer connecting data, care delivery, and intelligent automation.
                </p>
                
                {/* CTA */}
                <Link
                  to="#architecture"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    View Platform Architecture
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              {/* Right Column - System Map */}
              <div className={`transition-all duration-1000 delay-200 mt-8 lg:mt-0 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <Network className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 text-white/50" />
                    <p className="text-white/70 text-sm sm:text-base md:text-lg">System Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities - 6-card-grid */}
        <section 
          id="capabilities"
          ref={setRef('capabilities')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                const gradients = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-green-500 to-green-600",
                  "from-orange-500 to-orange-600",
                  "from-pink-500 to-pink-600",
                  "from-cyan-500 to-cyan-600"
                ];
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 overflow-hidden ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Icon overlay */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 z-20`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{capability.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{capability.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Architecture Canvas - Comprehensive Design */}
        <section 
          id="architecture"
          ref={setRef('architecture')}
          className="relative py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['architecture'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
                Architecture Canvas
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['architecture'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
                How data flows through AptusCore™ to deliver intelligent care coordination
              </p>
            </div>
            
            <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible['architecture'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
              {/* Data Inputs Section */}
              <div className="mb-12">
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border-b border-blue-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Database className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Data Inputs</h3>
                        <p className="text-slate-600">Multiple sources unified into a single patient record</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {[
                        { icon: FileText, label: "EHRs", desc: "Electronic Health Records" },
                        { icon: Activity, label: "Labs", desc: "Laboratory Results" },
                        { icon: Database, label: "Imaging", desc: "Medical Imaging Data" },
                        { icon: Zap, label: "Pharmacy", desc: "Medication Data" },
                        { icon: Activity, label: "RPM", desc: "Remote Patient Monitoring" },
                        { icon: Users, label: "Social Data", desc: "Social Determinants" }
                      ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={idx} className="text-center group/item">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                              <IconComponent className="text-white" size={24} />
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-1">{item.label}</h4>
                            <p className="text-xs text-slate-600">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-bounce transition-all duration-1000 ${isVisible['architecture'] ? 'opacity-100' : 'opacity-0'}`}>
                  <ArrowDown className="text-white" size={32} />
                </div>
              </div>

              {/* AptusCore Engine Section */}
              <div className="mb-12">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 overflow-hidden group hover:scale-[1.02] transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-x" />
                  <div className="relative z-10 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                        <Brain className="text-white" size={40} />
                      </div>
                      <div>
                        <h3 className="text-4xl font-extrabold text-white mb-2">AptusCore™ Engine</h3>
                        <p className="text-white/90 text-lg">Unified Processing & Intelligence Layer</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: "Data Aggregation", desc: "Consolidates all patient data sources into unified records" },
                        { title: "AI Processing", desc: "Machine learning models analyze patterns and predict outcomes" },
                        { title: "Workflow Automation", desc: "Automates care coordination tasks and workflows" },
                        { title: "Real-time Analytics", desc: "Continuous monitoring and analysis of patient data" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 group/item hover:bg-white/20 transition-all duration-300">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300">
                            <Brain className="text-white" size={24} />
                          </div>
                          <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-green-600 rounded-full flex items-center justify-center shadow-xl animate-bounce transition-all duration-1000 delay-200 ${isVisible['architecture'] ? 'opacity-100' : 'opacity-0'}`}>
                  <ArrowDown className="text-white" size={32} />
                </div>
              </div>

              {/* Care Outputs Section */}
              <div>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border-b border-green-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Care Outputs</h3>
                        <p className="text-slate-600">Intelligent outputs that drive better care delivery</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { icon: FileText, title: "Care Plans", desc: "Personalized, evidence-based care plans", gradient: "from-blue-500 to-blue-600" },
                        { icon: Network, title: "Navigation", desc: "Automated care coordination and navigation", gradient: "from-purple-500 to-purple-600" },
                        { icon: Zap, title: "Automation", desc: "Workflow automation and task management", gradient: "from-green-500 to-green-600" },
                        { icon: BarChart3, title: "Analytics", desc: "Predictive insights and outcome tracking", gradient: "from-orange-500 to-orange-600" }
                      ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={idx} className="text-center group/item">
                            <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300`}>
                              <IconComponent className="text-white" size={28} />
                            </div>
                            <h4 className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Architecture Flow Diagram */}
              <div className="mt-16">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 md:p-12">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">How It Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Database className="text-white" size={36} />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">1. Collect</h4>
                      <p className="text-slate-600 text-sm">Data from all sources is collected and normalized</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRightIcon className="w-8 h-8 text-blue-600 hidden md:block" />
                      <ArrowDown className="w-8 h-8 text-blue-600 md:hidden" />
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Brain className="text-white" size={36} />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">2. Process</h4>
                      <p className="text-slate-600 text-sm">AI and automation process data to generate insights</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRightIcon className="w-8 h-8 text-blue-600 hidden md:block" />
                      <ArrowDown className="w-8 h-8 text-blue-600 md:hidden" />
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CheckCircle2 className="text-white" size={36} />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">3. Deliver</h4>
                      <p className="text-slate-600 text-sm">Actionable outputs drive better care coordination</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Security - 4-column */}
        <section 
          id="security"
          ref={setRef('security')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Security
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: "HIPAA", gradient: "from-blue-500 to-blue-600" },
                { icon: Lock, text: "Zero Trust", gradient: "from-purple-500 to-purple-600" },
                { icon: Lock, text: "Encryption", gradient: "from-green-500 to-green-600" },
                { icon: CheckCircle2, text: "Audit Trails", gradient: "from-orange-500 to-orange-600" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['security'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-4`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{item.text}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits - Side-by-Side */}
        <section 
          id="benefits"
          ref={setRef('benefits')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
              {/* Left - Why AptusCore Matters */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Why AptusCore Matters
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Care teams shouldn't drown in admin work. Patients shouldn't navigate a maze. Health systems shouldn't struggle to integrate tools.
                  </p>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    AptusCore™ brings everything together—quietly, intelligently, and in the background—so clinicians can focus on care and patients can focus on living.
                  </p>
                </div>
              </div>
              
              {/* Right - Checklist */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl p-8">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Checklist</h3>
                <div className="space-y-4">
                  {[
                    "Unified patient data across all sources",
                    "Intelligent care navigation and coordination",
                    "Automated workflow optimization",
                    "Real-time monitoring and alerts",
                    "Seamless interoperability",
                    "Predictive analytics and insights"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA - Modern Tech Theme */}
        <section 
          id="cta"
          ref={setRef('cta')}
          className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-x" />
          
          <div className="container relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['cta'] ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 mb-6">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm font-semibold">Transform Your Care Delivery</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Build on the operating system designed for connected care.
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join leading healthcare organizations leveraging AptusCore™ to deliver intelligent, coordinated care at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Request Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
                
                <Link
                  to="/technology"
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span className="text-sm">Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-300" />
                    <span className="text-sm">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
