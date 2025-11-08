import { Link } from "react-router";

const Navbar = () => {
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

        {/* MIDDLE: Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/pets" className="hover:text-indigo-600 transition">
            Pets & Supplies
          </Link>
        </div>

        {/* RIGHT: Auth Buttons */}
        <div className="flex items-center gap-4">
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
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
