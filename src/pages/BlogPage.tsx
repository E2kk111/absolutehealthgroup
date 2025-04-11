
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Value-Based Care Models Are Transforming Healthcare",
      excerpt: "An analysis of the shift from fee-for-service to value-based care and what it means for providers.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      author: "Dr. Sarah Johnson",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Value-Based Care"
    },
    {
      id: 2,
      title: "5 Ways to Optimize Your Remote Patient Monitoring Program",
      excerpt: "Best practices for implementing and scaling remote patient monitoring to improve outcomes and maximize reimbursement.",
      imageUrl: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=800",
      author: "Mark Williams",
      date: "March 25, 2025",
      readTime: "6 min read",
      category: "Remote Patient Monitoring"
    },
    {
      id: 3,
      title: "Understanding Medicare's 2025 Chronic Care Management Updates",
      excerpt: "A breakdown of the latest changes to Medicare's CCM program and how they impact your practice.",
      imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800",
      author: "Jennifer Lee, RN",
      date: "March 18, 2025",
      readTime: "10 min read",
      category: "Medicare Updates"
    },
    {
      id: 4,
      title: "The Role of AI in Healthcare Risk Adjustment",
      excerpt: "How artificial intelligence is improving accuracy and efficiency in risk adjustment processes.",
      imageUrl: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800",
      author: "Dr. Michael Chen",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 5,
      title: "Preparing Your Practice for MIPS 2026",
      excerpt: "Strategic planning tips to help your practice succeed in the Merit-based Incentive Payment System next year.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
      author: "Rebecca Torres",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "Compliance"
    },
    {
      id: 6,
      title: "Building Effective Care Coordination Workflows",
      excerpt: "Practical strategies for improving care transitions and reducing readmissions through better coordination.",
      imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800",
      author: "Thomas Wright",
      date: "February 24, 2025",
      readTime: "5 min read",
      category: "Care Coordination"
    },
  ];

  const categories = [
    "All Posts",
    "Value-Based Care",
    "Medicare Updates",
    "Technology",
    "Care Coordination",
    "Remote Patient Monitoring",
    "Compliance",
    "Industry News"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-light">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Blog</h1>
              <p className="text-lg text-gray-700">
                Insights and expertise on healthcare technology, Medicare reimbursement, and practice optimization
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-secondary mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User size={16} className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar size={16} className="mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link to={`/resources/blog/${post.id}`} className="text-primary font-semibold">
                      Read Full Article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-light transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on healthcare technology and Medicare reimbursement delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md text-dark"
              />
              <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-r-md font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
