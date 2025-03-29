import React, { useState } from "react";
import feed1 from "./Moina_Culture.jpg";
import feed2 from "./Paramecium_Culture.jpg";
import feed3 from "./Vinegar_Eel_Culture.jpg";
import "../Categories/categories.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LiveFeed = () => {
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [orderDetails, setOrderDetails] = useState({ name: "", phone: "", email: "", address: "", quantity: "" });

  const products = [
    { id: 1, image: feed1, name: "Moina Culture", price: 70, description: "Live Moina culture for feeding small fish and fry." },
    { id: 2, image: feed2, name: "Paramecium Culture", price: 70, description: "Paramecium culture for feeding small fry." },
    { id: 3, image: feed3, name: "Vinegar Eel Culture", price: 70, description: "Vinegar eel culture as a live food source." },
  ];

  const handleOrderClick = (feed) => {
    setSelectedFeed(feed);
    setOrderDetails({ name: "", phone: "", email: "", address: "", quantity: "" });
  };

  const closeModal = () => {
    setSelectedFeed(null);
  };

  const handleInputChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    setOrderDetails({ ...orderDetails, quantity: quantity > 0 ? quantity : "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = selectedFeed.price * orderDetails.quantity;
    const message = `Hello, I want to order ${orderDetails.quantity} of ${selectedFeed.name}. \nTotal Amount: ₹${totalAmount}. \nMy details:\nName: ${orderDetails.name}\nPhone: ${orderDetails.phone}\nEmail: ${orderDetails.email}\nAddress: ${orderDetails.address}`;
    const whatsappURL = `https://wa.me/917448614596?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    closeModal();
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 fw-bold text-white">LIVE FEED</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow-sm p-3">
              <img src={product.image} className="img-fluid rounded" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h6 className="text-dark">{product.name}</h6>
                <p className="text-muted small flex-grow-1">{product.description}</p>
                <h6 className="text-danger">₹{product.price}</h6>
                <button className="btn btn-success btn-sm mt-auto" onClick={() => handleOrderClick(product)}>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
{selectedFeed && (
  <div>
    <div className="modal fade show d-flex align-items-center justify-content-center"
    style={{ display: "block"}} tabIndex="-1" role="dialog">
      <div className="modal-content">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          onClick={closeModal}
          aria-label="Close"
        ></button>
        <div className="modal-header border-0 text-center">
          <h6 className="modal-title mx-auto">Order {selectedFeed.name}</h6>
        </div>
        <div className="modal-body text-center">
          <img
            src={selectedFeed.image}
            className="img-fluid rounded"
            alt={selectedFeed.name}
            style={{ maxWidth: "80%" }}
          />
          <h6 className="text-danger mt-2">Price: ₹{selectedFeed.price}</h6>
          <form onSubmit={handleSubmit} className="mt-3">
            <input type="text" className="form-control mb-2" name="name" placeholder="Your Name" value={orderDetails.name} onChange={handleInputChange} required />
            <input
              type="tel"
              className="form-control mb-2"
              name="phone"
              placeholder="Your Phone"
              value={orderDetails.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setOrderDetails({ ...orderDetails, phone: value });
              }}
              maxLength="10"
              required
            />
            <input type="email" className="form-control mb-2" name="email" placeholder="Your Email" value={orderDetails.email} onChange={handleInputChange} required />
            <input type="text" className="form-control mb-2" name="address" placeholder="Your Address" value={orderDetails.address} onChange={handleInputChange} required />
            <input type="number" className="form-control mb-2" name="quantity" placeholder="Quantity" value={orderDetails.quantity} onChange={handleQuantityChange} min="1" required />
            <h6 className="text-dark">Total Amount: ₹{selectedFeed.price * orderDetails.quantity}</h6>
            <button type="submit" className="btn btn-primary w-100 btn-sm mt-2">Confirm Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)}



      {selectedFeed && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </div>
  );
};

export default LiveFeed;
