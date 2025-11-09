import React from "react";
import { Link } from "react-router";
import petsBanner from "../../assets/banner.jpg";

const Category = () => {
 const categories = [
  { name: "Pets (Adoption)", bg: "bg-pink-50" },
  { name: "Pet Food", bg: "bg-yellow-50" }, // make sure DB also has this
  { name: "Accessories", bg: "bg-green-50" },
  { name: "Pet Care", bg: "bg-blue-50" } // match exactly the DB value
];


  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-5">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/category/${encodeURIComponent(cat.name)}`}
          >
            <div
              className={`flex items-center justify-between p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer border-l-4 border-red-400 ${cat.bg}`}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {cat.name}
              </h3>
              <span className="text-gray-500 text-2xl">›</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <img
          src={petsBanner}
          alt="Pets Banner"
          className="w-full max-w-md rounded-3xl shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default Category;
