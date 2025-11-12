// UpdateListings.js
import React from "react";
import { motion } from "framer-motion";

const UpdateListings = ({ open, listing, onChange, onClose, onSubmit }) => {
  if (!open || !listing) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center mb-4 text-indigo-600 dark:text-indigo-400">
          Update Listing
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={listing.name || ""}
              onChange={onChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={listing.category || ""}
              onChange={onChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={listing.price || ""}
              onChange={onChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={listing.location || ""}
              onChange={onChange}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateListings;
