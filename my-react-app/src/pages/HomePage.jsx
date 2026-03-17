import React from 'react';

function HomePage() {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Welcome to CS-Ticket System</h1>
        <p className="text-lg text-gray-600 mb-8">
          A modern customer support ticket management system designed to help you efficiently handle and track customer issues.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#3752FD] mb-3">📋 Easy Ticket Management</h2>
            <p className="text-gray-600">Create, track, and manage customer support tickets in one centralized platform.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#10B981] mb-3">✅ Priority Tracking</h2>
            <p className="text-gray-600">Organize tickets by priority levels and ensure critical issues are handled first.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#F59E0B] mb-3">🔍 Smart Search</h2>
            <p className="text-gray-600">Quickly find tickets using our powerful search functionality.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#8B5CF6] mb-3">📊 Real-time Updates</h2>
            <p className="text-gray-600">Stay updated with instant notifications and status changes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
