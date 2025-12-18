
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  const routePath = link || "/clinic/medicare-reimbursement";
  
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group p-8 h-full flex flex-col">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">{description}</p>
        <Link 
          to={routePath} 
          onClick={scrollToTop} 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-all duration-200 group-hover:gap-3"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
