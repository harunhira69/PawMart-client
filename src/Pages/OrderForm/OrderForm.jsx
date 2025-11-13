import React from "react";

const OrderForm = ({ item, users, handleOrder, closeModal }) => {
  
  return (
    <form
      onSubmit={handleOrder}
      className="space-y-5 p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
    >
      {/* Item Info */}
      <div className="flex items-center  gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg shadow-md"
        />
    <div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
    {item.name}
  </h3>
  <p className="text-indigo-600 dark:text-indigo-300 font-medium">
    {item.price === "Free for Adoption" ? "Free" : `$ ${item.price}`}
  </p>
</div>

      </div>

      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="buyerName"
            className="mb-1 font-medium text-gray-700 dark:text-gray-200"
          >
            Buyer Name
          </label>
          <input
            id="buyerName"
            type="text"
            defaultValue={users?.displayName}
            readOnly
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                       bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="buyerEmail"
            className="mb-1 font-medium text-gray-700 dark:text-gray-200"
          >
            Buyer Email
          </label>
          <input
            id="buyerEmail"
            type="email"
            defaultValue={users?.email}
            readOnly
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                       bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-not-allowed"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <label
          htmlFor="productName"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Product Name
        </label>
        <input
          id="productName"
          type="text"
          defaultValue={item.name}
          readOnly
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="productId"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Product ID
        </label>
        <input
          id="productId"
          type="text"
          defaultValue={item._id}
          readOnly
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-not-allowed"
        />
      </div>

      {/* Quantity */}
      {item.category !== "Pets (Adoption)" && (
        <div className="flex flex-col">
          <label
            htmlFor="quantity"
            className="mb-1 font-medium text-gray-700 dark:text-gray-200"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            min="1"
            defaultValue="1"
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                       bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                       focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      )}

      {/* Price */}
      <div className="flex flex-col">
        <label
          htmlFor="price"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Price
        </label>
        <input
          id="price"
          type="text"
          defaultValue={item.price === "Free for Adoption" ? 0 : item.price}
          readOnly
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 cursor-not-allowed"
        />
      </div>

      {/* Pickup Location */}
      <div className="flex flex-col">
        <label
          htmlFor="address"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Pickup Location
        </label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Enter Pickup Location"
          required
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label
          htmlFor="date"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Pickup Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          required
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Notes */}
      <div className="flex flex-col">
        <label
          htmlFor="notes"
          className="mb-1 font-medium text-gray-700 dark:text-gray-200"
        >
          Notes / Special Instructions
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Any special instructions?"
          rows="3"
          className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg 
                     bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          type="submit"
          className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 
                     text-white py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          Submit Request
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="block mx-auto text-gray-600 dark:text-gray-300 hover:text-gray-900 
                     dark:hover:text-white underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
