
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
  Mail
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
    { path: '/technology/aion-clinical-intelligence', label: 'AION Clinical Intelligence', icon: Brain },
    { path: '/technology/aion-navigator', label: 'AION Navigator', icon: Network },
    { path: '/technology/aion-finance', label: 'AION Finance (RegFi)', icon: DollarSign },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        showShadow ? 'shadow-xl border-b border-white/20' : ''
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center py-4 md:py-5">
          <div className="logo text-base md:text-2xl font-bold ml-2 mr-2">
            <Link to="/" onClick={scrollToTop} className="group flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="/logo2.png" 
                alt="Absolute Health Group" 
                className="w-24 h-24 md:w-24 md:h-24 object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isAtTopOfHero ? 'hover:bg-primary/10' : 'hover:bg-primary/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={20} className={isAtTopOfHero ? 'text-primary' : 'text-primary'} />
            ) : (
              <Menu size={20} className={isAtTopOfHero ? 'text-primary' : 'text-primary'} />
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
                  <DropdownMenuTrigger className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-0.5 outline-none hover:scale-105">
                    Clinic
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isClinicHovered ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border-white/20 shadow-xl transition-all duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[state=open]:duration-300 data-[state=closed]:duration-200"
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
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 ease-in-out flex items-center gap-2 h-10 px-2 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span className="truncate">{item.label}</span>
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
                  <DropdownMenuTrigger className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-1 outline-none hover:scale-105">
                    Technology
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isTechnologyHovered ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border-white/20 shadow-xl transition-all duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[state=open]:duration-300 data-[state=closed]:duration-200"
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
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 ease-in-out flex items-center gap-2 h-10 px-2 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2"
                            style={{
                              animationDelay: `${index * 50}ms`,
                              animationDuration: '300ms',
                              animationFillMode: 'both'
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <span className="truncate">{item.label}</span>
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
                className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Podcast
              </Link>
              <Link 
                to="/about"
                onClick={scrollToTop}
                className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link 
                to="/careers"
                onClick={scrollToTop}
                className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Careers
              </Link>
            </div>
            <Link 
              to="/contact" 
              onClick={scrollToTop} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 md:text-xs sm:text-sm lg:text-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-white/20 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 fade-in-0 duration-300 ease-out"
            >
              <div className="flex flex-col gap-4 p-6 pb-8">
                <div className="animate-in fade-in-0 slide-in-from-left-2" style={{ animationDelay: '50ms', animationDuration: '300ms', animationFillMode: 'both' }}>
                  <button
                    onClick={() => setIsClinicOpen(!isClinicOpen)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 ease-in-out py-2 flex items-center justify-between w-full rounded-lg px-2 active:scale-95"
                  >
                    Clinic
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isClinicOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isClinicOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden animate-in slide-in-from-top-2 fade-in-0 duration-300 ease-out">
                      {clinic.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out py-2 px-2 rounded-lg flex items-center gap-2 h-10 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2 active:scale-95"
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
                            <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                            <span className="truncate">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="animate-in fade-in-0 slide-in-from-left-2" style={{ animationDelay: '100ms', animationDuration: '300ms', animationFillMode: 'both' }}>
                  <button
                    onClick={() => setIsTechnologyOpen(!isTechnologyOpen)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 ease-in-out py-2 flex items-center justify-between w-full rounded-lg px-2 active:scale-95"
                  >
                    Technology
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isTechnologyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isTechnologyOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden animate-in slide-in-from-top-2 fade-in-0 duration-300 ease-out">
                      {technology.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out py-2 px-2 rounded-lg flex items-center gap-2 h-10 whitespace-nowrap animate-in fade-in-0 slide-in-from-left-2 active:scale-95"
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
                            <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                            <span className="truncate">{item.label}</span>
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
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 ease-in-out py-2 px-2 rounded-lg animate-in fade-in-0 slide-in-from-left-2 active:scale-95"
                  style={{ animationDelay: '150ms', animationDuration: '300ms', animationFillMode: 'both' }}
                >
                  Podcast
                </Link>
                <Link 
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 ease-in-out py-2 px-2 rounded-lg animate-in fade-in-0 slide-in-from-left-2 active:scale-95"
                  style={{ animationDelay: '200ms', animationDuration: '300ms', animationFillMode: 'both' }}
                >
                  About
                </Link>
                <Link 
                  to="/careers"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 ease-in-out py-2 px-2 rounded-lg animate-in fade-in-0 slide-in-from-left-2 active:scale-95"
                  style={{ animationDelay: '250ms', animationDuration: '300ms', animationFillMode: 'both' }}
                >
                  Careers
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out animate-in fade-in-0 slide-in-from-left-2 active:scale-95 mt-2"
                  style={{ animationDelay: '300ms', animationDuration: '300ms', animationFillMode: 'both' }}
                >
                  Contact
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
