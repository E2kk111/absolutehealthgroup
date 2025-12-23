
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    clinic: [
      { name: "Hybrid Clinics", href: "/clinic/hybrid-clinics" },
      { name: "Mobile Clinics", href: "/clinic/mobile-clinics" },
      { name: "Care-At-Home", href: "/clinic/care-at-home" },
      { name: "Care Navigation", href: "/clinic/care-navigation" }
    ],
    technology: [
      { name: "AptusCore™ Health OS", href: "/technology" },
      { name: "Solutions", href: "/technology/our-solutions" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Podcast", href: "/podcast" },
      { name: "Contact", href: "/contact" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clinic</h3>
            <ul className="space-y-4">
              {footerLinks.clinic.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology</h3>
            <ul className="space-y-4">
              {footerLinks.technology.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    onClick={scrollToTop}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14042369566" className="text-white/80 hover:text-white transition-colors">
                  (404)236-9566
                </a>
              </li>
              <li className="text-white/80">
                11680 Great Oaks Way Alpharetta,<br />
                GA 30022<br />
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Absolute Health Group. All rights reserved. | 
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" onClick={scrollToTop} className="hover:text-blue-400 transition-colors ml-1">Terms of Service</Link>
              <br className="md:hidden" />
              <span className="md:ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Powered by AptusCore™</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
