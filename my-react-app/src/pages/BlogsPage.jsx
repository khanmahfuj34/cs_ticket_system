import React from 'react';

function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Best Practices for Customer Support Ticket Management',
      date: 'March 12, 2026',
      image: '📝',
      excerpt: 'Learn how to efficiently manage customer support tickets and improve response times.',
      content: 'Effective ticket management is crucial for maintaining customer satisfaction. Prioritize tickets based on urgency, respond promptly, and keep customers informed about progress.'
    },
    {
      id: 2,
      title: 'How to Reduce Ticket Resolution Time',
      date: 'March 8, 2026',
      image: '⚡',
      excerpt: 'Discover strategies to speed up your ticket resolution process.',
      content: 'Use categorization, assign tickets to appropriate team members, and use templates for common issues to significantly reduce resolution time.'
    },
    {
      id: 3,
      title: 'The Importance of Ticket Tracking',
      date: 'March 1, 2026',
      image: '📊',
      excerpt: 'Why tracking tickets is essential for business success.',
      content: 'Ticket tracking provides valuable insights into customer issues, helps identify trends, and allows you to measure team performance and customer satisfaction.'
    },
    {
      id: 4,
      title: 'Mobile-First Approach to Support',
      date: 'February 25, 2026',
      image: '📱',
      excerpt: 'Supporting customers on-the-go with mobile optimization.',
      content: 'Modern support systems must be mobile-friendly. Ensure your team can respond to tickets from anywhere, improving agility and customer satisfaction.'
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Blog</h1>
        <p className="text-gray-600 mb-8">Tips, insights, and updates about customer support and ticket management.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
              <div className="bg-gradient-to-r from-[#3752FD]/5 to-[#7C3AED]/5 p-6">
                <p className="text-4xl mb-4">{post.image}</p>
                <h2 className="text-xl font-bold text-[#0F172A] mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
              <div className="p-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">{post.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
