
import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  const routePath = link || "/solutions/medicare-reimbursement";
  
  return (
    <div className="feature-card">
      <div className="icon-container">
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={routePath} className="learn-more">Learn More →</Link>
      </div>
    </div>
  );
};

export default FeatureCard;
