
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Truck, MapPin, TestTube, Shield, BarChart } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const MobileClinicsPage: React.FC = () => {
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

  const services = [
    {
      icon: MapPin,
      title: "Community Visits",
      description: "Bringing healthcare directly to underserved communities and neighborhoods."
    },
    {
      icon: TestTube,
      title: "Labs + Diagnostics in the Field",
      description: "On-site laboratory services and diagnostic testing capabilities."
    },
    {
      icon: Shield,
      title: "Prevention Units",
      description: "Mobile prevention and screening programs for early detection."
    },
    {
      icon: Truck,
      title: "Rapid Response Teams",
      description: "Quick deployment teams for urgent care needs and health emergencies."
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-lungs-diagnostic-system-futuristic-hud-medical-animation-health-science-body-screen-disease-hologram-and-biology-representation-respiratory-system-future-diagnose-research-scanning-report_hf-fvlsjd__02f33ac838da3addcb098cad8c53748f__P360.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/10 shadow-2xl">
                <Truck className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Mobile Clinics
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                Community visits, labs + diagnostics in the field, prevention units, rapid response teams
              </p>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section 
          id="services"
          ref={setRef('services')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Mobile Clinic Services
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Healthcare delivered where it's needed most
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const gradients = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-green-500 to-green-600",
                  "from-orange-500 to-orange-600"
                ];
                const serviceImages = [
                  "https://images.unsplash.com/photo-1758520388251-2f55adda2f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNpbmclMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D",
                  "https://images.unsplash.com/photo-1583912372139-6a46eb6eb119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpYWdub3N0aWMlMjB0ZXN0aW5nfGVufDB8fDB8fHww",
                  "https://images.unsplash.com/photo-1627495395453-eb6afb14c411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhZ25vc3RpYyUyMG1vYmlsZSUyMGRldGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1681843042287-4240248634b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZSUyMHRlYW18ZW58MHx8MHx8fDA%3D"
                ];
                return (
                  <Card 
                    key={index} 
                    className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">{service.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deployment Map */}
        <section 
          id="deployment"
          ref={setRef('deployment')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['deployment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Deployment Map
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['deployment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Track our mobile clinic locations and scheduled visits
                </p>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['deployment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 text-center border border-blue-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MapPin className="text-white" size={40} />
                    </div>
                    <p className="text-slate-700 text-lg mb-2">Interactive map showing mobile clinic locations and scheduled visits</p>
                    <p className="text-sm text-slate-500 mt-4">Map integration coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile Fleet Capabilities */}
        <section 
          id="capabilities"
          ref={setRef('capabilities')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Mobile Fleet Capabilities
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  State-of-the-art mobile healthcare units
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Fully Equipped", desc: "State-of-the-art medical equipment in every vehicle", gradient: "from-blue-500 to-blue-600" },
                  { title: "Telehealth Ready", desc: "Integrated telehealth capabilities for remote consultations", gradient: "from-purple-500 to-purple-600" },
                  { title: "Health OS Connected", desc: "Connected to AptusCore™ Health OS for seamless care coordination", gradient: "from-green-500 to-green-600" }
                ].map((capability, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${capability.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <CardContent className="p-8 text-center relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Truck className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{capability.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{capability.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section 
          id="metrics"
          ref={setRef('metrics')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['metrics'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Impact Metrics
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['metrics'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Measurable results from our mobile clinic program
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "500+", label: "Community Visits", gradient: "from-blue-500 to-blue-600" },
                  { value: "2,000+", label: "Patients Served", gradient: "from-purple-500 to-purple-600" },
                  { value: "95%", label: "Patient Satisfaction", gradient: "from-green-500 to-green-600" }
                ].map((metric, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['metrics'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <CardContent className="p-8 text-center relative z-10">
                      <div className={`text-5xl font-extrabold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-3`}>{metric.value}</div>
                      <p className="text-slate-600 text-lg">{metric.label}</p>
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

export default MobileClinicsPage;

