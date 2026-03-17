import React from 'react';

function SearchSection({ searchQuery, setSearchQuery }) {
  // Function to clear the search input
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="mb-6">
      {/* Search Input Container with Icon */}
      <div className="relative group">
        {/* Search Icon - on the left side */}
        <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#3752FD] transition duration-300">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search tickets by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-200 
                     focus:outline-none focus:border-[#3752FD] focus:ring-2 focus:ring-blue-100
                     shadow-sm hover:shadow-md focus:shadow-lg transition-all duration-300
                     text-gray-700 placeholder-gray-400 font-medium bg-white
                     hover:border-gray-300"
        />

        {/* Clear Button - only show when search has text */}
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-4 top-3.5 text-gray-400 hover:text-red-500 transition duration-300 group hover:scale-110"
            title="Clear search"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Info Text */}
      {searchQuery && (
        <div className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50">
          <p className="text-xs font-medium text-gray-700">
            <span className="text-[#3752FD]">🔍 Search Active:</span> "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
