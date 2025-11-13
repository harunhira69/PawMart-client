import { Link, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()
  const { signInGoogle, createUserEmail, updateUserProfile } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoUrl.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    const photoUrlRegex =
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

    if (!photoUrlRegex.test(photoURL)) {
      toast.error(
        "Please provide a valid image URL (jpg, png, jpeg, gif, svg, webp)."
      );
      return;
    }

    createUserEmail(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        navigate('/login')
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        toast.success("Successfully Registered");
        navigate('/')
        // console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Google Sign In */}
       <button onClick={handleGoogleSignIn} className="btn w-full mt-5 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

        {/* Login Link */}
        <p className="text-center mt-5 text-gray-600 dark:text-gray-300">
          Already have an account?
          <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-medium ml-1">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
