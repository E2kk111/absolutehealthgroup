
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building2, Truck, Home, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { scrollToTop } from '../utils/smoothScroll';

const ClinicPage: React.FC = () => {
  const clinicTypes = [
    {
      icon: Building2,
      title: "Hybrid Clinics",
      path: "/clinic/hybrid-clinics",
      description: "Preventive medicine & diagnostics, chronic condition programs, procedure support & recovery, care plan management",
      features: ["Conditions we treat", "Example workflows", "Patient testimonials"]
    },
    {
      icon: Truck,
      title: "Mobile Clinics",
      path: "/clinic/mobile-clinics",
      description: "Community visits, labs + diagnostics in the field, prevention units, rapid response teams",
      features: ["Deployment map", "Mobile fleet capabilities", "Impact metrics"]
    },
    {
      icon: Home,
      title: "Care-At-Home",
      path: "/clinic/care-at-home",
      description: "NP/PA home visits, wound care & post-acute recovery, medication management, longevity & preventive pathways",
      features: ["Visit workflow", "Home equipment", "Virtual support"]
    },
    {
      icon: Navigation,
      title: "Care Navigation Layer",
      path: "/clinic/care-navigation",
      description: "Every patient receives benefits + coverage guidance, specialist matching, care plan coordination, ongoing monitoring",
      features: ["Patient app", "Navigation workflow", "Support availability"]
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rS5r4eB/1266328__326fea413ef4f274b64746fc47fbbe06__P360.mp4"
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
                Absolute Care™
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
                Hybrid, Mobile & At-Home Delivery
              </p>
              <p className="text-lg mb-4 text-blue-200">
                Care that goes where patients need it.
              </p>
              <p className="text-base mb-8 text-blue-300">
                Clinic • Mobile • Home — all coordinated by intelligent navigation.
              </p>
              <Link
                to="/clinic/care-navigation"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Find a Care Path
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

        {/* Clinic Types */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clinicTypes.map((clinic, index) => {
                const IconComponent = clinic.icon;
                const images = [
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
                  "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
                  "https://plus.unsplash.com/premium_photo-1663054397533-2a3fb0cab5de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZSUyMGF0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1723618898312-54269787cbe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aGNhcmUlMjBuYXZpZ2F0aW9ufGVufDB8fDB8fHww"
                ];
                return (
                  <Card 
                    key={index}
                    className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group"
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={images[index]}
                        alt={clinic.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{clinic.title}</h3>
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">{clinic.description}</p>
                      <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-3 text-lg">Modules:</h4>
                        <ul className="space-y-2">
                          {clinic.features.map((feature, idx) => (
                            <li key={idx} className="text-slate-600 flex items-center group/item">
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform" />
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={clinic.path}
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </Link>
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
                Accessible, continuous, tech-enabled care that improves outcomes.
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

export default ClinicPage;

