import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTrail, animated } from "@react-spring/web";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/Loading";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MyOrder = () => {
  const axios = useAxios();
  const { users } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!users) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`/order?email=${users.email}`);
        const mergeOrder = (orders)=>{
          const marged = {};

          orders.forEach((order)=>{
            const name = order.listingName;
            const quantity = Number(order.quantity);
            const unitPrice = Number(order.price);
            if(!marged[name]){
              marged[name]= {...order, 
                quantity: quantity,
             price: unitPrice * quantity,

              }
            }else{
              marged[name].quantity +=quantity;

              // increase price
            marged[name].price +=unitPrice*quantity
             
            }
          });
          return Object.values(marged)


        };

      const mergeOrders = mergeOrder(res.data)
       setOrders(mergeOrders)

      
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [axios, users]);

  const trail = useTrail(orders.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 250, friction: 20 },
  });

  // ✅ PDF DOWNLOAD
  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text("My Order Report", 14, 10);

    const tableColumn = [
      "Product/Listing Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = orders.map((order) => [
      order.listingName,
      order.buyerName || users.displayName,
      order.price === 0 ? "Free" : `৳ ${order.price}`,
      order.quantity,
      order.address,
      order.date,
      order.phone || "N/A",
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("My_Order_Report.pdf");
  };

  if (loading) return <Loading />;

  if (!orders.length)
    return <p className="text-center mt-10">You have no orders yet.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>

        {/*  Download PDF Button */}
        <button
          onClick={downloadReport}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Download Report
        </button>
      </div>

      {/* ✅ Animated Card UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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

      {/* ✅ Required Table View */}
      <h2 className="text-xl font-semibold mb-4">Order Summary Table</h2>
      <div className="overflow-x-auto shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2">Product/Listing Name</th>
              <th className="border px-3 py-2">Buyer Name</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Quantity</th>
              <th className="border px-3 py-2">Address</th>
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="border px-3 py-2">{order.listingName}</td>
                <td className="border px-3 py-2">
                  {order.buyerName || users.displayName}
                </td>
                <td className="border px-3 py-2">
                  {order.price === 0 ? "Free" : `৳ ${order.price}`}
                </td>
                <td className="border px-3 py-2">{order.quantity}</td>
                <td className="border px-3 py-2">{order.address}</td>
                <td className="border px-3 py-2">{order.date}</td>
                <td className="border px-3 py-2">{order.phone || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
