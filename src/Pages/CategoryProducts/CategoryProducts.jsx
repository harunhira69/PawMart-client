import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useAxios from "../../hook/useAxios";
import { Heart } from "lucide-react";

const CategoryProducts = () => {
  const { category } = useParams();
  const axios = useAxios();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/Products/${encodeURIComponent(category)}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, axios]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!products.length)
    return (
      <p className="text-center py-10 text-gray-500 text-lg">
        No products found for "{decodeURIComponent(category)}"
      </p>
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Explore <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{decodeURIComponent(category)}</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover amazing pets and supplies in this category. Click on any product to view details or adopt.
      </p>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="relative group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Quick overlay on hover */}
            <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center space-x-4">
              <button className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </button>
              <Link
                to={`/product/${p._id}`}
                className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow hover:shadow-lg transition"
              >
                View Details
              </Link>
            </div>

            {/* Card Details */}
            <div className="p-5">
              <h3 className="font-semibold text-lg md:text-xl text-gray-800">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{p.category}</p>
              <p className="text-gray-800 font-medium mb-1">
                {p.price === "Free for Adoption" ? p.price : `৳${p.price}`}
              </p>
              <p className="text-gray-600 text-sm">{p.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CTA Section */}
      <div className="mt-16 text-center">
        <Link
          to="/pets"
          className="inline-block px-8 py-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          View All Pets & Supplies
        </Link>
      </div>
    </section>
  );
};

export default CategoryProducts;
