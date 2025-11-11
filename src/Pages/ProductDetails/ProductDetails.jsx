import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import Loading from "../../component/Loading";
import CardDetails from "./CardDetails";
import OrderForm from "../OrderForm/OrderForm";

const ProductDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { users } = useAuth();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false); // modal state
  const handleOpenOrderModal = () => {
  setIsOpen(true);
};

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`/item/${id}`);
        setItem(res.data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [axios, id]);
    const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (loading) return <Loading></Loading>
  if (!item) return <p className="text-center mt-10">Item not found.</p>;


  const handleOrder = async (e) => {
    e.preventDefault();

    const form = e.target;

    const orderData = {
      buyerName: users?.displayName,
      buyerEmail: users?.email,
      listingId: id,
      listingName: item.name,
      quantity: item.category === "Pets (Adoption)" ? 1 : form.quantity.value,
      price: item.price === "Free for Adoption" ? 0 : item.price,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      notes: form.notes.value,
      createdAt: new Date()
    };

    try {
      await axios.post("/order", orderData);
      toast.success("Order submitted successfully!");
       closeModal();
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">

<CardDetails item={item} onOrderClick={handleOpenOrderModal} ></CardDetails>
 {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Place Your Order</h2>
            <OrderForm
              item={item}
              users={users}
              handleOrder={handleOrder}
              closeModal={closeModal} 
            />
          </div>
        </div>
      )}

   

    



    </div>
  );
};

export default ProductDetails;
