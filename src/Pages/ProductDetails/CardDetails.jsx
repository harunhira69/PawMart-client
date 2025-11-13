import React from "react";
import { Heart } from "lucide-react";

const CardDetails = ({ item, onOrderClick }) => {
  if (!item) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 border rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Top Image */}
      <div className="relative group h-72 md:h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
          <Heart className="w-5 h-5" />
        </button>

        {/* Price Badge */}
        <span className="absolute top-4 left-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          {item.price === "Free for Adoption" ? "Free" : `$${item.price}`}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
          {item.name}
        </h2>

        {/* Category & Location */}
        <div className="flex flex-wrap items-center gap-2 mb-3 text-sm md:text-base">
          <span className="px-3 py-1 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full font-medium shadow-sm">
            {item.category}
          </span>
          <span className="text-gray-700 dark:text-gray-300">
            Location: <span className="font-semibold">{item.location}</span>
          </span>
        </div>

        {/* Owner Email */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">
          Owner Email: <span className="font-medium">{item.email || "N/A"}</span>
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base line-clamp-5">
          {item.description}
        </p>

        {/* Button */}
        <button
          onClick={onOrderClick}
          className="w-full md:w-auto px-6 py-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Adopt / Order Now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
