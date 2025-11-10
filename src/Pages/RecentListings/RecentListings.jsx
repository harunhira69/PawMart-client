// src/components/RecentListings/RecentListings.jsx
import React, { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import { Link } from "react-router";

const RecentListings = () => {
  const axios = useAxios();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("/recent-listings");
        setListings(res.data);
      } catch (err) {
        console.error("Error loading recent listings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading)
    return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Recent Listings
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div
            key={item._id}
            className="shadow p-5 rounded-xl border hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover rounded"
            />

            <h3 className="font-semibold text-lg mt-3">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>

            <p className="text-gray-800 font-medium">
              {item.price === "Free for Adoption" ? item.price : `৳${item.price}`}
            </p>

            <p className="text-gray-600 text-sm mt-1">{item.location}</p>

            <Link
              to={`/product/${item._id}`}
              className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
