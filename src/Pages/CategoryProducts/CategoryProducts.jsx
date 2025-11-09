import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // ✅ Correct import
import useAxios from "../../hook/useAxios";


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
      <p className="text-center py-10 text-gray-500">
        No products found for "{decodeURIComponent(category)}"
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Products in "{decodeURIComponent(category)}"
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="shadow p-5 rounded-xl border hover:shadow-lg transition">
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover rounded"
            />
            <h3 className="font-semibold text-lg mt-3">{p.name}</h3>
            <p className="text-gray-600">{p.category}</p>
            <p className="text-gray-800 font-medium">
              {p.price === "Free for Adoption" ? p.price : `৳${p.price}`}
            </p>
            <p className="text-gray-600 text-sm mt-1">{p.location}</p>
          </div>
        ))}
      </div>

      {/* Render recent listings below category products */}
     
    </div>
  );
};

export default CategoryProducts;
