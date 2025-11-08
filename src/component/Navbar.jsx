import { Link } from "react-router";
import useAuth from "../hook/useAuth";
import { IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { users, signOutUser } = useAuth();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194279.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-indigo-600">PawMart</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/pets" className="hover:text-indigo-600 transition">Pets & Supplies</Link>
        </div>

        {/* RIGHT: Auth / Avatar */}
        <div className="hidden lg:flex items-center gap-4">
          {users ? (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={users.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className="pb-3 border-b border-gray-200">
                  <li className="text-sm font-bold">{users.displayName}</li>
                  <li className="text-xs">{users.email}</li>
                </div>
                <li className="mt-3">
                  <Link><FaUser /> Profile</Link>
                </li>
                <li>
                  <a><FaGear /> Settings</a>
                </li>
                <li>
                  <button
                    onClick={signOutUser}
                    className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white w-full"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pets">Pets & Supplies</Link>
            </li>

            {users ? (
              <li tabIndex={0}>
                <a>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={users.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      alt="User"
                    />
                    {users.displayName}
                  </div>
                </a>
                <ul className="p-2">
                  <li><Link><FaUser /> Profile</Link></li>
                  <li><Link><FaGear /> Settings</Link></li>
                  <li>
                    <button
                      onClick={signOutUser}
                      className="btn btn-xs text-left bg-linear-gradient-to-r from-pink-500 to-red-500 text-white w-full"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
