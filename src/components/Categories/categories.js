import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categories.css";

import fish1 from "./fish1.webp";
import fish2 from "./fish2.jpg";
import fish3 from "./fish3.jpg";
import fish4 from "./fish4.jpg";
import fish5 from "./fish5.webp";
import fish6 from "./fish6.jpg";
import fish7 from "./fish7.jpg";
import fish8 from "./fish8.jpg";
import fish9 from "./fish9.jpg";
import fish10 from "./fish10.jpg";
import fish11 from "./fish11.jpg";
import fish12 from "./fish12.jpg";
import fish13 from "./fish13.jpg";
import fish14 from "./fish14.jpg";
import fish15 from "./fish15.jpg";
import fish16 from "./fish16.jpg";
import fish17 from "./fish17.jpg";




const Categories = () => {
  const [selectedFish, setSelectedFish] = useState(null);
  const [customer, setCustomer] = useState({ name: "", address: "", phone: "", pairs: "", totalPrice: 0 });

  const categories = [
    { image: fish1, title: "Albino-FullRed", price: 200, stock: "Sock" },
    { image: fish2, title: "RedLace", price: 150, stock: "Out Of Stock" },
    { image: fish3, title: "FullBlack", price: 150, stock: "Stock" },
    { image: fish4, title: "Blue-Koi", price: 150, stock: "Stock" },
    { image: fish5, title: "Yellow-Pink", price: 150, stock: "Out Of Stock" },
    { image: fish6, title: "Full-Gold", price: 200, stock: "Out Of Stock" },
    { image: fish7, title: "Chill-Mosaic-Dumbo", price: 250, stock: "Out Of Stock" },
    { image: fish8, title: "Purple-Berry", price: 150, stock: "Stock" },
    { image: fish9, title: "Black_Cobra_Guppy_Pair", price: 250, stock: "Stock" },
    { image: fish10, title: "Blue_Mosaic_Guppy_Pair", price: 150, stock: "Stock" },
    { image: fish11, title: "Black_Metal_Guppy_Pair", price: 250, stock: "Stock" },
    { image: fish12, title: "Platinum_Dumbo_Ear_Guppy_Pair", price: 150, stock: "Stock" },
    { image: fish13, title: "Platinum_Koi_Dumbo_Ear_Pair", price: 250, stock: "Stock" },
    { image: fish14, title: "Silverido_Red_Guppy_Pair", price:150, stock: "Stock" },
    { image: fish15, title: "Yellow_Pinku_Pair", price:200, stock: "Stock" },
    { image: fish16, title: "FCCP RED MALE BETTA", price:450, stock: "Stock" },
    { image: fish17, title: "FCCP RED FEMALE BETTA", price:300, stock: "Stock" },

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: name === "pairs" ? parseInt(value) || "" : value,
      totalPrice: name === "pairs" ? (parseInt(value) || 0) * selectedFish.price : prev.totalPrice,
    }));
  };

  const handleBuyNow = () => {
    if (!customer.name || !customer.address || !customer.phone || !customer.pairs) {
      alert("Please fill all fields before proceeding.");
      return;
    }
    const totalFishes = customer.pairs * 2;
    const message = `Hello, I want to buy *${selectedFish.title}* at ₹${selectedFish.price} per pair.\n👤 Name: ${customer.name}\n📍 Address: ${customer.address}\n📞 Phone: ${customer.phone}\n🛍️ Number of Pairs: ${customer.pairs}\n🐟 Total Fishes: ${totalFishes}\n💰 Total Price: ₹${customer.totalPrice}\n🫶 Thanks For Choosing Us! Kindly Wait For Our Response 🌞`;
    window.open(`https://wa.me/917448614596?text=${encodeURIComponent(message)}`, "_blank");

    setCustomer({ name: "", address: "", phone: "", pairs: "", totalPrice: 0 });
    
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 fw-bold text-white">FISHES</h2>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div key={index} className={`col-12 col-sm-6 col-md-4 mb-4 ${category.stock === "Out Of Stock" ? "out-of-stock" : ""}`}
            onClick={() => category.stock !== "Out Of Stock" && setSelectedFish(category)}
            style={{ cursor: category.stock === "Out Of Stock" ? "not-allowed" : "pointer", opacity: category.stock === "Out Of Stock" ? 0.3 : 1,height:"500px" }}>
            <div className="card shadow-sm p-3">
              <img src={category.image} className="img-fluid rounded" alt={category.title} />
              <h6 className="mt-2 text-dark">{category.title}</h6>
              {/* <h6 className="text-danger">₹{category.price} per pair</h6> */}
              {category.price === 450 || category.price === 300 ? (
  <h6 className="text-danger mt-2">Price: ₹{category.price} per piece</h6>
) : (
  <h6 className="text-danger mt-2">Price: ₹{category.price} per pair</h6>
)}

              <h6 className={category.stock === "Out Of Stock" ? "text-danger" : "text-success"}>{category.stock}</h6>
            </div>
          </div>
        ))}
      </div>

      {selectedFish && (
        <div className="modal fade show d-flex align-items-center justify-content-center" style={{ display: "block" }}>
          <div className="modal-content p-4">
            <button className="btn-close position-absolute top-0 end-0 m-2" onClick={() => setSelectedFish(null)}></button>
            <h4 className="text-center">Order {selectedFish.title}</h4>
            <img src={selectedFish.image} className="img-fluid rounded" alt={selectedFish.title} style={{ margin:"auto" }} />
            <h6 className="text-danger mt-2">Price: ₹{selectedFish.price} per pair</h6>
            <form className="mt-3">
              <input type="text" className="form-control mb-2" name="name" placeholder="Your Name" value={customer.name} onChange={handleChange} required />
              <input type="text" className="form-control mb-2" name="address" placeholder="Your Address" value={customer.address} onChange={handleChange} required />
              <input type="tel" className="form-control mb-2" name="phone" placeholder="Your Phone" value={customer.phone} onChange={handleChange} maxLength="10" required />
              <input type="number" className="form-control mb-2" name="pairs"  placeholder={[450, 300].includes(selectedFish.price) ? "Number of Pieces" : "Number of Pairs"} value={customer.pairs} onChange={handleChange} min="1" required />
              <h6 className="text-dark">Total Amount: ₹{customer.totalPrice}</h6>
              <button type="button" className="btn btn-primary w-100 btn-sm mt-2" onClick={handleBuyNow}>Confirm Order</button>
            </form>
          </div>
        </div>
      )}
      {selectedFish && <div className="modal-backdrop fade show" onClick={() => setSelectedFish(null)}></div>}
    </div>
  );
};

export default Categories;