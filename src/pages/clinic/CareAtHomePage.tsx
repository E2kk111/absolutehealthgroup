
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Home, User, Bandage, Pill, Heart, Video } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const CareAtHomePage: React.FC = () => {
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
      icon: User,
      title: "NP/PA Home Visits",
      description: "Licensed nurse practitioners and physician assistants providing comprehensive care in the comfort of your home."
    },
    {
      icon: Bandage,
      title: "Wound Care & Post-Acute Recovery",
      description: "Specialized wound care management and recovery support after hospital discharge."
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Medication review, reconciliation, and adherence support to ensure optimal outcomes."
    },
    {
      icon: Heart,
      title: "Longevity & Preventive Pathways",
      description: "Personalized programs focused on preventive care and healthy aging."
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HrrabAxWinloumzm/videoblocks-384_u0vosu9siefuiehptuuynq_ra-nlh3vy__fef526c5d25735c51219f2be3de29e55__P360.mp4"
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
                <Home className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Care-At-Home
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                NP/PA home visits, wound care & post-acute recovery, medication management, longevity & preventive pathways
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
                Home Care Services
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive care delivered in the comfort of your home
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const serviceImages = [
                  "https://media.istockphoto.com/id/2003762957/photo/home-health-care-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=tn-_EBSAHbjgR36DVOTEo0MVoxt59DBU3QNRXp7QOGo=",
                  "https://media.istockphoto.com/id/1066965606/photo/disabled-woman-searching-pills-information-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=wisSDvoOIR6kbhqkouYYgdq-DVNk0bDbV7pbIl_QPKY=",
                  "https://images.unsplash.com/photo-1758691462493-120a069304e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1lZGljYXRpb24lMjByZXZpZXd8ZW58MHx8MHx8fDA%3D",
                  "https://media.istockphoto.com/id/1796947698/photo/doctor-connecting-continuous-glucose-monitor-with-smartphone-to-check-blood-sugar-level-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=3QTtX2TRPUPkPMhppNaTTdSR-fAn7n46ib20tPfLdEk="
                ];
                const gradients = [
                  "from-blue-500 to-blue-600",
                  "from-purple-500 to-purple-600",
                  "from-green-500 to-green-600",
                  "from-orange-500 to-orange-600"
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

        {/* Visit Workflow */}
        <section 
          id="workflow"
          ref={setRef('workflow')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Visit Workflow
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  A seamless process from scheduling to follow-up
                </p>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Scheduling", desc: "Schedule your home visit through our patient portal or by phone.", gradient: "from-blue-500 to-blue-600" },
                      { num: 2, title: "Provider Arrival", desc: "Licensed NP/PA arrives at your home with all necessary equipment.", gradient: "from-purple-500 to-purple-600" },
                      { num: 3, title: "Assessment & Care", desc: "Comprehensive assessment and care delivery in your home environment.", gradient: "from-green-500 to-green-600" },
                      { num: 4, title: "Follow-up", desc: "Care plan updates and follow-up coordination through AION Navigator.", gradient: "from-orange-500 to-orange-600" }
                    ].map((step, idx) => (
                      <div key={step.num} className={`flex items-start gap-6 group relative transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
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

        {/* Home Equipment */}
        <section 
          id="equipment"
          ref={setRef('equipment')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['equipment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Home Equipment
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['equipment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Advanced equipment for comprehensive home care
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Remote Monitoring Devices", desc: "Blood pressure monitors, glucose meters, and other vital sign devices.", gradient: "from-blue-500 to-blue-600" },
                  { title: "Wound Care Supplies", desc: "Comprehensive wound care kits and supplies for post-acute recovery.", gradient: "from-purple-500 to-purple-600" },
                  { title: "Medication Dispensers", desc: "Smart medication dispensers with reminders and adherence tracking.", gradient: "from-green-500 to-green-600" },
                  { title: "Telehealth Kits", desc: "Tablets and devices for virtual consultations and remote monitoring.", gradient: "from-orange-500 to-orange-600" }
                ].map((equipment, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['equipment'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${equipment.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{equipment.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{equipment.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Support */}
        <section 
          id="virtual-support"
          ref={setRef('virtual-support')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['virtual-support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Virtual Support
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['virtual-support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Round-the-clock virtual care access
                </p>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['virtual-support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="flex items-start gap-8 group">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Video className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">24/7 Virtual Care</h3>
                      <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                        Access to virtual consultations, care coordination, and support through AION Care™ telepresence platform.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "On-demand video consultations",
                          "Remote monitoring and alerts",
                          "Care plan updates and adjustments"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center text-slate-700 group/item">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 group-hover/item:scale-150 transition-transform duration-300" />
                            <span className="text-lg group-hover/item:text-blue-600 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default CareAtHomePage;

