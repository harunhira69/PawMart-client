import { FaClipboardList, FaPlus } from "react-icons/fa";
import { NavLink, Link } from "react-router";


const Navmenu = ({ user, className }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "btn-gradient btn-gradient-active"
            : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pets"
        className={({ isActive }) =>
          isActive
            ? "btn-gradient btn-gradient-active"
            : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
        }
      >
        Pets & Supplies
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add-listing"
            className={({ isActive }) =>
              isActive
                ? "btn-gradient btn-gradient-active"
                : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
            }
          >
            <FaPlus className="inline mr-1" /> Add Listing
          </NavLink>

          <NavLink
            to="/my-listings"
            className={({ isActive }) =>
              isActive
                ? "btn-gradient btn-gradient-active"
                : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
            }
          >
            <FaClipboardList className="inline mr-1" /> My Listings
          </NavLink>

          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive
                ? "btn-gradient btn-gradient-active"
                : `${className} hover:bg-gray-100 dark:hover:bg-gray-700 transition`
            }
          >
            My Orders
          </NavLink>
        </>
      )}
    </>
  );
};

export default Navmenu;
