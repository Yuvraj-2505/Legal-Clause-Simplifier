import React, { useState } from 'react';
import LegalCategories from '../sections/LegalCategories';

const LawSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const legalTopics = [
    {
      id: 1,
      title: "Constitutional Rights",
      description: "Understanding your fundamental constitutional rights and freedoms.",
      category: "Constitutional Law",
      difficulty: "Beginner",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Employment Discrimination",
      description: "Know your rights against workplace discrimination and harassment.",
      category: "Employment Law",
      difficulty: "Intermediate",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Consumer Protection Laws",
      description: "Protect yourself from unfair business practices and fraud.",
      category: "Consumer Law",
      difficulty: "Beginner",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Rental Rights and Responsibilities",
      description: "Understanding tenant and landlord rights in rental agreements.",
      category: "Property Law",
      difficulty: "Beginner",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Privacy and Data Protection",
      description: "Your rights regarding personal data and online privacy.",
      category: "Privacy Law",
      difficulty: "Intermediate",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Family Law Basics",
      description: "Essential information about divorce, custody, and family matters.",
      category: "Family Law",
      difficulty: "Intermediate",
      readTime: "12 min read"
    }
  ];

  const filteredTopics = legalTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Legal Rights <span className="text-blue-600">Knowledge Center</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive legal information to help you understand your rights and navigate the legal system with confidence.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search legal topics, terms, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Legal Topics Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Legal Topics & Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of legal articles and guides to better understand your rights.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {topic.category}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {topic.readTime}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTopics.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse our categories below.</p>
            </div>
          )}
        </div>
      </div>

      {/* Legal Categories Section */}
      <LegalCategories />

      {/* Additional Resources Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access helpful tools and resources to better understand your legal rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Document Analyzer</h3>
              <p className="text-gray-600 mb-4">Upload and analyze your legal documents with our AI-powered tool.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Try Now →</button>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Q&A Forum</h3>
              <p className="text-gray-600 mb-4">Ask questions and get answers from legal professionals and community members.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Join Discussion →</button>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Glossary</h3>
              <p className="text-gray-600 mb-4">Comprehensive dictionary of legal terms and definitions explained in simple language.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Browse Terms →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Personalized Legal Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            While our resources provide general information, consider consulting with a qualified attorney for specific legal matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Find Legal Help
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawSection;
