
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Building2, Stethoscope, Heart, Activity, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const HybridClinicsPage: React.FC = () => {
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
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Our Services
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive care delivered with modern technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const serviceImages = [
                  "https://plus.unsplash.com/premium_photo-1661499961209-819129712c33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJldmVudGl2ZSUyMG1lZGljaW5lJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
                  "https://images.unsplash.com/photo-1685660478073-ab6b01a529cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWdpbmclMjBkaWFiZXRlcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1723489233591-33522baae1d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3B0aW1hbCUyMHJlY292ZXJ5JTIwb3V0Y29tZSUyMGFwcCUyMGluJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
                  "https://plus.unsplash.com/premium_photo-1661378496270-58eecbf3ad27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
                ];
                return (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={serviceImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Conditions We Treat
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Comprehensive care for a wide range of conditions
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 border border-blue-100 group hover:border-blue-300"
                  >
                    <span className="text-slate-700 font-semibold text-base group-hover:text-blue-600 transition-colors">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Example Workflows */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Example Workflows
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Streamlined processes for optimal care delivery
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Initial Assessment", desc: "Comprehensive health evaluation, risk assessment, and care plan development." },
                  { title: "Ongoing Monitoring", desc: "Regular check-ins, medication management, and progress tracking." },
                  { title: "Care Coordination", desc: "Seamless coordination with specialists, labs, and other healthcare providers." }
                ].map((workflow, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group hover:border-blue-200">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{workflow.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{workflow.desc}</p>
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Patient Testimonials
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real stories from our patients
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { quote: "The hybrid clinic model made it so convenient to manage my diabetes. I could get care when and where I needed it.", author: "Sarah M., Patient" },
                  { quote: "The care coordination was excellent. Everything was seamless and I felt well-supported throughout my recovery.", author: "John D., Patient" }
                ].map((testimonial, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl">
                    <CardContent className="p-8">
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

