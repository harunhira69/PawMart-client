import React from "react";

const OrderForm = ({ item, users, handleOrder, closeModal }) => {
  return (
    <form onSubmit={handleOrder} className="space-y-6">
      {/* Item Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg shadow-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-indigo-600 font-medium">
            {item.price === "Free for Adoption" ? "Free" : `৳ ${item.price}`}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          defaultValue={users?.displayName}
          readOnly
          className="w-full border p-3 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
        />
        <input
          type="email"
          defaultValue={users?.email}
          readOnly
          className="w-full border p-3 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
        />
      </div>

      {/* Quantity for products only */}
      {item.category !== "Pets (Adoption)" && (
        <input
          type="number"
          name="quantity"
          min="1"
          defaultValue="1"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      )}

      {/* Price */}
      <input
        type="text"
        defaultValue={item.price === "Free for Adoption" ? 0 : item.price}
        readOnly
        className="w-full border p-3 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
      />

      {/* Pickup Location */}
      <input
        type="text"
        name="address"
        placeholder="Enter Pickup Location"
        required
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Date */}
      <input
        type="date"
        name="date"
        required
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Phone */}
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Notes */}
      <textarea
        name="notes"
        placeholder="Any special instructions?"
        rows="3"
        className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
      >
        Submit Request
      </button>

      {/* Cancel Button */}
      <button
        type="button"
        onClick={closeModal}
        className="block mx-auto mt-2 text-gray-600 hover:text-gray-900 underline"
      >
        Cancel
      </button>
    </form>
  );
};

export default OrderForm;
