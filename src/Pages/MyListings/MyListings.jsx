import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import Loading from "../../component/Loading";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import UpdateListings from "../UpdateListings/UpdateListings";
import useAxiosSecure from "../../hook/useAxiosSecure";

const MyListings = () => {
  const { users, loading } = useAuth();
  const axios = useAxiosSecure();

  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingListings, setLoadingListings] = useState(true);

  // Fetch listings for logged-in user
  useEffect(() => {
    if (!users?.email) return;

    const fetchListings = async () => {
      try {
        const res = await axios.get(`/my-listings?email=${users.email}`);
        setListings(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load your listings!");
      }finally{
        setLoadingListings(false)
      }
    };

    fetchListings();
  }, [users, axios]);

  // Delete listing
  const handleDelete = async (id) => {
    const swal = Swal.mixin({
      customClass: { confirmButton: "btn btn-success", cancelButton: "btn btn-danger" },
      buttonsStyling: false,
    });

    const result = await swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/my-listings/${id}`);
        setListings((prev) => prev.filter((p) => p._id !== id));
        swal.fire("Deleted!", "Your listing has been deleted.", "success");
      } catch (err) {
        swal.fire("Error!", "Failed to delete listing.", "error");
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swal.fire("Cancelled", "Your listing is safe :)", "error");
    }
  };

  // Open modal for update
  const handleUpdate = (listing) => {
    setSelectedListing(listing);
    setModalOpen(true);
  };

  // Handle form changes in modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedListing((prev) => ({ ...prev, [name]: value }));
  };

  // Submit updated listing

const handleModalSubmit = async (e) => {
  e.preventDefault();
  console.log("Sending data:", selectedListing);

  const updatedData = {
    name: selectedListing.name,
    category: selectedListing.category,
    price: selectedListing.price,
    location: selectedListing.location,
  };
  console.log({updatedData})

  try {
    const res = await axios.put(
      `/my-listings/${selectedListing._id}`, 
      updatedData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("Response from server:", res.data);

    if (res.data && res.data._id) {
      setListings((prev) =>
        prev.map((item) =>
          item._id === res.data._id ? res.data : item
        )
      );
      toast.success("Listing updated successfully!");
      setModalOpen(false);
      setSelectedListing(null);
    } else {
      toast.error("Failed to update listing!");
    }
  } catch (err) {
    console.error("Update error:", err.response?.data || err.message);
    toast.error(err?.response?.data?.message || "Update failed!");
  }
};





  if (loading || loadingListings) return <Loading />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mt-16 bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700 dark:text-indigo-400">
          My Listings ({listings.length})
        </h2>

        {listings.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            You haven’t added any listings yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm md:text-base">
              <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <tr>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Image</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Name</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Category</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Price</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Location</th>
                  <th className="py-2 px-2 sm:py-3 sm:px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item) => (
                  <tr
                    key={item._id.toString()}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-800 dark:text-gray-100"
                  >
                    <td className="border p-2 sm:p-3 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-xl mx-auto"
                      />
                    </td>
                    <td className="border p-2 sm:p-3">{item.name}</td>
                    <td className="border p-2 sm:p-3">{item.category}</td>
                    <td className="border p-2 sm:p-3">${item.price}</td>
                    <td className="border p-2 sm:p-3">{item.location}</td>
                    <td className="border p-2 sm:p-3 text-center flex flex-col md:flex-row items-center justify-center space-x-2 md:space-x-3">
                      <button
                        onClick={() => handleUpdate(item)}
                        className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 w-full md:w-auto"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full md:w-auto mt-2 md:mt-0"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <UpdateListings
        open={modalOpen}
        listing={selectedListing}
        onChange={handleChange}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default MyListings;
