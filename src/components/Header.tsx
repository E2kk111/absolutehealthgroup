
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2,
  Truck,
  Home,
  Navigation,
  Brain,
  Network,
  DollarSign,
  Headphones,
  Users,
  Briefcase,
  Mail,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClinicOpen, setIsClinicOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
  const [isClinicHovered, setIsClinicHovered] = useState(false);
  const [isTechnologyHovered, setIsTechnologyHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Timeout refs for delayed closing
  const clinicTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const technologyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClinicMouseEnter = () => {
    if (clinicTimeoutRef.current) {
      clearTimeout(clinicTimeoutRef.current);
      clinicTimeoutRef.current = null;
    }
    setIsClinicHovered(true);
  };

  const handleClinicMouseLeave = () => {
    clinicTimeoutRef.current = setTimeout(() => {
      setIsClinicHovered(false);
    }, 200);
  };

  const handleTechnologyMouseEnter = () => {
    if (technologyTimeoutRef.current) {
      clearTimeout(technologyTimeoutRef.current);
      technologyTimeoutRef.current = null;
    }
    setIsTechnologyHovered(true);
  };

  const handleTechnologyMouseLeave = () => {
    technologyTimeoutRef.current = setTimeout(() => {
      setIsTechnologyHovered(false);
    }, 200);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    return () => {
      if (clinicTimeoutRef.current) clearTimeout(clinicTimeoutRef.current);
      if (technologyTimeoutRef.current) clearTimeout(technologyTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll event on mobile navigation
  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu || !isMenuOpen) return;

    const handleMobileScroll = (e: Event) => {
      // Allow scrolling within the mobile menu
      e.stopPropagation();
    };

    mobileMenu.addEventListener('scroll', handleMobileScroll, { passive: true });
    return () => {
      mobileMenu.removeEventListener('scroll', handleMobileScroll);
    };
  }, [isMenuOpen]);

  const showShadow = scrollY > 20;
  
  // Check if we're at the top of home page (HeroSection) - use white theme
  const isHomePage = location.pathname === '/';
  const isAtTopOfHero = isHomePage && scrollY < 100;

  const clinic = [
    { path: '/clinic/hybrid-clinics', label: 'Hybrid Clinics', icon: Building2 },
    { path: '/clinic/mobile-clinics', label: 'Mobile Clinics', icon: Truck },
    { path: '/clinic/care-at-home', label: 'Care-At-Home', icon: Home },
    { path: '/clinic/care-navigation', label: 'Care Navigation', icon: Navigation },
  ];

  const technology = [
    { path: '/technology', label: 'AptusCore™ Health OS', icon: Cpu },
    { path: '/technology/our-solutions', label: 'Solutions', icon: Sparkles },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        showShadow 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/50' 
          : 'bg-white/80 backdrop-blur-lg'
      }`}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />
      
      <div className="container relative z-10">
        <nav className="flex justify-between items-center py-4 md:py-5">
          <div className="logo text-base md:text-2xl font-bold ml-2 mr-2">
            <Link 
              to="/" 
              onClick={scrollToTop} 
              className="group flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <img 
                src="/logo.png" 
                alt="Absolute Health Group" 
                className="w-24 h-24 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={20} className="text-blue-600 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={20} className="text-blue-600 transition-transform duration-300" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-20 ml-4 mr-4">
            <div className="nav-links flex gap-10">
              <div
                className="relative"
                onMouseEnter={handleClinicMouseEnter}
                onMouseLeave={handleClinicMouseLeave}
              >
                <DropdownMenu open={isClinicHovered} onOpenChange={setIsClinicHovered} modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Link
                      to="/clinic"
                      onClick={scrollToTop}
                      className="text-slate-800 hover:text-blue-600 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-1 outline-none hover:scale-105 cursor-pointer relative group"
                    >
                      <span className="relative z-10">Clinic</span>
                      <ChevronDown className={`h-4 w-4 transition-all duration-300 ${isClinicHovered ? 'rotate-180 text-blue-600' : 'text-slate-600 group-hover:text-blue-600'}`} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border border-blue-100/50 shadow-2xl transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[state=open]:duration-500 data-[state=closed]:duration-300 rounded-xl overflow-hidden"
                    onMouseEnter={handleClinicMouseEnter}
                    onMouseLeave={handleClinicMouseLeave}
                  >
                    {clinic.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <DropdownMenuItem key={item.path} asChild>
                          <Link 
                            to={item.path}
                            onClick={scrollToTop}
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ease-in-out flex items-center gap-3 h-12 px-4 whitespace-nowrap group/item relative overflow-hidden"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 relative z-10" />
                            <span className="truncate text-slate-700 group-hover/item:text-blue-600 font-medium transition-colors duration-300 relative z-10">{item.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div
                className="relative"
                onMouseEnter={handleTechnologyMouseEnter}
                onMouseLeave={handleTechnologyMouseLeave}
              >
                <DropdownMenu open={isTechnologyHovered} onOpenChange={setIsTechnologyHovered} modal={false}>
                  <DropdownMenuTrigger className="text-slate-800 hover:text-blue-600 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-1 outline-none hover:scale-105 relative group">
                    <span className="relative z-10">Technology</span>
                    <ChevronDown className={`h-4 w-4 transition-all duration-300 ${isTechnologyHovered ? 'rotate-180 text-blue-600' : 'text-slate-600 group-hover:text-blue-600'}`} />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border border-blue-100/50 shadow-2xl transition-all duration-500 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[state=open]:duration-500 data-[state=closed]:duration-300 rounded-xl overflow-hidden"
                    onMouseEnter={handleTechnologyMouseEnter}
                    onMouseLeave={handleTechnologyMouseLeave}
                  >
                    {technology.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <DropdownMenuItem key={item.path} asChild>
                          <Link 
                            to={item.path}
                            onClick={scrollToTop}
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ease-in-out flex items-center gap-3 h-12 px-4 whitespace-nowrap group/item relative overflow-hidden"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 relative z-10" />
                            <span className="truncate text-slate-700 group-hover/item:text-blue-600 font-medium transition-colors duration-300 relative z-10">{item.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link 
                to="/podcast"
                onClick={scrollToTop}
                className="text-slate-800 hover:text-blue-600 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                <span className="relative z-10">Podcast</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                to="/about"
                onClick={scrollToTop}
                className="text-slate-800 hover:text-blue-600 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link 
                to="/careers"
                onClick={scrollToTop}
                className="text-slate-800 hover:text-blue-600 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                <span className="relative z-10">Careers</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
            <Link 
              to="/contact" 
              onClick={scrollToTop} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 md:text-xs sm:text-sm lg:text-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/50 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 fade-in-0 duration-500 ease-out"
            >
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />
              
              <div className="flex flex-col gap-3 p-6 pb-8 relative z-10">
                <div className="animate-in fade-in-0 slide-in-from-left-2" style={{ animationDelay: '50ms', animationDuration: '400ms', animationFillMode: 'both' }}>
                  <div className="flex items-center justify-between w-full bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-2 border border-blue-100/50">
                    <Link
                      to="/clinic"
                      onClick={() => {
                        scrollToTop();
                        setIsMenuOpen(false);
                      }}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 ease-in-out py-2 flex-1 rounded-lg px-3 active:scale-95"
                    >
                      Clinic
                    </Link>
                    <button
                      onClick={() => setIsClinicOpen(!isClinicOpen)}
                      className="text-blue-600 hover:text-blue-700 hover:bg-white/50 transition-all duration-300 ease-in-out py-2 px-3 rounded-lg active:scale-95"
                      aria-label="Toggle Clinic submenu"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isClinicOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isClinicOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden animate-in slide-in-from-top-2 fade-in-0 duration-400 ease-out">
                      {clinic.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ease-in-out py-2.5 px-4 rounded-xl flex items-center gap-3 h-12 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2 active:scale-95 group/item border border-transparent hover:border-blue-100/50"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              scrollToTop();
                            }}
                          >
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3" />
                            <span className="truncate font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="animate-in fade-in-0 slide-in-from-left-2" style={{ animationDelay: '100ms', animationDuration: '400ms', animationFillMode: 'both' }}>
                  <div className="flex items-center justify-between w-full bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-2 border border-blue-100/50">
                    <button
                      onClick={() => setIsTechnologyOpen(!isTechnologyOpen)}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 ease-in-out py-2 flex-1 flex items-center justify-start rounded-lg px-3 active:scale-95"
                    >
                      Technology
                    </button>
                    <button
                      onClick={() => setIsTechnologyOpen(!isTechnologyOpen)}
                      className="text-blue-600 hover:text-blue-700 hover:bg-white/50 transition-all duration-300 ease-in-out py-2 px-3 rounded-lg active:scale-95"
                      aria-label="Toggle Technology submenu"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isTechnologyOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isTechnologyOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden animate-in slide-in-from-top-2 fade-in-0 duration-400 ease-out">
                      {technology.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ease-in-out py-2.5 px-4 rounded-xl flex items-center gap-3 h-12 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2 active:scale-95 group/item border border-transparent hover:border-blue-100/50"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                            onClick={() => {
                              setIsMenuOpen(false);
                              scrollToTop();
                            }}
                          >
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3" />
                            <span className="truncate font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <Link 
                  to="/podcast"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold transition-all duration-300 ease-in-out py-3 px-4 rounded-xl animate-in fade-in-0 slide-in-from-left-2 active:scale-95 border border-transparent hover:border-blue-100/50"
                  style={{ animationDelay: '150ms', animationDuration: '400ms', animationFillMode: 'both' }}
                >
                  Podcast
                </Link>
                <Link 
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold transition-all duration-300 ease-in-out py-3 px-4 rounded-xl animate-in fade-in-0 slide-in-from-left-2 active:scale-95 border border-transparent hover:border-blue-100/50"
                  style={{ animationDelay: '200ms', animationDuration: '400ms', animationFillMode: 'both' }}
                >
                  About
                </Link>
                <Link 
                  to="/careers"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold transition-all duration-300 ease-in-out py-3 px-4 rounded-xl animate-in fade-in-0 slide-in-from-left-2 active:scale-95 border border-transparent hover:border-blue-100/50"
                  style={{ animationDelay: '250ms', animationDuration: '400ms', animationFillMode: 'both' }}
                >
                  Careers
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out animate-in fade-in-0 slide-in-from-left-2 active:scale-95 mt-2 relative overflow-hidden group"
                  style={{ animationDelay: '300ms', animationDuration: '400ms', animationFillMode: 'both' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
