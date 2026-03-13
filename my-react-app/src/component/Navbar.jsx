import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-11/12 mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMenu(true)}
            className="md:hidden text-2xl font-bold text-[#0F172A]"
          >
            ☰
          </button>

          <div className="flex items-center">
            <h1 className="text-xl font-extrabold text-[#0F172A]">CS-</h1>
            <p className="text-xl font-extrabold text-gray-500">Ticket System</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ml-auto">
          <div className="hidden md:flex items-center gap-6">
            <a className="text-gray-600 font-medium cursor-pointer">Home</a>
            <a className="text-gray-600 font-medium cursor-pointer">FAQ</a>
            <a className="text-gray-600 font-medium cursor-pointer">Changelog</a>
            <a className="text-gray-600 font-medium cursor-pointer">Blogs</a>
            <a className="text-gray-600 font-medium cursor-pointer">Download</a>
            <a className="text-gray-600 font-medium cursor-pointer">Contact</a>
          </div>

         <button className="flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-sm">
  <i className="fa-solid fa-plus text-xs"></i>
  New Ticket
</button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          showMenu ? 'visible bg-black/30' : 'invisible bg-black/0'
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div
          className={`h-full w-64 bg-white shadow-xl p-5 transition-transform duration-300 ${
            showMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#0F172A]">Menu</h2>
            <button
              onClick={() => setShowMenu(false)}
              className="text-2xl text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <a className="text-gray-700 font-medium cursor-pointer">Home</a>
            <a className="text-gray-700 font-medium cursor-pointer">FAQ</a>
            <a className="text-gray-700 font-medium cursor-pointer">Changelog</a>
            <a className="text-gray-700 font-medium cursor-pointer">Blogs</a>
            <a className="text-gray-700 font-medium cursor-pointer">Download</a>
            <a className="text-gray-700 font-medium cursor-pointer">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;