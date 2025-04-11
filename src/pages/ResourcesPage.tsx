
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, BookMarked, FileBarChart, FileSpreadsheet } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Blog",
      description: "Latest insights, trends, and updates in healthcare technology and Medicare reimbursement.",
      link: "/resources/blog"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Case Studies",
      description: "Real-world success stories of healthcare organizations using our solutions.",
      link: "/resources/case-studies"
    },
    {
      icon: <FileBarChart className="w-12 h-12 text-primary" />,
      title: "White Papers",
      description: "In-depth research and analysis on key healthcare industry challenges.",
      link: "/resources/white-papers"
    },
    {
      icon: <Video className="w-12 h-12 text-primary" />,
      title: "Webinars",
      description: "Educational sessions and discussions with industry experts.",
      link: "/resources/webinars"
    },
    {
      icon: <BookMarked className="w-12 h-12 text-primary" />,
      title: "Medicare Guides",
      description: "Comprehensive guides to help you navigate Medicare reimbursement.",
      link: "/resources/medicare-guides"
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-primary" />,
      title: "Tools & Calculators",
      description: "Interactive tools to help you optimize your healthcare practice.",
      link: "/resources/tools"
    }
  ];

  const featuredResources = [
    {
      type: "Blog",
      title: "How Value-Based Care Models Are Transforming Healthcare",
      description: "An analysis of the shift from fee-for-service to value-based care and what it means for providers.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500"
    },
    {
      type: "Case Study",
      title: "Primary Care Group Increases Medicare Revenue by 23%",
      description: "See how a 50-physician primary care group optimized their chronic care management program.",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500"
    },
    {
      type: "White Paper",
      title: "The Future of Remote Patient Monitoring",
      description: "Research on emerging technologies and reimbursement models in remote care delivery.",
      imageUrl: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Resources</h1>
              <p className="text-lg text-gray-700">
                Knowledge and insights to help you navigate the evolving healthcare landscape
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Browse By Category</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <Link to={category.link} key={index} className="block">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-6">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <span className="text-primary font-semibold">Explore →</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-light">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-secondary mb-2">{resource.type}</div>
                    <h3 className="text-lg font-bold text-primary mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Link to={`/resources/${resource.type.toLowerCase().replace(' ', '-')}`} className="text-primary font-semibold">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
