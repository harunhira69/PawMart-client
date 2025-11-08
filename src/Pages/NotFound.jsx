import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">

      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
        className="w-40 mb-6 opacity-90"
      />

      <h1 className="text-6xl font-bold text-indigo-600 mb-3">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium shadow hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;
