
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DollarSign, TrendingUp, CreditCard, Shield, FileText, Users } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const AIONFinancePage: React.FC = () => {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "MedRise — Provider Liquidity",
      description: "Immediate access to funds based on verified care delivery, improving cash flow for providers."
    },
    {
      icon: CreditCard,
      title: "Therapy Financing for Patients",
      description: "Affordable financing options for patients to access necessary treatments and therapies."
    },
    {
      icon: DollarSign,
      title: "Outcomes-Based Payment Engine",
      description: "Payment models aligned with patient outcomes rather than volume of services."
    },
    {
      icon: Shield,
      title: "Real-time Audit + Verification",
      description: "Automated verification and audit capabilities ensuring payment accuracy and compliance."
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
              src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/qEue9C6/videoblocks-financial-health-dollar-sign-money-budget-outlook-advice-help-3d-animation_rsdfpfnfh__6af626a45d9c18064eac604d2330f3f4__P360.mp4"
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
                <DollarSign className="text-white" size={36} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                AION Finance (RegFi) Stack
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100 font-light">
                Outcomes-based payment and financial solutions
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
                Comprehensive financial solutions for healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                const capabilityImages = [
                  "https://images.unsplash.com/photo-1677058054899-75c533d57048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW1tZWRpYXRlJTIwYWNjZXNzJTIwdG8lMjBmdW5kcyUyMGFwcCUyMGJhc2VkJTIwb24lMjB2ZXJpZmllZCUyMGNhcmUlMjBkZWxpdmVyeSUyQyUyMGltcHJvdmluZyUyMGNhc2glMjBmbG93JTIwZm9yJTIwcHJvdmlkZXJzLnxlbnwwfHwwfHx8MA%3D%3D",
                  "https://media.istockphoto.com/id/2094206791/photo/mobile-phone-with-a-financial-application-on-screen-woman-who-transfers-money-online-using.webp?a=1&b=1&s=612x612&w=0&k=20&c=49McnC16nk5l_QpL4fCHThuPWslYcHJ9ocI_D_54cBI=",
                  "https://media.istockphoto.com/id/2212469038/photo/doctor-giving-a-five-star-rating-symbolizing-healthcare-service-quality-and-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=m3k61ciin5_3xWbIYpe3TrmFpD1iRt70HymiC-mhzYo=",
                  "https://images.unsplash.com/photo-1720135885002-a19131beb73c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlYWwtdGltZSUyMEF1ZGl0JTIwJTJCJTIwVmVyaWZpY2F0aW9uJTIwYXBwfGVufDB8fDB8fHww"
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

        {/* RegFi Architecture */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                RegFi Architecture Diagram
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Connecting providers, payers, and patients
                </p>
                        </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 border border-blue-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { icon: Users, title: "Providers", desc: "Care delivery" },
                        { icon: DollarSign, title: "RegFi Engine", desc: "Payment processing" },
                        { icon: Shield, title: "Payers", desc: "Outcomes verification" }
                      ].map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={idx} className="text-center group">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                              <IconComponent className="text-white" size={36} />
                      </div>
                            <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                        );
                      })}
                      </div>
                    <p className="text-center text-slate-700 mt-10 text-lg font-medium">
                      RegFi connects providers, payers, and patients through outcomes-based payment models
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Scenarios */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Payment Scenarios
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real-world examples of outcomes-based payments
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { num: 1, title: "Chronic Care Management", desc: "Provider receives payment based on patient outcomes (e.g., HbA1c reduction) rather than number of visits." },
                  { num: 2, title: "Preventive Care", desc: "Payment tied to prevention of hospitalizations and emergency visits through proactive care." },
                  { num: 3, title: "Therapy Financing", desc: "Patient receives affordable financing for expensive therapies, with payments structured based on treatment success." }
                ].map((scenario, idx) => (
                  <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-xl group hover:border-blue-200">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform">
                          {scenario.num}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{scenario.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{scenario.desc}</p>
                        </div>
                      </div>
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Provider Onboarding */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Provider Onboarding
              </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  A streamlined process to get started
                </p>
                      </div>
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8 relative">
                    {[
                      { num: 1, title: "Application", desc: "Submit provider information and credentials for review." },
                      { num: 2, title: "Integration", desc: "Connect your EHR and systems to RegFi platform." },
                      { num: 3, title: "Training", desc: "Comprehensive training on outcomes-based payment models." },
                      { num: 4, title: "Go Live", desc: "Start receiving outcomes-based payments and improved cash flow." }
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
      </main>
      <Footer />
    </div>
  );
};

export default AIONFinancePage;

