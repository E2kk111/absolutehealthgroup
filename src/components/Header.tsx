
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  DollarSign, 
  Users, 
  BarChart3, 
  Shield, 
  Monitor, 
  Heart,
  BookOpen,
  FileText,
  FileBarChart,
  Video,
  BookMarked
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
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Timeout refs for delayed closing
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
      solutionsTimeoutRef.current = null;
    }
    setIsSolutionsHovered(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsHovered(false);
    }, 200); // Small delay to allow moving to dropdown content
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setIsResourcesHovered(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesHovered(false);
    }, 200); // Small delay to allow moving to dropdown content
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
      if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
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

  // Header is always fully opaque (no transparency)
  const alpha = 1;
  
  // Static blur for visual effect
  const blurAmount = 8;
  const showShadow = scrollY > 20;
  
  // Check if we're at the top of home page (HeroSection) - use white theme
  const isHomePage = location.pathname === '/';
  const isAtTopOfHero = isHomePage && scrollY < 100;

  const solutions = [
    { path: '/solutions/medicare-reimbursement', label: 'Medicare Reimbursement', icon: DollarSign },
    { path: '/solutions/care-coordination', label: 'Care Coordination', icon: Users },
    { path: '/solutions/healthcare-analytics', label: 'Healthcare Analytics', icon: BarChart3 },
    { path: '/solutions/risk-adjustment', label: 'Risk Adjustment', icon: Shield },
    { path: '/solutions/remote-patient-monitoring', label: 'Remote Patient Monitoring', icon: Monitor },
    { path: '/solutions/chronic-care-management', label: 'Chronic Care Management', icon: Heart },
  ];

  const resources = [
    { path: '/resources/blog', label: 'Blog', icon: BookOpen },
    { path: '/resources/case-studies', label: 'Case Studies', icon: FileText },
    { path: '/resources/white-papers', label: 'White Papers', icon: FileBarChart },
    { path: '/resources/webinars', label: 'Webinars', icon: Video },
    { path: '/resources/medicare-guides', label: 'Medicare Guides', icon: BookMarked },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showShadow ? 'shadow-lg border-b border-white/20' : ''
      }`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${alpha})`,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
    >
      <div className="container">
        <nav className="flex justify-between items-center py-4 md:py-5">
          <div className="logo text-base md:text-2xl font-bold ml-2 mr-2">
            <Link to="/" onClick={scrollToTop} className="group flex items-center gap-1">
              <img src="https://cdn-icons-png.flaticon.com/128/4807/4807695.png" alt="Absolute Health Group" className="w-5 h-5 md:w-6 md:h-6" />
              <span className='text-secondary'>Absolute </span>
              <span className='text-primary'>HealthGroup</span>
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
          <div className="hidden md:flex ml-4 mr-4 justify-center items-center gap-4">
            <div className="nav-links flex gap-4">
              <div
                className="relative"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <DropdownMenu open={isSolutionsHovered} onOpenChange={setIsSolutionsHovered} modal={false}>
                  <DropdownMenuTrigger className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-0.5 outline-none hover:scale-105">
                    Solutions
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsHovered ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border-white/20 shadow-xl"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    {solutions.map((solution) => {
                      const IconComponent = solution.icon;
                      return (
                        <DropdownMenuItem key={solution.path} asChild>
                          <Link 
                            to={solution.path}
                            onClick={scrollToTop}
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 flex items-center gap-2 h-10 px-2 whitespace-nowrap"
                          >
                            <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="truncate">{solution.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div
                className="relative"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <DropdownMenu open={isResourcesHovered} onOpenChange={setIsResourcesHovered} modal={false}>
                  <DropdownMenuTrigger className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 flex items-center gap-1 outline-none hover:scale-105">
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesHovered ? 'rotate-180' : ''}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    className="w-64 bg-white/95 backdrop-blur-xl border-white/20 shadow-xl"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                  >
                    {resources.map((resource) => {
                      const IconComponent = resource.icon;
                      return (
                        <DropdownMenuItem key={resource.path} asChild>
                          <Link 
                            to={resource.path}
                            onClick={scrollToTop}
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 flex items-center gap-2 h-10 px-2 whitespace-nowrap"
                          >
                            <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="truncate">{resource.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link 
                to="/about"
                onClick={scrollToTop}
                className="text-black hover:text-primary/80 md:text-xs sm:text-sm lg:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                About Us
              </Link>
            </div>
            <Link 
              to="/contact" 
              onClick={scrollToTop} 
              className="cta-button bg-primary text-white hover:bg-gray-100 md:text-xs sm:text-sm lg:text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="absolute top-full left-0 right-0 shadow-xl border-b border-white/20 md:hidden animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${Math.max(alpha, 0.95)})`,
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
              }}
            >
              <div className="flex flex-col gap-4 p-6 pb-8">
                <div>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 py-2 flex items-center justify-between w-full rounded-lg px-2"
                  >
                    Solutions
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 animate-in duration-300">
                      {solutions.map((solution) => {
                        const IconComponent = solution.icon;
                        return (
                          <Link
                            key={solution.path}
                            to={solution.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 py-2 px-2 rounded-lg flex items-center gap-2 h-10 whitespace-nowrap"
                            onClick={() => {
                              setIsMenuOpen(false);
                              scrollToTop();
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="truncate">{solution.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 py-2 flex items-center justify-between w-full rounded-lg px-2"
                  >
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isResourcesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 animate-in duration-300">
                      {resources.map((resource) => {
                        const IconComponent = resource.icon;
                        return (
                          <Link
                            key={resource.path}
                            to={resource.path}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 py-2 px-2 rounded-lg flex items-center gap-2 h-10 whitespace-nowrap"
                            onClick={() => {
                              setIsMenuOpen(false);
                              scrollToTop();
                            }}
                          >
                            <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="truncate">{resource.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                <Link 
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all duration-300 py-2 px-2 rounded-lg"
                >
                  About Us
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="cta-button bg-primary text-white hover:bg-gray-100 text-center mt-2"
                >
                  Contact Us
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
