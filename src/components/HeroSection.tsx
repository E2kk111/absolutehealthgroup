
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Heart, Activity } from 'lucide-react';
import { handleSmoothScroll } from '../utils/smoothScroll';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Background videos array - healthcare videos that flow/rotate
  const backgroundVideos = [
    "https://media.istockphoto.com/id/2230920203/video/close-up-of-hands-using-a-healthcare-app-to-schedule-a-doctors-visit-selecting-a-provider.mp4?b=1&s=192_srp&k=20&c=dOeMbgq4HdbtLOVNRNUXe-TVPmiAuHHnxzFy0dktM9w=",
    "https://media.istockphoto.com/id/1424794714/video/asian-woman-appointment-consulting-doctor-visit-on-mobile-app-at-home-telemedicine.mp4?b=1&s=192_srp&k=20&c=Xns5p-k4NYVX4-4GSHkJxnDgBH0gBtAjwobIYFpyRcc=",
    "https://media.istockphoto.com/id/1326196672/video/young-asian-woman-receive-medicine-pharmacy-medical-box-home-delivery.mp4?b=1&s=192_srp&k=20&c=Ix2Kb3FjzJLYC5gWphuJhfjU0Zbg7k9hUSV0ZyuMO7w=",
    "https://media.istockphoto.com/id/1385274032/video/drug-distribution-group-insurance-for-remote-work-workforce-welfare.mp4?b=1&s=192_srp&k=20&c=h2Ana6VoqxxR8BqS8zN0QUCw1KE8zYtcEdaLJzMO31U=",
    "https://media.istockphoto.com/id/1483063706/video/woman-using-health-tech-in-real-life.mp4?b=1&s=192_srp&k=20&c=dxf-5kM4VD2pyfQiJyU45vy5neGzjJqo7xgr1EN9jlc=",
    "https://media.istockphoto.com/id/493999803/video/coordination-of-movements-training-in-hospital.mp4?b=1&s=192_srp&k=20&c=iVgC1XLilRnTu6nDBF3mpO8qt6vjybV5razxRhmrOMc=",
    "https://media.istockphoto.com/id/2163814073/video/hospital-doctor-using-spreadsheet-for-billing-codes-on-desktop.mp4?b=1&s=192_srp&k=20&c=boFZ4Aq0OWnpkAatqRNIwdo9jOPxLMZer3YLUpj4n3w=",
    "https://media.istockphoto.com/id/2188975024/video/an-elderly-medical-professor-is-imparting-his-expertise-and-skills-to-the-new-generation-of.mp4?b=1&s=192_srp&k=20&c=s4EMP8eqWEt2XbF1t9gs7Y3M3dlc_MRFEZGBfl8xbdI=",
    "https://media.istockphoto.com/id/1483952257/video/woman-using-pulse-oximeter-measuring-heart-rate-pulse-monitoring-heartbeat-with-smartphone.mp4?b=1&s=192_srp&k=20&c=C4gbrnG0pmS21x0GETuZWs1h79sWEgHKQEBgiaVS_jw=",
    "https://media.istockphoto.com/id/1398924098/video/man-talking-with-doctor-on-video-call.mp4?b=1&s=192_srp&k=20&c=Kb55eRUgoQPxGg3W5mIZ-iocWWwXXqw1kj5bhEC0hqs=",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate background videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        (prevIndex + 1) % backgroundVideos.length
      );
    }, 8000); // Change video every 8 seconds (longer for videos)

    return () => clearInterval(interval);
  }, [backgroundVideos.length]);


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 md:-mt-24 group">
      
      {/* Flowing Background Videos */}
      <div className="absolute inset-0">
        {backgroundVideos.map((video, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
      
      {/* Dark overlay for more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animated-bg opacity-40"></div>
      
      {/* Additional dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated shapes with more movement - Reduced size on mobile */}
      <div 
        className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl float-animation animate-pulse-glow opacity-50 md:opacity-100"
        style={{ 
          transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl float-animation animate-pulse-glow opacity-50 md:opacity-100"
        style={{ 
          animationDelay: '2s',
          transform: `translate(${(mousePosition.x - 50) * -0.15}px, ${(mousePosition.y - 50) * -0.15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-spin-slow"></div>
      
      {/* Additional floating particles - Reduced on mobile */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="hidden sm:block absolute w-2 h-2 bg-white/30 rounded-full float-animation"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
      
      {/* Animated icons floating - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/4 float-animation opacity-20">
        <Zap className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="hidden md:block absolute top-1/3 right-1/4 float-animation opacity-20" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-1/3 float-animation opacity-20" style={{ animationDelay: '3s' }}>
        <Activity className="w-7 h-7 text-accent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Grid pattern overlay with animation - Reduced opacity on mobile */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 md:opacity-50"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      
      {/* Animated light rays - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-1 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{
            left: `${mousePosition.x}%`,
            transform: 'rotate(45deg)',
            transition: 'left 0.3s ease-out',
            animation: 'pulse-glow 3s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Rest of your content remains the same */}
      <div className="container relative z-10 pt-16 md:pt-24 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full flex flex-col">
          {/* Mobile: Badge moved to top, but with better spacing */}
          <div className="order-1 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-8 border border-white/30 animate-in fade-in duration-1000 hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-default self-center">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-secondary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">Innovative Healthcare Solutions</span>
          </div>
          
          {/* Mobile: Main heading with optimized spacing */}
          <h1 className="order-2 hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-4 md:mb-8 text-white animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 px-2 group-hover:scale-105 transition-transform duration-500">
            <span className="block mb-1 md:mb-2 hero-text-shadow hover:scale-90 inline-block transition-transform duration-300 cursor-default">
              Transformative
            </span>
            <span className="block hero-gradient-text hover:scale-90 inline-block transition-transform duration-300 cursor-default">
                 Care
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 md:mt-4 font-extrabold hero-text-shadow hover:scale-90 inline-block transition-transform duration-300 cursor-default">
              for a Healthier Tomorrow
            </span>
          </h1>
          
          {/* Mobile: Description with better spacing */}
          <p className="order-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-white hero-text-shadow mb-6 md:mb-12 leading-relaxed max-w-4xl mx-auto px-2 md:px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 hover:text-white transition-colors duration-300">
            Tech-enabled, data-driven healthcare solutions that optimize reimbursement and improve patient outcomes. Elevate your practice with our innovative Medicare software suite.
          </p>
          
          {/* Mobile: CTA buttons with better mobile layout */}
          <div className="order-4 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-stretch sm:items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 px-2 md:px-4 mb-8 md:mb-0">
            <a 
              href="/about" 
              className="group cta-button text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-center flex items-center justify-center gap-2 hover:shadow-glow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                About Our Group
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a 
              href="#solutions" 
              onClick={(e) => handleSmoothScroll(e, 'solutions')}
              className="cta-button secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-center group flex items-center justify-center gap-2 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                Go to Solutions
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
