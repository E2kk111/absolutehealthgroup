
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Brain, Shield, Database, FileText, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const AIONClinicalIntelligencePage: React.FC = () => {
  const [currentCapabilityIndex, setCurrentCapabilityIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const capabilities = [
    {
      name: "DermaIQ™",
      description: "Wound healing prediction using AI-powered image analysis",
      url: "https://dermaiq.org"
    },
    {
      name: "CardioSafe™",
      description: "Cardiac early warnings through predictive analytics",
      url: "https://app.cardiosafe.com"
    },
    {
      name: "LiverSafe™",
      description: "Drug safety insights and liver function monitoring",
      url: "https://app.liversafe.com"
    },
    {
      name: "Aion PGx™",
      description: "Genomic therapy matching for personalized medicine",
      url: "https://app.aionpgx.com"
    },
    {
      name: "DoseAI™",
      description: "Autonomous dosing recommendations based on patient data",
      url: "https://app.doseai.com"
    },
    {
      name: "Aion Patch™",
      description: "Therapeutic skin delivery system with smart monitoring",
      url: "https://app.aionpatch.com"
    },
    {
      name: "Aion Care™",
      description: "Telepresence + autonomous workflows for remote care",
      url: "https://app.aioncare.com"
    }
  ];

  const capabilityImages = [
    "/dermaiq.png",
    "https://media.istockphoto.com/id/2154976961/photo/woman-hand-hold-phone-with-app-heart-and-activity-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=HWRTgcD8nmwzypjtyyPylSBb194zVVFJGaCqnHHdI9A=",
    "https://media.istockphoto.com/id/1487886497/photo/mental-health-concept-woman-using-mobile-application-to-checking-healing-and-practicing-mind.webp?a=1&b=1&s=612x612&w=0&k=20&c=7KMB1aCEo9ag2awlWBXfzXCpHR7476L4woMXxIdZrFg=",
    "https://media.istockphoto.com/id/2213558171/photo/man-using-a-mobile-app-for-pediatrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5b-5UTdEMkPO9U9ivzlPaNh281zJk4UA2Mbx3qiqm4=",
    "https://media.istockphoto.com/id/1543830891/photo/close-up-of-a-senior-woman-ordering-medicines-online-using-a-mobile-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=VzuYd9Mzqy8QuHDJxDQ1P-Rtxox8JNszTRMlIvNifJU=",
    "https://images.unsplash.com/photo-1659806361928-087a8f07f431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRoZXJhcGV1dGljJTIwc2tpbiUyMGRlbGl2ZXJ5JTIwYXBwJTIwd2l0aCUyMHNtYXJ0JTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1922985256/photo/serious-black-doctor-and-lady-patient-cry-on-big-phone-screen-isolated-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=luIqMkQkMdYzTIsDs3Tjv24zaOrN1_UqLqc0fkol-Rs=",
  ];

  const currentCapability = capabilities[currentCapabilityIndex];

  const handlePrevious = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCapabilityIndex((prev) => 
        prev === 0 ? capabilities.length - 1 : prev - 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 10);
    }, 250);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentCapabilityIndex((prev) => 
        prev === capabilities.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 10);
    }, 250);
  };

  const handleOpenApp = () => {
    window.open(currentCapability.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <video 
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/66e7e5735ae8cc2aea7b58e4-gg4r92n1zj__a116a2762eda66bf6547493ac7e218af__P360.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/10 shadow-2xl">
                <Brain className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                AION Clinical Intelligence Stack
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                AI-powered clinical decision support and predictive analytics
              </p>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Heart Rate Curve Background Animation */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heartRateGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5">
                    <animate attributeName="stop-opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </stop>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </stop>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Main heart rate curve - EKG pattern */}
              <g transform="translate(0, 300)">
                <path
                  d="M0,0 L20,0 L25,-30 L30,0 L35,30 L40,0 L60,0 L65,-25 L70,0 L75,25 L80,0 L100,0 L105,-30 L110,0 L115,30 L120,0 L140,0 L145,-20 L150,0 L155,20 L160,0 L180,0 L185,-35 L190,0 L195,35 L200,0 L220,0 L225,-25 L230,0 L235,25 L240,0 L260,0 L265,-30 L270,0 L275,30 L280,0 L300,0 L305,-20 L310,0 L315,20 L320,0 L340,0 L345,-30 L350,0 L355,30 L360,0 L380,0 L385,-25 L390,0 L395,25 L400,0 L420,0 L425,-30 L430,0 L435,30 L440,0 L460,0 L465,-20 L470,0 L475,20 L480,0 L500,0 L505,-35 L510,0 L515,35 L520,0 L540,0 L545,-25 L550,0 L555,25 L560,0 L580,0 L585,-30 L590,0 L595,30 L600,0 L620,0 L625,-20 L630,0 L635,20 L640,0 L660,0 L665,-30 L670,0 L675,30 L680,0 L700,0 L705,-25 L710,0 L715,25 L720,0 L740,0 L745,-30 L750,0 L755,30 L760,0 L780,0 L785,-20 L790,0 L795,20 L800,0 L820,0 L825,-35 L830,0 L835,35 L840,0 L860,0 L865,-25 L870,0 L875,25 L880,0 L900,0 L905,-30 L910,0 L915,30 L920,0 L940,0 L945,-20 L950,0 L955,20 L960,0 L980,0 L985,-30 L990,0 L995,30 L1000,0 L1020,0 L1025,-25 L1030,0 L1035,25 L1040,0 L1060,0 L1065,-30 L1070,0 L1075,30 L1080,0 L1100,0 L1105,-20 L1110,0 L1115,20 L1120,0 L1200,0"
                  stroke="url(#heartRateGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  filter="url(#glow)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1200;1200,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Secondary curve for depth */}
              <g transform="translate(0, 400)" opacity="0.3">
                <path
                  d="M0,0 L30,0 L35,-20 L40,0 L45,20 L50,0 L80,0 L85,-25 L90,0 L95,25 L100,0 L130,0 L135,-20 L140,0 L145,20 L150,0 L180,0 L185,-30 L190,0 L195,30 L200,0 L230,0 L235,-20 L240,0 L245,20 L250,0 L280,0 L285,-25 L290,0 L295,25 L300,0 L330,0 L335,-20 L340,0 L345,20 L350,0 L380,0 L385,-30 L390,0 L395,30 L400,0 L430,0 L435,-20 L440,0 L445,20 L450,0 L480,0 L485,-25 L490,0 L495,25 L500,0 L530,0 L535,-20 L540,0 L545,20 L550,0 L580,0 L585,-30 L590,0 L595,30 L600,0 L630,0 L635,-20 L640,0 L645,20 L650,0 L680,0 L685,-25 L690,0 L695,25 L700,0 L730,0 L735,-20 L740,0 L745,20 L750,0 L780,0 L785,-30 L790,0 L795,30 L800,0 L830,0 L835,-20 L840,0 L845,20 L850,0 L880,0 L885,-25 L890,0 L895,25 L900,0 L930,0 L935,-20 L940,0 L945,20 L950,0 L980,0 L985,-30 L990,0 L995,30 L1000,0 L1030,0 L1035,-20 L1040,0 L1045,20 L1050,0 L1080,0 L1085,-25 L1090,0 L1095,25 L1100,0 L1200,0"
                  stroke="url(#heartRateGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1200;1200,0"
                    dur="3.5s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                </path>
              </g>
              {/* Animated scanning line */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="600"
                stroke="#3b82f6"
                strokeWidth="2"
                opacity="0.15"
              >
                <animate
                  attributeName="x1"
                  from="-10"
                  to="1210"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  from="-10"
                  to="1210"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.15;0.3;0.15"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Capabilities
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore our cutting-edge AI-powered clinical solutions
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className={`overflow-hidden group transition-all duration-300 ease-in-out border-0 shadow-2xl bg-white/80 backdrop-blur-xl ${
                isTransitioning 
                  ? `opacity-0 ${direction === 'left' ? 'translate-x-[-20px]' : 'translate-x-[20px]'}` 
                  : 'opacity-100 translate-x-0'
              }`}>
                <div className="relative h-72 md:h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                    src={capabilityImages[currentCapabilityIndex]}
                    alt={currentCapability.name}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                      isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
                    key={currentCapabilityIndex}
                      />
                    </div>
                <CardContent className={`p-8 md:p-10 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 transition-all duration-300 ${
                    isTransitioning 
                      ? `opacity-0 ${direction === 'left' ? 'translate-x-[-10px]' : 'translate-x-[10px]'}` 
                      : 'opacity-100 translate-x-0'
                  }`}>
                    {currentCapability.name}
                  </h3>
                  <p className={`text-slate-600 text-lg md:text-xl mb-8 leading-relaxed transition-all duration-300 ${
                    isTransitioning 
                      ? `opacity-0 ${direction === 'left' ? 'translate-x-[-10px]' : 'translate-x-[10px]'}` 
                      : 'opacity-100 translate-x-0'
                  }`}>
                    {currentCapability.description}
                  </p>
                  
                  {/* Navigation Controls */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePrevious}
                        disabled={isTransitioning}
                        className="flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-xl"
                        aria-label="Previous capability"
                      >
                        <ChevronLeft className="h-5 w-5 transition-transform duration-200" />
                        Previous
                      </Button>
                      <span className="text-sm font-semibold text-slate-500 px-3 py-2 bg-slate-100 rounded-lg transition-opacity duration-300">
                        {currentCapabilityIndex + 1} / {capabilities.length}
                      </span>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleNext}
                        disabled={isTransitioning}
                        className="flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-xl"
                        aria-label="Next capability"
                      >
                        Next
                        <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                      </Button>
                    </div>
                    <Button
                      variant="default"
                      size="lg"
                      onClick={handleOpenApp}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-200"
                      aria-label="Open app"
                    >
                      Open App
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                      </div>
                    </CardContent>
                  </Card>
            </div>
          </div>
        </section>

        {/* Clinical AI Pipeline */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Clinical AI Pipeline
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  A seamless workflow from data to insights
                </p>
                      </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Data Collection", desc: "Aggregation of patient data from multiple sources including EHRs, devices, and labs." },
                      { num: 2, title: "AI Processing", desc: "Advanced machine learning models analyze data to identify patterns and predict outcomes." },
                      { num: 3, title: "Clinical Insights", desc: "Actionable insights delivered to clinicians through decision support tools." },
                      { num: 4, title: "Outcome Tracking", desc: "Continuous monitoring of outcomes to improve model accuracy and care quality." }
                    ].map((step, idx) => (
                      <div key={step.num} className="flex items-start gap-6 group relative">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10">
                            {step.num}
                    </div>
                          {idx < 3 && (
                            <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-blue-300 to-purple-300" />
                          )}
                      </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
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

        {/* Interoperability */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Interoperability
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Seamless integration with healthcare systems
                </p>
              </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                      <Database className="text-white" size={40} />
                    </div>
                    <p className="text-xl text-slate-700 font-medium mb-8">AION Clinical Intelligence integrates seamlessly with:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {[
                        "Electronic Health Records (EHRs)",
                        "Laboratory Information Systems",
                        "Medical Imaging Systems",
                        "Remote Monitoring Devices",
                        "Pharmacy Systems"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 group">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Data Security & Privacy */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Data Security & Privacy
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Enterprise-grade security for your healthcare data
                </p>
                    </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: "HIPAA Compliant", desc: "Full compliance with healthcare privacy regulations" },
                  { icon: Database, title: "Encrypted Storage", desc: "End-to-end encryption for all patient data" },
                  { icon: FileText, title: "Audit Trails", desc: "Comprehensive logging and audit capabilities" }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="text-white" size={36} />
                    </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Case Studies
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real-world results from our clinical intelligence platform
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Early Detection Success", desc: "CardioSafe™ identified cardiac risk factors 3 months earlier than traditional methods, enabling preventive intervention." },
                  { title: "Wound Healing Optimization", desc: "DermaIQ™ improved wound healing outcomes by 40% through predictive analytics and personalized treatment plans." },
                  { title: "Medication Safety", desc: "LiverSafe™ prevented adverse drug reactions in 95% of high-risk patients through real-time monitoring." }
                ].map((study, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group hover:border-blue-200">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{study.desc}</p>
                        </div>
                      </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIONClinicalIntelligencePage;

