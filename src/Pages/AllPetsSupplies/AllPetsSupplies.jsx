import React, { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/Loading";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AllPetsSupplies = () => {
  const axios = useAxios();
  const { loading } = useAuth();
  const [items, setItems] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setDataLoading(true);
      try {
        const res = await axios.get("all-item");
        setItems(res.data);
        setFilterData(res.data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setDataLoading(false);
      }
    };
    fetchAll();
  }, [axios]);

  // Filter and Search Logic
  useEffect(() => {
    let data = [...items];
    if (category !== "All") {
      data = data.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }
    if (search.trim() !== "") {
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.location.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterData(data);
  }, [search, category, items]);

  if (loading || dataLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Search and Filter */}
      <div className="mb-8">
        <SearchInput
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>

 
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filterData.length > 0 ? (
          filterData.map((filter, index) => (
            <motion.div
              key={filter._id}
              className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative group">
                <img
                  src={filter.image}
                  alt={filter.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {filter.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1 capitalize">
                  {filter.category}
                </p>
                <p className="text-sm text-gray-600 mb-2">{filter.location}</p>

                <p className="text-base font-semibold text-indigo-600 mb-4">
                  {filter.price === "Free for Adoption" || filter.price === 0
                    ? "Free"
                    : `$${filter.price}`}
                </p>

                <Link to={`/product/${filter._id}`} className="mt-auto">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-linear-to-r from-indigo-500 to-pink-500 text-white rounded-lg py-2 font-medium hover:from-indigo-600 hover:to-pink-600 transition-all duration-300"
                  >
                    See Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default AllPetsSupplies;
