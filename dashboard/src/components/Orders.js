import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3002/orders") // Replace with your API endpoint
      .then((res) => {
        setOrders(res.data); // Set the fetched data to the state
      })
      .catch((err) => {
        console.error("Error fetching orders data:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td className={order.mode === "BUY" ? "profit" : "loss"}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
