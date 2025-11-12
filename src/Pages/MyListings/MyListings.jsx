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

  // Fetch listings for logged-in user only
  useEffect(() => {
    if (!users?.email) return;
    const fetchListings = async () => {
      try {
        const res = await axios.get(`/my-listings?email=${users.email}`);
        setListings(res.data);
      } catch (err) {
        toast.error("Failed to load your listings!");
      }
    };
    fetchListings();
  }, [users, axios]);

  // Delete listing
  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`/my-listings/${id}`);
            setListings((prev) => prev.filter((p) => p._id !== id));
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your listing has been deleted.",
              icon: "success",
            });
          } catch (err) {
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "Failed to delete listing.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your listing is safe :)",
            icon: "error",
          });
        }
      });
  };

  // Open modal for update
  const handleUpdate = (listing) => {
    setSelectedListing(listing);
    setModalOpen(true);
  };

  // Handle input change inside modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedListing((prev) => ({ ...prev, [name]: value }));
  };

  // Submit updated listing
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/my-listings/${selectedListing._id}`, 
        selectedListing);

      setListings((prev) =>
        prev.map((p) =>
            p._id === selectedListing._id ? res.data : p)
      );
      toast.success("Listing updated successfully!");
      setModalOpen(false);
    } catch (err) {
      toast.error("Failed to update listing!");
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mt-16 bg-white shadow-xl rounded-3xl p-8 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          My Listings ({listings.length})
        </h2>

        {listings.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            You haven’t added any listings yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <tr>
                  <th className="py-3 px-4 border">Image</th>
                  <th className="py-3 px-4 border">Name</th>
                  <th className="py-3 px-4 border">Category</th>
                  <th className="py-3 px-4 border">Price</th>
                  
                  <th className="py-3 px-4 border">Location</th>
                  <th className="py-3 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-100 transition">
                    <td className="border p-3 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl mx-auto"
                      />
                    </td>
                    <td className="border p-3">{item.name}</td>
                    <td className="border p-3">{item.category}</td>
                    <td className="border p-3">${item.price}</td>
                    <td className="border p-3">{item.location}</td>
                    <td className="border p-3 text-center space-x-3">
                      <button
                        onClick={() => handleUpdate(item)}
                        className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
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

      {/* ✅ Modal is placed OUTSIDE the main container */}
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
