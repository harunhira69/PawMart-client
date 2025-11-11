import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTrail, animated } from "@react-spring/web";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/Loading";
 // ✅ fixed path

const MyOrder = () => {
  const axios = useAxios();
  const { users } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ local loading state

  useEffect(() => {
    const fetchOrders = async () => {
      if (!users) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`/order?email=${users.email}`);
        setOrders(res.data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [axios, users]);

  // react-spring trail for staggered animation
  const trail = useTrail(orders.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 250, friction: 20 },
  });

  if (loading) return <Loading/>;

  if (!orders.length)
    return <p className="text-center mt-10">You have no orders yet.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trail.map((style, index) => {
          const order = orders[index];
          return (
            <animated.div
              key={order._id}
              style={style}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={order.image}
                alt={order.listingName}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-semibold">{order.listingName}</h2>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">
                Price: {order.price === 0 ? "Free" : `৳ ${order.price}`}
              </p>
              <p className="text-gray-600">Pickup Location: {order.address}</p>
              <p className="text-gray-600">Date: {order.date}</p>
              {order.notes && (
                <p className="text-gray-500 mt-2">Notes: {order.notes}</p>
              )}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrder;
