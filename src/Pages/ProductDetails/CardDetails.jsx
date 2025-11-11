import React from "react";
import { Heart } from "lucide-react";

const CardDetails = ({ item, onOrderClick }) => {
  if (!item) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white border rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      {/* Image */}
      <div className="relative group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300">
          <Heart className="w-5 h-5" />
        </button>

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          {item.price === "Free for Adoption" ? "Free" : "Paid"}
        </span>
      </div>

      {/* Details */}
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mb-1">{item.category}</p>
        <p className="text-gray-600 mb-1">Owner Email: {item.email || "N/A"}</p>
        <p className="text-gray-600 mb-3">Location: {item.location}</p>

        <p className="text-xl font-semibold mb-4">
          {item.price === "Free for Adoption" ? "Free" : `৳${item.price}`}
        </p>

        <p className="text-gray-700 mb-6">{item.description}</p>

        <button
          onClick={onOrderClick}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Adopt / Order Now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
