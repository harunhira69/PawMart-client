import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTrail, animated } from "@react-spring/web";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/Loading";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";

const MyOrder = () => {
  const axios = useAxios();
  const { users } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      if (!users) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`/order?email=${users.email}`);
        const mergeOrder = (orders) => {
          const marged = {};
          orders.forEach((order) => {
            const name = order.listingName;
            const quantity = Number(order.quantity);
            const unitPrice = Number(order.price);
            if (!marged[name]) {
              marged[name] = {
                ...order,
                quantity: quantity,
                price: unitPrice * quantity,
              };
            } else {
              marged[name].quantity += quantity;
              marged[name].price += unitPrice * quantity;
            }
          });
          return Object.values(marged);
        };
        setOrders(mergeOrder(res.data));
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

  // Delete order
  const handleDelete = async (orderId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/order/${orderId}`);
        // Remove order from UI instantly
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
        toast.success("Order deleted successfully!");
      } catch (err) {
        toast.error("Failed to delete order!");
      }
    }
  };

  // PDF download
  const downloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor(41, 128, 185);
    doc.text("My Order Report", 14, 15);

    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 22);

    const tableColumn = [
      "Product/Listing Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
      "Notes",
    ];

    const tableRows = orders.map((order) => [
      order.listingName,
      order.buyerName || users.displayName,
      order.price === 0 ? "Free" : `৳ ${order.price}`,
      order.quantity,
      order.address,
      order.date,
      order.phone || "N/A",
      order.notes || "",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: "bold", halign: "center" },
      bodyStyles: { fillColor: [255, 255, 255], textColor: 50, fontSize: 10 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 25 }, 2: { cellWidth: 15 }, 3: { cellWidth: 15 }, 4: { cellWidth: 30 }, 5: { cellWidth: 20 }, 6: { cellWidth: 25 }, 7: { cellWidth: 30 } },
    });

    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    }

    doc.save(`My_Order_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  if (loading) return <Loading />;
  if (!orders.length) return <p className="text-center mt-10">You have no orders yet.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <button onClick={downloadReport} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {trail.map((style, index) => {
          const order = orders[index];
          return (
            <animated.div key={order._id} style={style} className="border rounded-lg p-4 shadow hover:shadow-lg transition relative">
              <img src={order.image} alt={order.listingName} className="w-full h-40 object-cover rounded mb-3" />
              <h2 className="text-lg font-semibold">{order.listingName}</h2>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">Price: {order.price === 0 ? "Free" : `$ ${order.price}`}</p>
              <p className="text-gray-600">Pickup Location: {order.address}</p>
              <p className="text-gray-600">Date: {order.date}</p>
              {order.notes && <p className="text-gray-500 mt-2">Notes: {order.notes}</p>}
              <button
                onClick={() => handleDelete(order._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </animated.div>
          );
        })}
      </div>

      <h2 className="text-xl font-semibold mb-4">Order Summary Table</h2>
      <div className="overflow-x-auto shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
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
              <tr key={order._id}>
                <td className="border px-3 py-2">{order.listingName}</td>
                <td className="border px-3 py-2">{order.buyerName || users.displayName}</td>
                <td className="border px-3 py-2">{order.price === 0 ? "Free" : `৳ ${order.price}`}</td>
                <td className="border px-3 py-2">{order.quantity}</td>
                <td className="border px-3 py-2">{order.address}</td>
                <td className="border px-3 py-2">{order.date}</td>
                <td className="border px-3 py-2">{order.phone || "N/A"}</td>
                {/* <td className="border px-3 py-2">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
