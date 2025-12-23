
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Heart, Activity } from 'lucide-react';
import { handleSmoothScroll } from '../utils/smoothScroll';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Background videos array - healthcare videos that flow/rotate
  const backgroundVideos = [
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-nurse-wearing-headset-with-sensors-during-neuoroscience-experiment-in-medical-conference-team-monitor-shows-modern-brain-study-while-team-of-scientist-adjusts-the-device-working-in-hospital-boardroom_h0j6uetsd__fba577a86e40e8fd0c57fbcd4a3cea7b__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Bo-ziHq_jlbqx8330/videoblocks-pharmacy09_bmyqhrfx3__44bc4de7432f6e53f0f8767cfba3c767__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20241014-pm-chukhlomin-medical-meeting-3-studio-crossmedia00000000-g79g6vghz9__5cbe70be736ff4281bdee2a9eddfb20d__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-61e6cd4ace7d0651dce042bb_rwnjlvaay__e50ecd1ce1a23de79a59355be7f40075__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-641d92226326c401774e76f2_hltxk0nbn__760ba1f9f65375a59c22e5d55c73c3f0__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BgrICs-NZj4hksnn3/videoblocks-61d7fe0b2a335c6b5643ec92_rdqcormay__5f2b09aabd4687ab1cde6cfeee503e40__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Hc_TvUoHMjcyusz29/videoblocks-643d2026b5da720db9d404f0_brsd6lyx3__ae1ddb3f6493dc7985e2ff9aa553e176__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/v1-0019-20250211-pm-chukhlomin-diabetic-medical-office-4-studio-crossmedia00000000-wlr6wv82b9__628a0b76825a302e617817f90000d3d3__P360.mp4",
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/r7xJMA473lgvqwmwr/videoblocks-20240313_spcv-xtxc__79eb254f6931f231521bdd90364a78ea__P360.mp4",
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
            <span className="text-xs md:text-sm font-semibold text-white drop-shadow-lg">AptusCore™</span>
          </div>
          
          {/* Mobile: Main heading with optimized spacing */}
          <h1 className="order-2 hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-4 md:mb-8 text-white animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 px-2 group-hover:scale-105 transition-transform duration-500">
            <span className="block mb-1 md:mb-2 hero-text-shadow hover:scale-90 inline-block transition-transform duration-300 cursor-default">
              Absolute Health Group
            </span>
            <span className="block hero-gradient-text hover:scale-90 inline-block transition-transform duration-300 cursor-default">
              Navigation   &    Intelligence    Care
            </span>
          </h1>
          
          {/* Mobile: Description with better spacing */}
          <p className="order-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-white hero-text-shadow mb-6 md:mb-12 leading-relaxed max-w-4xl mx-auto px-2 md:px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 hover:text-white transition-colors duration-300">
            Navigation-led care, intelligent automation, and precision health plans keeping people healthier at home and out of the hospital.
          </p>
          
          {/* Mobile: CTA buttons with better mobile layout */}
          <div className="order-4 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-stretch sm:items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 px-2 md:px-4 mb-8 md:mb-0">
            <Link 
              to="/clinic" 
              className="group cta-button text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-center flex items-center justify-center gap-2 hover:shadow-glow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                Explore TransformativeCare™
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            <Link 
              to="/technology" 
              className="cta-button secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-center group flex items-center justify-center gap-2 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center gap-2">
                Discover AptusCore™
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
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
