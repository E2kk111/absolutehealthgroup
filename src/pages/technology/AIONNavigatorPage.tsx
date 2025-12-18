
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Network, Smartphone, Code, FileText, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const AIONNavigatorPage: React.FC = () => {
  const capabilities = [
    {
      icon: Smartphone,
      title: "Patient App + Care Task Engine",
      description: "Intuitive mobile app with personalized care tasks and reminders"
    },
    {
      icon: Code,
      title: "SMART on FHIR Interoperability",
      description: "Seamless integration with healthcare systems using FHIR standards"
    },
    {
      icon: FileText,
      title: "Coverage + Benefits Logic",
      description: "Intelligent benefits navigation and coverage optimization"
    },
    {
      icon: Calendar,
      title: "Visit Scheduling + Logistics",
      description: "Automated scheduling and coordination of care visits"
    },
    {
      icon: Users,
      title: "Clinician Decision Support",
      description: "Real-time decision support tools for care providers"
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/r-l6EyHAql6rnl4zf/videoblocks-284z_69_hqyimyrwj__cfab1b8015b4dd27e9f35ada2d60865d__P360.mp4"
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/10 shadow-2xl">
                <Network className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                AION Navigator Stack
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                Patient journey coordination and care navigation
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Capabilities
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive navigation and coordination tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                const capabilityImages = [
                  "https://media.istockphoto.com/id/1142528978/photo/online-healthcare-app-on-smartphone-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=q_RoxSbRLvVjLekZE3VG0l_Zw9d1dQEfrBxBOvg9Ntc=",
                  "https://plus.unsplash.com/premium_photo-1681995236840-0305713eebdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNlYW1sZXNzJTIwaW50ZWdyYXRpb24lMjB3aXRoJTIwaGVhbHRoY2FyZSUyMHN5c3RlbXMlMjB1c2luZyUyMEZISVIlMjBzdGFuZGFyZHN8ZW58MHx8MHx8fDA%3D",
                  "https://images.unsplash.com/photo-1666214280250-41f16ba24a26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEludGVsbGlnZW50JTIwYmVuZWZpdHMlMjBuYXZpZ2F0aW9uJTIwYW5kJTIwY292ZXJhZ2UlMjBvcHRpbWl6YXRpb24lMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
                  "https://media.istockphoto.com/id/1420323259/photo/scheduling-and-booking-online-appointment-in-calendar.webp?a=1&b=1&s=612x612&w=0&k=20&c=KNToLF106H4-2SduzTO6KgXalUMOmTKYwIo0_EScQmc=",
                  "https://media.istockphoto.com/id/2162635589/photo/woman-hand-showing-medical-app-on-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=umDGOO1Uo62Md_3xpG-KInqCd04oHxPdzNclpgH01nA="
                ];
                return (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group">
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                      <img
                        src={capabilityImages[index]}
                        alt={capability.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-slate-50">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{capability.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{capability.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Patient Journey Map */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Patient Journey Map
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  A seamless workflow from assessment to outcomes
                </p>
                      </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Initial Assessment", desc: "Comprehensive evaluation and care plan development" },
                      { num: 2, title: "Care Coordination", desc: "Scheduling, provider matching, and logistics coordination" },
                      { num: 3, title: "Ongoing Navigation", desc: "Continuous support, monitoring, and care plan adjustments" },
                      { num: 4, title: "Outcome Optimization", desc: "Tracking outcomes and optimizing care pathways" }
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

        {/* App Screens */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                App Screens (UI Mockups)
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Intuitive interfaces for seamless navigation
                </p>
                    </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Smartphone, title: "Dashboard", desc: "Overview of care plan and tasks" },
                  { icon: Calendar, title: "Appointments", desc: "Schedule and manage visits" },
                  { icon: FileText, title: "Care Plan", desc: "View and track progress" }
                ].map((screen, idx) => {
                  const IconComponent = screen.icon;
                  return (
                    <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group">
                      <CardContent className="p-8">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-10 text-center border border-blue-100 group-hover:border-blue-300 transition-colors">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <IconComponent className="text-white" size={40} />
                    </div>
                          <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">{screen.title}</h3>
                          <p className="text-sm text-slate-600">{screen.desc}</p>
                    </div>
                  </CardContent>
                </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* API + FHIR Documentation */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                API + FHIR Documentation
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Seamless integration with healthcare systems
                      </p>
                    </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8">
                    {[
                      { title: "SMART on FHIR Integration", desc: "AION Navigator uses SMART on FHIR standards for seamless interoperability with healthcare systems." },
                      { title: "RESTful API", desc: "Comprehensive REST API for integrating navigation capabilities into existing workflows." },
                      { title: "Developer Resources", desc: "Full API documentation, SDKs, and developer support available for integration partners." }
                    ].map((item, idx) => (
                      <div key={idx} className="pb-8 border-b border-slate-200 last:border-0 last:pb-0">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
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

export default AIONNavigatorPage;

