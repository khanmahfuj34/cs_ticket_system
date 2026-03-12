import React from 'react';

function Navbar() {
  return (
    <div className="w-11/12 mx-auto py-6 flex items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <h1 className="text-xl font-extrabold text-[#0F172A]">CS-</h1>
          <p className="text-xl font-extrabold text-gray-500">Ticket System</p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
          <a className="text-gray-600 font-medium cursor-pointer">Home</a>
          <a className="text-gray-600 font-medium cursor-pointer">FAQ</a>
          <a className="text-gray-600 font-medium cursor-pointer">Changelog</a>
          <a className="text-gray-600 font-medium cursor-pointer">Blogs</a>
          <a className="text-gray-600 font-medium cursor-pointer">Download</a>
          <a className="text-gray-600 font-medium cursor-pointer">Contact</a>
        </div>

        <button className="btn rounded-xl bg-[#3752FD] hover:bg-[#2441f0] text-white border-none shadow-none">
          New Ticket
        </button>
      </div>
    </div>
  );
}

export default Navbar;