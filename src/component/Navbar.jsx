import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { IoLogOut } from "react-icons/io5";
import { FaUser, FaPlus, FaClipboardList } from "react-icons/fa6";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { users, signOutUser,loading } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pets">Pets & Supplies</Link>
      </li>
      {users && (
        <>
          <li>
            <Link to="/add-listing"><FaPlus className="inline mr-1" /> Add Listing</Link>
          </li>
          <li>
            <Link to="/my-listings"><FaClipboardList className="inline mr-1" /> My Listings</Link>
          </li>
          <li>
            <Link to="/my-orders">My Orders</Link>
          </li>
        </>
      )}
    </>
  );

  const authItems = !users ? (
    <>
      <Link to="/login" className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">Login</Link>
      <Link to="/register" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition">Register</Link>
    </>
  ) : (
    <div className="dropdown dropdown-end z-50">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-9 border-2 border-gray-300 rounded-full">
          <img src={users.photoURL} alt="User Avatar" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
        <li className="text-sm font-bold">{users.displayName}</li>
        <li className="text-xs">{users.email}</li>
        <li className="mt-3">
          <button onClick={signOutUser} className="btn btn-xs bg-gradient-to-r from-pink-500 to-red-500 text-white w-full">
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194279.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-indigo-600">PawMart</h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium text-gray-700">
          {menuItems}
        </ul>

        {/* RIGHT: Theme + Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} checked={theme === "dark"} />
            {/* Sun */}
            <svg className="swap-on h-6 w-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4a1 1 0 011-1h0a1 1 0 110 2 1 1 0 01-1-1zM5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 00-1.41-1.41zM12 18a1 1 0 011 1h0a1 1 0 11-2 0 1 1 0 011-1zm7-10a1 1 0 01.92.62 1 1 0 11-1.84.76A1 1 0 0119 8zm-14 0a1 1 0 01.92.62 1 1 0 11-1.84.76A1 1 0 015 8zm11.95 9.36a1 1 0 011.41 0l.71.71a1 1 0 11-1.41 1.41L16.95 18a1 1 0 010-1.41z" />
            </svg>
            {/* Moon */}
            <svg className="swap-off h-6 w-6 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </label>

          {authItems}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden btn btn-ghost" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 border-t border-gray-200">
          <ul className="flex flex-col gap-2 text-gray-700">
            {menuItems}
          </ul>
          <div className="flex items-center gap-3 mt-3">
            <label className="swap swap-rotate cursor-pointer">
              <input type="checkbox" onChange={(e) => handleTheme(e.target.checked)} checked={theme === "dark"} />
              <svg className="swap-on h-5 w-5 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 4a1 1 0 011-1h0a1 1 0 110 2 1 1 0 01-1-1z" />
              </svg>
              <svg className="swap-off h-5 w-5 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </label>
            {!users ? (
              <>
                <Link to="/login" className="px-3 py-1 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">Login</Link>
                <Link to="/register" className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition">Register</Link>
              </>
            ) : (
              <button onClick={signOutUser} className="px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
