
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-5">
          <div className="logo text-2xl font-bold">
            <Link to="/">
              Transformative<span className="text-secondary">Care</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="nav-links flex gap-6">
              <Link to="/solutions/medicare-reimbursement" className="text-dark font-medium hover:text-primary transition-colors">Solutions</Link>
              <Link to="/resources" className="text-dark font-medium hover:text-primary transition-colors">Resources</Link>
              <Link to="/about" className="text-dark font-medium hover:text-primary transition-colors">About Us</Link>
              <Link to="/#contact" className="text-dark font-medium hover:text-primary transition-colors">Contact</Link>
            </div>
            <Link to="/#demo" className="cta-button">Request Demo</Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
              <div className="flex flex-col gap-4 p-6">
                <Link to="/solutions/medicare-reimbursement" className="text-dark font-medium hover:text-primary transition-colors py-2">Solutions</Link>
                <Link to="/resources" className="text-dark font-medium hover:text-primary transition-colors py-2">Resources</Link>
                <Link to="/about" className="text-dark font-medium hover:text-primary transition-colors py-2">About Us</Link>
                <Link to="/#contact" className="text-dark font-medium hover:text-primary transition-colors py-2">Contact</Link>
                <Link to="/#demo" className="cta-button text-center mt-2">Request Demo</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
