import { Link, NavLink } from "react-router";
import { IoLogOut } from "react-icons/io5";



const AuthMenu = ({ user, signOutUser,className }) => {
  if (!user) {
    return (
      <>
        <NavLink to="/login" 
        className={({ isActive }) =>
          isActive
            ? "btn-gradient btn-gradient-active"
            : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
        }
        
        >Login</NavLink>
        
        <NavLink to="/register" className={({ isActive }) =>
          isActive
            ? "btn-gradient btn-gradient-active"
            : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
        }>Register</NavLink>
      </>
    );
  }

  return (
    <div className="dropdown dropdown-end z-50">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-9 border-2 border-gray-300 rounded-full">
          <img src={user.photoURL} alt="User Avatar" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
        <li className="text-sm font-bold">{user.displayName}</li>
        <li className="text-xs">{user.email}</li>
        <li className="mt-3">
          <button onClick={signOutUser} className="btn btn-xs bg-linear-to-r from-pink-500 to-red-500 text-white w-full">
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
