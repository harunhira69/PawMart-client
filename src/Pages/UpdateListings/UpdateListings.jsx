import React from "react";
import { motion } from "framer-motion";

const UpdateListings = ({ open, listing, onChange, onClose, onSubmit }) => {
  if (!open || !listing) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-5">
          ✏️ Update Listing
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={listing.name || ""}
              onChange={onChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={listing.category || ""}
              onChange={onChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={listing.price || ""}
              onChange={onChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={listing.location || ""}
              onChange={onChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
            />
          </div>

    

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateListings;
