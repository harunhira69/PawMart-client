// Footer.jsx
import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = e=>{
    e.preventDefault();
    const name = e.target.email.value;
    console.log({name})
    toast.success('Congratulation')
  }
  return (
    <footer className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white mt-16">
      <div className=" px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold tracking-tight flex items-center">
            <span className="bg-white text-indigo-700 px-3 py-1 rounded-lg mr-2">🐾</span>
            PawMart
          </h1>
          <p className="text-gray-100">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-300">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold border-b border-white pb-2">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-200 transition-colors duration-300">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-200 transition-colors duration-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Copyright */}
        <div className="flex flex-col justify-end md:items-end mt-6 md:mt-0 space-y-2">
          <p className="text-gray-200 text-sm">&copy; {new Date().getFullYear()} PawMart. All rights reserved.</p>
          <p className="text-gray-300 text-xs">Made with ❤️ for pet lovers</p>
          {/* Optional Newsletter */}
        <div className="mt-3 flex">
           <form onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="px-4 py-2 rounded-l-xl border-none focus:outline-none w-48
                         bg-white/20 placeholder-gray-200 text-white focus:bg-white/30"
            />
            <button className="px-4 py-2 bg-linear-to-r from-yellow-400 via-pink-500 to-purple-600 
                               rounded-r-xl text-white font-semibold hover:scale-105 transform transition-all duration-300">
              Subscribe
            </button>
           </form>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="bg-indigo-800 text-gray-200 text-center text-sm py-3 md:hidden">
        &copy; {new Date().getFullYear()} PawMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
