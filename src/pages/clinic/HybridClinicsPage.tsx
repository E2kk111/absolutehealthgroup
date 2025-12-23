
import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Building2, Stethoscope, Heart, Activity, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const HybridClinicsPage: React.FC = () => {
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
      icon: Stethoscope,
      title: "Preventive Medicine & Diagnostics",
      description: "Comprehensive preventive care including screenings, health assessments, and early detection programs."
    },
    {
      icon: Heart,
      title: "Chronic Condition Programs",
      description: "Specialized programs for managing diabetes, hypertension, heart disease, and other chronic conditions."
    },
    {
      icon: Activity,
      title: "Procedure Support & Recovery",
      description: "Pre and post-procedure care coordination to ensure optimal recovery outcomes."
    },
    {
      icon: CheckCircle,
      title: "Care Plan Management",
      description: "Personalized care plans that adapt to patient needs and progress over time."
    }
  ];

  const conditions = [
    "Diabetes Management",
    "Hypertension Control",
    "Cardiac Care",
    "Respiratory Conditions",
    "Mental Health Support",
    "Preventive Screenings"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-in-modern-hospital-or-clinic-doctor-is-putting-oxygen-mask-on-senior-patient-who-lies-in-bed-coronavirus-covid-19-related-medical-medicinal-healthcare-theme-infection-treatment-during-epidemic_sywjceezd__073f810850c33a54de3a5f6dac2d2710__P360.mp4"
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
                <Building2 className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Hybrid Clinics
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                Preventive medicine & diagnostics, chronic condition programs, procedure support & recovery, care plan management
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
                Our Services
              </h2>
              <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive care delivered with modern technology
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
                  "https://plus.unsplash.com/premium_photo-1661499961209-819129712c33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJldmVudGl2ZSUyMG1lZGljaW5lJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
                  "https://images.unsplash.com/photo-1685660478073-ab6b01a529cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWdpbmclMjBkaWFiZXRlcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1723489233591-33522baae1d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3B0aW1hbCUyMHJlY292ZXJ5JTIwb3V0Y29tZSUyMGFwcCUyMGluJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
                  "https://plus.unsplash.com/premium_photo-1661378496270-58eecbf3ad27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
                ];
                return (
                  <Card 
                    key={index} 
                    className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 ${isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

        {/* Conditions We Treat */}
        <section 
          id="conditions"
          ref={setRef('conditions')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['conditions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Conditions We Treat
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['conditions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Comprehensive care for a wide range of conditions
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {conditions.map((condition, index) => (
                  <Card
                    key={index}
                    className={`bg-white/90 backdrop-blur-xl border-0 shadow-md hover:shadow-xl transition-all duration-500 group hover:scale-105 hover:-translate-y-1 ${isVisible['conditions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <span className="text-slate-700 font-semibold text-base group-hover:text-blue-600 transition-colors">{condition}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Example Workflows */}
        <section 
          id="workflows"
          ref={setRef('workflows')}
          className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['workflows'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Example Workflows
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['workflows'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Streamlined processes for optimal care delivery
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Initial Assessment", desc: "Comprehensive health evaluation, risk assessment, and care plan development.", gradient: "from-blue-500 to-blue-600" },
                  { title: "Ongoing Monitoring", desc: "Regular check-ins, medication management, and progress tracking.", gradient: "from-purple-500 to-purple-600" },
                  { title: "Care Coordination", desc: "Seamless coordination with specialists, labs, and other healthcare providers.", gradient: "from-green-500 to-green-600" }
                ].map((workflow, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['workflows'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${workflow.gradient}`} />
                    <CardContent className="p-8 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${workflow.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">{workflow.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed relative z-10">{workflow.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section 
          id="testimonials"
          ref={setRef('testimonials')}
          className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent transition-all duration-1000 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Patient Testimonials
                </h2>
                <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Real stories from our patients
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { quote: "The hybrid clinic model made it so convenient to manage my diabetes. I could get care when and where I needed it.", author: "Sarah M., Patient", gradient: "from-blue-500 to-blue-600" },
                  { quote: "The care coordination was excellent. Everything was seamless and I felt well-supported throughout my recovery.", author: "John D., Patient", gradient: "from-purple-500 to-purple-600" }
                ].map((testimonial, idx) => (
                  <Card 
                    key={idx} 
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-xl group hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    <CardContent className="p-8 relative z-10">
                      <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                      <p className="text-base font-semibold text-slate-900">— {testimonial.author}</p>
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

export default HybridClinicsPage;

