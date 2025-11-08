import React, { useState } from "react";

const categories = [
  {
    id: "pets",
    name: "Pets (Adoption)",
    emoji: "🐾",
    items: [
      { id: 1, name: "Cat" },
      { id: 2, name: "Dog" },
      { id: 3, name: "Rabbit" },
      { id: 4, name: "Bird" },
    ],
  },
  {
    id: "food",
    name: "Pet Food",
    emoji: "🍖",
    items: [
      { id: 1, name: "Cat Food" },
      { id: 2, name: "Dog Food" },
      { id: 3, name: "Bird Food" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    emoji: "🎒",
    items: [
      { id: 1, name: "Collar" },
      { id: 2, name: "Cage" },
      { id: 3, name: "Litter Box" },
    ],
  },
  {
    id: "care",
    name: "Pet Care Products",
    emoji: "🧴",
    items: [
      { id: 1, name: "Shampoo" },
      { id: 2, name: "Vitamin" },
      { id: 3, name: "Medicine" },
    ],
  },
];

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Browse Categories
      </h2>

      {/* MAIN CATEGORY CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`p-4 shadow-md rounded-xl cursor-pointer text-center border 
            ${selectedCategory === cat.id ? "bg-red-500 text-white" : "bg-white"}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <div className="text-4xl">{cat.emoji}</div>
            <div className="mt-2 font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>

      {/* SECTION BELOW SHOWS SELECTED SUB-ITEMS */}
      {selectedCategory && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">
            {categories.find((c) => c.id === selectedCategory).name}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories
              .find((c) => c.id === selectedCategory)
              .items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-xl shadow-sm text-center"
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
