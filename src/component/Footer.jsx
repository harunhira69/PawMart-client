import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold tracking-tight flex items-center">
            <span className="bg-white text-indigo-700 px-2 py-1 rounded-lg mr-2">🐾</span>
            PawMart
          </h1>
          <p className="text-gray-200">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold border-b border-indigo-400 pb-2">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-end md:items-end mt-6 md:mt-0">
          <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} PawMart. All rights reserved.</p>
          <p className="text-gray-400 text-xs mt-1">Made with ❤️ for pet lovers</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-indigo-800 text-gray-300 text-center text-sm py-3 md:hidden">
        &copy; {new Date().getFullYear()} PawMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
