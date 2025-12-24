
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Navigation, Shield, Users, Calendar, Activity, Smartphone } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const WholePersonNavigationPage: React.FC = () => {
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
      icon: Shield,
      title: "Benefits + Coverage Guidance",
      description: "Help understanding insurance benefits, coverage options, and financial assistance programs."
    },
    {
      icon: Users,
      title: "Specialist Matching",
      description: "Personalized matching with the right specialists based on your condition and needs."
    },
    {
      icon: Calendar,
      title: "Care Plan Coordination",
      description: "Seamless coordination of appointments, treatments, and follow-up care across providers."
    },
    {
      icon: Activity,
      title: "Ongoing Monitoring",
      description: "Continuous monitoring of your health status and proactive intervention when needed."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - responsive height */}
        <section className="relative min-h-[500px] md:h-[780px] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rF_6xyohit7ckhp9/videoblocks-new-healthydoctor-using-stethoscope-on-medicine-background-futuristic-technology-data-hologram-healthy-conceptdoctor-using-stethoscope-on-medicine-background-futuristic-technology-data-hologram-healthy-concept_rm6dz6tze__5f91e982bdac2c531235e1708f23fe45__P360.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Mobile: Stronger dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
          
          <div className="container relative z-10 py-8 md:py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center relative z-20">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl sm:rounded-2xl mb-6 sm:mb-8 border border-white/10 shadow-2xl">
                <Navigation className="text-white" size={28} />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Care Navigation Layer
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-blue-100 font-light px-4 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Every patient receives benefits + coverage guidance, specialist matching, care plan coordination, ongoing monitoring
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
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
                Navigation Services
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive support for your healthcare journey
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
                  "https://media.istockphoto.com/id/2156781257/photo/hospital-integrated-advanced-technology-into-its-health-care-system-ensuring-medical-safety.webp?a=1&b=1&s=612x612&w=0&k=20&c=DDsc9N90RflslqBfY4HDBf4417irvQFf97ZXvS1MtUY=",
                  "https://media.istockphoto.com/id/1501183871/photo/doctors-registering-patients-at-the-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=p_BnNwDwa9rcwE90AxDVbqx0CMkz3hN_DN31FzE-seM=",
                  "https://media.istockphoto.com/id/1180955065/photo/doctor-and-nurse-walking-by-patients-in-lobby.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cw9TgPSYwRh0cvd9lqnCquvk7QYUtUoLqkCyGPMDq8Y=",
                  "https://media.istockphoto.com/id/2217159646/photo/doctor-monitoring-the-vital-signs-of-a-patient-using-a-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=iLlgToQA623oG-xox-Whj1WZ-RGkHbtyVZ6V__QnEGM="
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

        {/* Patient App */}
        <section 
          id="patient-app"
          ref={setRef('patient-app')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible['patient-app'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="md:w-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Smartphone className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                    Patient App
                  </h2>
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                    Access your care navigation tools through our intuitive mobile app powered by AION Navigator.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "View your care plan and upcoming appointments",
                      "Access benefits and coverage information",
                      "Communicate with your care team",
                      "Track your health metrics and progress"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-slate-700 text-lg group-hover/item:text-blue-600 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 text-center relative overflow-hidden border border-blue-100">
                      <video
                        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Hc_TvUoHMjcyusz29/videoblocks-hands-of-woman-using-mobile-phone_bsjleosvu__3b76b114cc4414021569caa7da4dca27__P360.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
                      />
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Smartphone className="text-white" size={48} />
                        </div>
                        <p className="text-slate-700 text-lg font-medium">App screenshots and UI mockups</p>
                        <p className="text-sm text-slate-500 mt-4">Coming soon</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Workflow */}
        <section 
          id="workflow"
          ref={setRef('workflow')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Navigation Workflow
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  A comprehensive process for seamless care navigation
                </p>
              </div>
              <Card className={`border-0 shadow-xl bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden ${isVisible['workflow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Initial Assessment", desc: "Comprehensive evaluation of your health needs, benefits, and care goals.", gradient: "from-blue-500 to-blue-600" },
                      { num: 2, title: "Care Plan Development", desc: "Personalized care plan with recommended providers, treatments, and timeline.", gradient: "from-purple-500 to-purple-600" },
                      { num: 3, title: "Ongoing Support", desc: "Continuous navigation support, appointment scheduling, and care coordination.", gradient: "from-green-500 to-green-600" },
                      { num: 4, title: "Monitoring & Adjustment", desc: "Regular monitoring of your progress and adjustments to your care plan as needed.", gradient: "from-orange-500 to-orange-600" }
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

        {/* Support Availability */}
        <section 
          id="support"
          ref={setRef('support')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Support Availability
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Multiple channels for comprehensive support
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "24/7 Access", desc: "Round-the-clock access through the patient app", gradient: "from-blue-500 to-blue-600" },
                  { title: "Dedicated Navigator", desc: "Assigned care navigator for personalized support", gradient: "from-purple-500 to-purple-600" },
                  { title: "Multi-Channel", desc: "Support via app, phone, email, and video", gradient: "from-green-500 to-green-600" }
                ].map((support, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${support.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <CardContent className="p-8 text-center relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${support.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Navigation className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{support.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{support.desc}</p>
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

export default WholePersonNavigationPage;

