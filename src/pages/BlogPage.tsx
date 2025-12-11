import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Mail, ArrowRight, ChevronRight, Search, Filter, Check, ChevronDown } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visiblePosts, setVisiblePosts] = useState<number>(6);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);

  const blogPosts = [
    {
      id: 1,
      title: "How Value-Based Care Models Are Transforming Healthcare",
      excerpt: "An analysis of the shift from fee-for-service to value-based care and what it means for providers.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      author: "Dr. Sarah Johnson",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Value-Based Care",
      tags: ["VBC", "Healthcare Transformation", "Provider Insights"]
    },
    {
      id: 2,
      title: "5 Ways to Optimize Your Remote Patient Monitoring Program",
      excerpt: "Best practices for implementing and scaling remote patient monitoring to improve outcomes and maximize reimbursement.",
      imageUrl: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=800",
      author: "Mark Williams",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
      date: "March 25, 2025",
      readTime: "6 min read",
      category: "Remote Patient Monitoring",
      tags: ["RPM", "Best Practices", "Implementation"]
    },
    {
      id: 3,
      title: "Understanding Medicare's 2025 Chronic Care Management Updates",
      excerpt: "A breakdown of the latest changes to Medicare's CCM program and how they impact your practice.",
      imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800",
      author: "Jennifer Lee, RN",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
      date: "March 18, 2025",
      readTime: "10 min read",
      category: "Medicare Updates",
      tags: ["Medicare", "CCM", "Policy Updates"]
    },
    {
      id: 4,
      title: "The Role of AI in Healthcare Risk Adjustment",
      excerpt: "How artificial intelligence is improving accuracy and efficiency in risk adjustment processes.",
      imageUrl: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800",
      author: "Dr. Michael Chen",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Technology",
      tags: ["AI", "Risk Adjustment", "Technology"]
    },
    {
      id: 5,
      title: "Preparing Your Practice for MIPS 2026",
      excerpt: "Strategic planning tips to help your practice succeed in the Merit-based Incentive Payment System next year.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800",
      author: "Rebecca Torres",
      authorAvatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=100&h=100",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "Compliance",
      tags: ["MIPS", "Compliance", "Strategic Planning"]
    },
    {
      id: 6,
      title: "Building Effective Care Coordination Workflows",
      excerpt: "Practical strategies for improving care transitions and reducing readmissions through better coordination.",
      imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800",
      author: "Thomas Wright",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      date: "February 24, 2025",
      readTime: "5 min read",
      category: "Care Coordination",
      tags: ["Care Coordination", "Workflows", "Patient Outcomes"]
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "value-based-care", name: "Value-Based Care", count: blogPosts.filter(post => post.category === "Value-Based Care").length },
    { id: "remote-patient-monitoring", name: "Remote Patient Monitoring", count: blogPosts.filter(post => post.category === "Remote Patient Monitoring").length },
    { id: "medicare-updates", name: "Medicare Updates", count: blogPosts.filter(post => post.category === "Medicare Updates").length },
    { id: "technology", name: "Technology", count: blogPosts.filter(post => post.category === "Technology").length },
    { id: "compliance", name: "Compliance", count: blogPosts.filter(post => post.category === "Compliance").length },
    { id: "care-coordination", name: "Care Coordination", count: blogPosts.filter(post => post.category === "Care Coordination").length },
    { id: "industry-news", name: "Industry News", count: blogPosts.filter(post => post.category === "Industry News").length }
  ];

  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get visible posts for pagination
  const postsToDisplay = filteredPosts.slice(0, visiblePosts);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsCategoryDropdownOpen(false);
    // Reset visible posts when changing category
    setVisiblePosts(6);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Insights & Expertise
              </h1>
              <p className="text-xl opacity-95 mb-8 animate-slide-up">
                Stay ahead with the latest on healthcare technology, Medicare reimbursement, and practice optimization
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Categories Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  {/* Desktop Category List */}
                  <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-dark">Categories</h3>
                      <Filter size={18} className="text-gray-500" />
                    </div>
                    
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.name)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                            selectedCategory === category.name
                              ? "bg-primary/10 text-primary border-l-4 border-primary"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {selectedCategory === category.name && (
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            )}
                            <span className={`font-semibold ${
                              selectedCategory === category.name ? "text-primary" : "text-gray-700"
                            }`}>
                              {category.name}
                            </span>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            selectedCategory === category.name
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}>
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Popular Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Healthcare", "Medicare", "Technology", "VBC", "RPM", "CCM", "Compliance", "AI"].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-full transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Category Dropdown */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                      className="w-full flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center">
                        <Filter size={18} className="mr-3 text-gray-500" />
                        <span className="font-medium text-gray-700">
                          {selectedCategory === "All Posts" ? "All Categories" : selectedCategory}
                        </span>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-500 transition-transform ${
                          isCategoryDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {isCategoryDropdownOpen && (
                      <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                        <div className="p-2">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => handleCategorySelect(category.name)}
                              className={`w-full flex items-center justify-between p-3 rounded-lg ${
                                selectedCategory === category.name
                                  ? "bg-primary/10 text-primary"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center">
                                {selectedCategory === category.name && (
                                  <Check size={16} className="mr-3 text-primary" />
                                )}
                                <span>{category.name}</span>
                              </div>
                              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                {category.count}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Blog Posts Content */}
              <div className="lg:w-3/4">
                {/* Header with results info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-dark mb-2">
                      {selectedCategory === "All Posts" ? "Latest Articles" : selectedCategory}
                    </h2>
                    <p className="text-gray-600">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                      {searchQuery && ` for "${searchQuery}"`}
                    </p>
                  </div>
                  
                  {/* <div className="mt-4 md:mt-0">
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategorySelect(e.target.value)}
                      className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div> */}
                </div>
                
                {/* Blog Posts Grid */}
                {postsToDisplay.length > 0 ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      {postsToDisplay.map((post) => (
                        <Card 
                          key={post.id} 
                          className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200/50"
                        >
                          <Link to={`/resources/blog/${post.id}`} className="block h-full">
                            <div className="flex flex-col h-full">
                              <div className="overflow-hidden relative">
                                <div className="aspect-video overflow-hidden">
                                  <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                  />
                                </div>
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                                    {post.category}
                                  </span>
                                </div>
                              </div>
                              
                              <CardContent className="p-6 flex-grow">
                                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                  {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                  {post.excerpt}
                                </p>
                                
                                {/* Author Info */}
                                <div className="flex items-center mb-4">
                                  <img 
                                    src={post.authorAvatar} 
                                    alt={post.author}
                                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-gray-100"
                                  />
                                  <div>
                                    <p className="font-medium text-dark text-sm">{post.author}</p>
                                    <div className="flex items-center text-xs text-gray-500">
                                      <Calendar size={12} className="mr-1" />
                                      <span className="mr-3">{post.date}</span>
                                      <Clock size={12} className="mr-1" />
                                      <span>{post.readTime}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                  {post.tags.map((tag, index) => (
                                    <span 
                                      key={index}
                                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </CardContent>
                              
                              <div className="px-6 pb-6">
                                <div className="flex items-center text-primary font-semibold text-sm">
                                  Read Full Article
                                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Load More Button */}
                    {visiblePosts < filteredPosts.length && (
                      <div className="mt-12 text-center">
                        <button
                          onClick={handleLoadMore}
                          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center mx-auto"
                        >
                          Load More Articles
                          <ArrowRight size={18} className="ml-2" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                    <div className="text-gray-400 mb-4">
                      <Search size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                    <p className="text-gray-500 mb-6">
                      {searchQuery 
                        ? `No results found for "${searchQuery}"`
                        : `No articles found in "${selectedCategory}"`
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("All Posts");
                        setSearchQuery("");
                      }}
                      className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      View All Articles
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Join thousands of healthcare professionals who receive our weekly newsletter with the latest insights, updates, and best practices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Weekly industry insights
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Medicare & compliance updates
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      Exclusive webinar invitations
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2">
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                        I agree to receive emails and accept the privacy policy
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                    >
                      Subscribe to Newsletter
                      <Mail size={18} className="ml-2" />
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      No spam. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;