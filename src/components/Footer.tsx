
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    solutions: [
      { name: "Medicare Reimbursement", href: "/solutions/medicare-reimbursement" },
      { name: "Care Coordination", href: "/solutions/care-coordination" },
      { name: "Healthcare Analytics", href: "/solutions/healthcare-analytics" },
      { name: "Risk Adjustment", href: "/solutions/risk-adjustment" },
      { name: "Remote Patient Monitoring", href: "/solutions/remote-patient-monitoring" },
      { name: "Chronic Care Management", href: "/solutions/chronic-care-management" }
    ],
    resources: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "White Papers", href: "/resources/white-papers" },
      { name: "Webinars", href: "/resources/webinars" },
      { name: "Medicare Guides", href: "/resources/medicare-guides" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/about/careers" },
      { name: "Press", href: "/about/press" },
      { name: "Contact", href: "/contact" },
    ]
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-6" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, index) => (
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
            <h3 className="text-xl font-bold mb-6 text-accent">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
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
            <h3 className="text-xl font-bold mb-6 text-accent">Company</h3>
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
            <h3 className="text-xl font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+14042369566" className="text-white/80 hover:text-white transition-colors">
                  (404)236-9566
                </a>
              </li>
              <li className="text-white/80">
                1345 wiley rd<br />
                Suite 111<br />
                Schaumburg, IL 60169
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Absolute Health Group. All rights reserved. | 
            <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
            <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
