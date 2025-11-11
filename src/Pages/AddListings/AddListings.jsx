// src/components/AddListings/AddListings.jsx
import React from "react";
import { motion } from "framer-motion";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import toast from "react-hot-toast";
import Loading from "../../component/Loading";

const AddListings = () => {
  const { users,loading } = useAuth();
  const axios = useAxios();

  const handleAddListings = async (e) => {
    e.preventDefault();

    const listings = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      date: e.target.date.value,
      image: e.target.imageURL.value,
      description: e.target.description.value,
      email: e.target.email.value,
    };

    try {
      const res = await axios.post("/Listings", listings);
      if (res.data.insertedId) {
        toast.success("Listing added successfully!");
        e.target.reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  if(loading)return<Loading></Loading>

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto bg-linear-to-br from-white via-blue-50 to-purple-50 shadow-2xl rounded-3xl p-10 mt-12 border border-gray-200"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-4 text-gray-800 tracking-tight"
      >
        Add New Listing
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-gray-600 mb-12 text-lg"
      >
        Pet owners or shop owners can add new listings (adoption or products).  
        Fill in the required details below to get started.
      </motion.p>

      {/* Form */}
      <form onSubmit={handleAddListings} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            placeholder="Golden Retriever / Cat Toy / Dog Food"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Category</label>
          <select
            name="category"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets (Adoption)</option>
            <option value="Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            placeholder="0 for adoption"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Dhaka / Chattogram / Sylhet"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="imageURL"
            placeholder="https://i.ibb.co/.../image.jpg"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          />
        </div>

        {/* Pick-up Date */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1">Pick-up Date</label>
          <input
            type="date"
            name="date"
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-800 font-semibold mb-1">Email (Read-only)</label>
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={users.email}
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-gray-100 cursor-not-allowed shadow-sm"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-gray-800 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Write at least 40–50 words about the pet or product..."
            className="rounded-2xl border border-gray-300 px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-10 py-4 rounded-2xl transition-all shadow-xl w-full md:w-1/2 hover:shadow-2xl"
          >
            Add Listing
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddListings;
