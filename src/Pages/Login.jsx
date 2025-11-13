import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signInGoogle, signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Sign in Success");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        toast.success("Sign in successfully");
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          Login to PawMart
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
          </div>
             <button
    type="button"

    className=" text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
  >
    Forgot Password?
  </button>


          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            Login
          </button>
        </form>


        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-3 text-gray-400 dark:text-gray-300">or</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>


     <button onClick={handleGoogleLogin} className="btn w-full  bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>


        <p className="text-center mt-6 text-gray-500 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
