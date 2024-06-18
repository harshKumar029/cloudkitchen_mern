import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbarr/Navbarr';
import './MyOrder.css';

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();
      console.log( response )
      setOrderData(response);
    } catch (error) {
      console.error("There was an error fetching the order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="section-title">My Orders</h1>
        <div className="table-container">
          <table className="order-table">
            <thead>
              <tr>
                <th>Order Date</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderData.orderData ? orderData.orderData.order_data.slice(0).reverse().map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.map((arrayData, idx) => (
                      <tr key={idx}>
                        {arrayData.Order_date ? (
                          <td colSpan="6" className="order-date">{arrayData.Order_date}</td>
                        ) : (
                          <>
                            <td>{arrayData.Order_date || ''}</td>
                            <td>{arrayData.name}</td>
                            <td>{arrayData.name}</td>
                            <td>{arrayData.qty}</td>
                            <td>{arrayData.size}</td>
                            <td>₹{arrayData.price}/-</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              }) : <tr><td colSpan="6">No orders found</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
