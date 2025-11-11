import React from "react";

const CardDetails= ({ item, onOrderClick }) => {
  if (!item) return null;

  return (
    <div className="max-w-2xl mx-auto border shadow rounded p-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p className="text-gray-700">{item.category}</p>
      <p className="text-gray-700">Owner Email: {item.email || "N/A"}</p>
      <p className="text-gray-700">Location: {item.location}</p>

      <p className="font-semibold mt-3">
        {item.price === "Free for Adoption" ? "Free" : `$${item.price}`}
      </p>

      <p className="mt-4 text-gray-600">{item.description}</p>

      <button
        onClick={onOrderClick}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Adopt / Order Now
      </button>
    </div>
  );
};

export default CardDetails;
