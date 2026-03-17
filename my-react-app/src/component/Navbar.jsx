import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ onOpenModal }) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Menu items with icons and descriptions
  const menuItems = [
    { name: 'Home', icon: '🏠', desc: 'Dashboard', path: '/' },
    { name: 'FAQ', icon: '❓', desc: 'Help & Support', path: '/faq' },
    { name: 'Changelog', icon: '📋', desc: 'Updates', path: '/changelog' },
    { name: 'Blogs', icon: '📝', desc: 'Articles', path: '/blogs' },
    { name: 'Download', icon: '⬇️', desc: 'Get App', path: '/download' },
    { name: 'Contact', icon: '💬', desc: 'Get in Touch', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Premium Navbar */}
      <div className="sticky top-0 z-40 bg-white/95 border-b border-gray-200/50 shadow-sm backdrop-blur-sm">
        <div className="w-full md:w-11/12 mx-auto py-3 md:py-4 px-3 md:px-0 flex items-center justify-between">
          {/* Left Section - Logo & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setShowMenu(true)}
              className="md:hidden p-2 rounded-lg hover:bg-linear-to-br hover:from-blue-50 hover:to-purple-50 
                        transition duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#0F172A] group-hover:text-[#3752FD] transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Premium Logo */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#3752FD] to-[#7C3AED] 
                            flex items-center justify-center text-white font-bold text-sm
                            group-hover:shadow-lg transition duration-300 transform group-hover:scale-110">
                CS
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-extrabold text-[#0F172A]">CS-Ticket</span>
                <span className="text-xs font-semibold text-gray-500 -mt-1">System</span>
              </div>
            </Link>
          </div>

          {/* Center Section - Desktop Menu */}
          <div className="flex items-center gap-8 ml-auto">
            {/* Desktop Menu - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 font-medium rounded-lg transition duration-300 group relative ${
                    isActive(item.path)
                      ? 'text-[#3752FD] bg-linear-to-br from-blue-50 to-purple-50'
                      : 'text-gray-700 hover:text-[#3752FD] hover:bg-linear-to-br hover:from-blue-50 hover:to-purple-50'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#3752FD] to-[#7C3AED] transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Premium New Ticket Button */}
            <button 
              onClick={onOpenModal}
              className="relative group px-6 py-2.5 rounded-xl font-bold text-sm text-white
                        bg-linear-to-r from-[#3752FD] via-[#5B5EFF] to-[#7C3AED]
                        hover:from-[#2441f0] hover:via-[#4E51F0] hover:to-[#6D28D9]
                        shadow-lg hover:shadow-2xl transition-all duration-300
                        transform hover:scale-105 active:scale-95
                        border border-white/20 hover:border-white/40
                        overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 
                            transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="font-bold">New Ticket</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Visible on Small Devices */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          showMenu ? 'visible bg-black/40' : 'invisible bg-black/0'
        }`}
        onClick={() => setShowMenu(false)}
      >
        {/* Drawer Panel */}
        <div
          className={`h-full w-72 bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
            showMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="sticky top-0 bg-linear-to-r from-[#7C3AED] to-[#4F46E5] px-6 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Menu</h2>
              <p className="text-sm text-purple-100">Navigation</p>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition duration-200"
            >
              <svg
                className="w-6 h-6 text-white"
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
          </div>

          {/* Menu Items */}
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setShowMenu(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition duration-200 group ${
                  isActive(item.path)
                    ? 'bg-[#F5F7FF] text-[#3752FD] shadow-sm'
                    : 'text-gray-700 hover:bg-[#F5F7FF] hover:text-[#3752FD] hover:shadow-sm'
                }`}
              >
                {/* Icon */}
                <span className="text-2xl group-hover:scale-110 transition duration-200">
                  {item.icon}
                </span>
                {/* Label */}
                <div className="flex-1">
                  <p className="font-semibold text-[#0F172A]">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                {/* Arrow */}
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mx-4"></div>

          {/* New Ticket Button in Drawer */}
          <div className="px-4 py-6">
            <button
              onClick={() => {
                onOpenModal();
                setShowMenu(false);
              }}
              className="w-full relative group overflow-hidden px-4 py-3.5 rounded-xl font-bold text-white
                        bg-linear-to-r from-[#3752FD] via-[#5B5EFF] to-[#7C3AED]
                        hover:from-[#2441f0] hover:via-[#4E51F0] hover:to-[#6D28D9]
                        shadow-lg hover:shadow-xl transition-all duration-300
                        transform hover:scale-105 active:scale-95
                        border-2 border-white/20 hover:border-white/40
                        flex items-center justify-center gap-2"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 
                            transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="font-bold">Create Ticket</span>
              </div>
            </button>
          </div>

          {/* Footer Info */}
          <div className="px-4 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              CS-Ticket System © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;