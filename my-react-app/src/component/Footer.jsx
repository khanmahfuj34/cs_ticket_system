import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold">
            CS<span className="text-gray-400">-Ticket System</span>
          </h2>
          <p className="text-sm text-gray-400 mt-4 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>

      <div className="w-11/12 mx-auto border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;