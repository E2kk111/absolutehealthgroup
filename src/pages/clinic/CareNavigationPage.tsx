
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Navigation, Shield, Users, Calendar, Activity, Smartphone } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const CareNavigationPage: React.FC = () => {
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
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
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
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-8 border border-white/10 shadow-2xl">
                <Navigation className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Care Navigation Layer
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                Every patient receives benefits + coverage guidance, specialist matching, care plan coordination, ongoing monitoring
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
              Navigation Services
            </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive support for your healthcare journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const serviceImages = [
                  "https://media.istockphoto.com/id/2156781257/photo/hospital-integrated-advanced-technology-into-its-health-care-system-ensuring-medical-safety.webp?a=1&b=1&s=612x612&w=0&k=20&c=DDsc9N90RflslqBfY4HDBf4417irvQFf97ZXvS1MtUY=",
                  "https://media.istockphoto.com/id/1501183871/photo/doctors-registering-patients-at-the-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=p_BnNwDwa9rcwE90AxDVbqx0CMkz3hN_DN31FzE-seM=",
                  "https://media.istockpicture.com/id/1180955065/photo/doctor-and-nurse-walking-by-patients-in-lobby.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cw9TgPSYwRh0cvd9lqnCquvk7QYUtUoLqkCyGPMDq8Y=",
                  "https://media.istockpicture.com/id/2217159646/photo/doctor-monitoring-the-vital-signs-of-a-patient-using-a-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=iLlgToQA623oG-xox-Whj1WZ-RGkHbtyVZ6V__QnEGM="
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

        {/* Patient App */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-8 shadow-lg">
                    <Smartphone className="text-white" size={36} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
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
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 text-center relative overflow-hidden border border-blue-100 shadow-xl">
                    <video
                      src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Hc_TvUoHMjcyusz29/videoblocks-hands-of-woman-using-mobile-phone_bsjleosvu__3b76b114cc4414021569caa7da4dca27__P360.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-xl"
                    />
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Smartphone className="text-white" size={48} />
                      </div>
                      <p className="text-slate-700 text-lg font-medium">App screenshots and UI mockups</p>
                      <p className="text-sm text-slate-500 mt-4">Coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Workflow */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Navigation Workflow
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  A comprehensive process for seamless care navigation
                </p>
                      </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Initial Assessment", desc: "Comprehensive evaluation of your health needs, benefits, and care goals." },
                      { num: 2, title: "Care Plan Development", desc: "Personalized care plan with recommended providers, treatments, and timeline." },
                      { num: 3, title: "Ongoing Support", desc: "Continuous navigation support, appointment scheduling, and care coordination." },
                      { num: 4, title: "Monitoring & Adjustment", desc: "Regular monitoring of your progress and adjustments to your care plan as needed." }
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

        {/* Support Availability */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Support Availability
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Multiple channels for comprehensive support
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "24/7 Access", desc: "Round-the-clock access through the patient app" },
                  { title: "Dedicated Navigator", desc: "Assigned care navigator for personalized support" },
                  { title: "Multi-Channel", desc: "Support via app, phone, email, and video" }
                ].map((support, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group">
                    <CardContent className="p-8 text-center">
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

export default CareNavigationPage;

