
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
      { name: "Contact", href: "/#contact" },
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
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors">
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
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors">
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
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors">
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
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                  123-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@transformativecare.com" className="text-white/80 hover:text-white transition-colors">
                  info@transformativecare.com
                </a>
              </li>
              <li className="text-white/80">
                123 Healthcare Avenue<br />
                Suite 200<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} TransformativeCare. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
