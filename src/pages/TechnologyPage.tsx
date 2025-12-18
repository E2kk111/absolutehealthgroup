
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Network, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const TechnologyPage: React.FC = () => {
  const stacks = [
    {
      icon: Brain,
      title: "AION Clinical Intelligence Stack",
      path: "/technology/aion-clinical-intelligence",
      description: "AI-powered clinical decision support and predictive analytics",
      capabilities: [
        "DermaIQ™ — wound healing prediction",
        "CardioSafe™ — cardiac early warnings",
        "LiverSafe™ — drug safety insights",
        "Aion PGx™ — genomic therapy matching",
        "DoseAI™ — autonomous dosing",
        "Aion Patch™ — therapeutic skin delivery",
        "Aion Care™ — telepresence + autonomous workflows"
      ],
      modules: ["Clinical AI pipeline", "Interoperability diagram", "Data security & privacy", "Case studies"]
    },
    {
      icon: Network,
      title: "AION Navigator Stack",
      path: "/technology/aion-navigator",
      description: "Patient journey coordination and care navigation",
      capabilities: [
        "Patient app + care task engine",
        "SMART on FHIR interoperability",
        "Coverage + benefits logic",
        "Visit scheduling + logistics",
        "Clinician decision support"
      ],
      modules: ["Patient journey map", "App screens (UI mockups)", "API + FHIR documentation"]
    },
    {
      icon: DollarSign,
      title: "AION Finance (RegFi) Stack",
      path: "/technology/aion-finance",
      description: "Outcomes-based payment and financial solutions",
      capabilities: [
        "MedRise — provider liquidity",
        "Therapy financing for patients",
        "Outcomes-based payment engine",
        "Real-time audit + verification"
      ],
      modules: ["RegFi architecture diagram", "Payment scenarios", "Provider onboarding"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                AION Stacks™
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
                Clinical Intelligence + Navigation + RegFi
              </p>
              <p className="text-lg mb-8 text-blue-200">
                AION powers the entire clinical and financial backbone of Absolute Health Group.
              </p>
              <Link
                to="#stacks"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('stacks')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Explore the Stacks
                <ArrowRight size={20} />
              </Link>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Stacks Overview */}
        <section id="stacks" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="space-y-12">
              {stacks.map((stack, index) => {
                const IconComponent = stack.icon;
                return (
                  <Card 
                    key={index}
                    className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group"
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={[
                          "https://media.istockphoto.com/id/2235302123/photo/telemedicine-physician-reviews-ai-driven-health-data-on-holographic-interface-beside.webp?a=1&b=1&s=612x612&w=0&k=20&c=p2t2t4tHAwBSzqxWHR7vxVwAEQA9dRF4uFZR5RcIjO8=",
                          "https://media.istockphoto.com/id/2230398605/photo/black-male-doctor-explaining-vital-signs-on-monitor-to-senior-caucasian-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=l1O4mOGtfsRFy2tn1SBtgsI4U_Cg2W6bjTnSzhWKqQo=",
                          "https://media.istockphoto.com/id/2177319503/photo/close-up-of-a-mother-paying-at-the-dentists-reception-using-her-mobile-phone-with-a-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=CZGFfYb7u6OxjoblRFBgz6f46dbRv7odW-oz0hPNmI0="
                        ][index]}
                        alt={stack.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-8 md:p-10 bg-gradient-to-br from-white to-slate-50">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                            <IconComponent className="text-white" size={40} />
                          </div>
                          <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{stack.title}</h3>
                          <p className="text-slate-600 text-lg mb-6 leading-relaxed">{stack.description}</p>
                          <Link
                            to={stack.path}
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          >
                            Learn More
                            <ArrowRight size={18} />
                          </Link>
                        </div>
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-slate-900 text-lg mb-4">Capabilities:</h4>
                          <ul className="space-y-3 mb-8">
                            {stack.capabilities.map((capability, idx) => (
                              <li key={idx} className="text-slate-600 flex items-start group/item">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                                <span className="text-base">{capability}</span>
                              </li>
                            ))}
                          </ul>
                          <h4 className="font-bold text-slate-900 text-lg mb-4">Modules:</h4>
                          <ul className="space-y-2">
                            {stack.modules.map((module, idx) => (
                              <li key={idx} className="text-slate-600 flex items-center group/item">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform" />
                                <span className="text-base">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Goal Block */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-12 md:p-16 border border-blue-100 shadow-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Predict earlier, coordinate smarter, pay based on outcomes.
              </h2>
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
