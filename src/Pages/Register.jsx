import { Link } from "react-router";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const Register = () => {
 const {signInGoogle,createUserEmail,updateUserProfile} = useAuth();

 const handleRegister = e=>{
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

   const photoUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

  if (!photoUrlRegex.test(photoURL)) {
    toast.error("Please provide a valid image URL (jpg, png, jpeg, gif, svg, webp).");
    return;
  }
  createUserEmail(email,password)
  .then(result=>{
    console.log(result)
    updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        
  form.reset()
  })
  .catch(err=>{
     toast.error(err.message);
  })

 



 }

 const handleGoogleSignIn = ()=>{
  signInGoogle()
  .then(result=>{
    toast.success('successfully Registered')

    console.log(result.user)
  }).catch(err=>{
    toast.message(err.message)
  })
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>
<form onSubmit={handleRegister}>
  
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-xl outline-indigo-600"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-xl outline-indigo-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border rounded-xl outline-indigo-600"
            placeholder="Minimum 6 characters"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="w-full px-4 py-2 border rounded-xl outline-indigo-600"
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Register
        </button>

</form>
        {/* Google Login */}
        <button onClick={handleGoogleSignIn}
        className="btn w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button>

        {/* Login Link */}
        <p className="text-center mt-5 text-gray-600">
          Already have an account?
          <Link to="/login" className="text-indigo-600 font-medium ml-1">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
