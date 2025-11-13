
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import useAxios from "../../hook/useAxios";
import Loading from "../../component/Loading";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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
  }, [axios]);

  if (loading) return <Loading />;

  if (!listings.length)
    return <p className="text-center py-20 text-gray-500">No recent listings available.</p>;

  return (
    <section className="my-16 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12
       text-indigo-600 dark:text-indigo-400">
        Recent{" "}
        <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Listings
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.map((item, index) => (
          <motion.div
            key={item._id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 transform hover:scale-105"
              />
              {/* Optional: overlay badge */}
              {item.price === "Free for Adoption" && (
                <span className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs font-semibold rounded-full shadow-lg">
                  Free
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col justify-between h-48">
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{item.category}</p>
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                  {item.price === "Free for Adoption" ? item.price : `$${item.price}`}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{item.location}</p>
              </div>

              <Link
                to={`/product/${item._id}`}
                className="inline-block w-full text-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                See Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
