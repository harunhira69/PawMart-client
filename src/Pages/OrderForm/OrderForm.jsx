import React from "react";

const OrderForm = ({ item, users, handleOrder, closeModal }) => {
  return (
    <form onSubmit={handleOrder} className="space-y-4">

      <input
        type="text"
        defaultValue={users?.displayName}
        readOnly
        className="w-full border p-3 rounded-lg bg-gray-100"
      />

      <input
        type="email"
        defaultValue={users?.email}
        readOnly
        className="w-full border p-3 rounded-lg bg-gray-100"
      />

      {item.category !== "Pets (Adoption)" && (
        <input
          type="number"
          name="quantity"
          min="1"
          defaultValue="1"
          className="w-full border p-3 rounded-lg"
        />
      )}

      <input
        type="text"
        defaultValue={item.price === "Free for Adoption" ? 0 : item.price}
        readOnly
        className="w-full border p-3 rounded-lg bg-gray-100"
      />

      <input
        type="text"
        name="address"
        placeholder="Enter Pickup Location"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="date"
        name="date"
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="notes"
        placeholder="Any special instructions?"
        rows="3"
        className="w-full border p-3 rounded-lg"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Submit Request
      </button>

      <button
        type="button"
        onClick={closeModal}
        className="block mx-auto text-gray-600 hover:text-gray-900 underline">
        Cancel
      </button>
    </form>
  );
};

export default OrderForm;
