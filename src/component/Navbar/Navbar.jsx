import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Navmenu from "./Navmenu";
import AuthMenu from "./AuthMenu";
import ThemeToggle from "./ThemeToggle";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { users, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center  gap-2">
          <img 
            src="https://i.ibb.co.com/8LNS81gF/Lucid-Origin-A-professional-minimalist-logo-icon-for-a-modern-1.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            PawMart
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-gray-700 dark:text-gray-200">
          <Navmenu
            user={users}
            className="px-3 py-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          />
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <AuthMenu user={users} signOutUser={signOutUser} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <HiX size={28} className="text-gray-700 dark:text-gray-200" />
          ) : (
            <HiOutlineMenu size={28} className="text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4 animate-slide-down">
          <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 font-medium">
            <Navmenu
              user={users}
              className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition"
            />
          </ul>

          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <AuthMenu user={users} signOutUser={signOutUser} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
