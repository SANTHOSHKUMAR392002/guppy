import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import "./products.css"; // Import custom styles

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    stems: "",
    totalPrice: 0,
  });

  const products = [
    { id: 1, image: image1, title: "Brazilian Pennywort Plant", price: 30 },
    { id: 2, image: image2, title: "Red Rotala Plant", price: 50 },
    { id: 3, image: image3, title: "Green Lily Plant", price: 50 },
    { id: 4, image: image4, title: "Duck Feed Plant", price: 30 },
    { id: 5, image: image5, title: "Guppy Grass Plant", price: 30 },
    { id: 6, image: image6, title: "Foxtail Plant", price: 30 },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setFormData({ name: "", address: "", phone: "", stems: "", totalPrice: 0 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    if (name === "stems") {
      const numStems = parseInt(value) || 0;
      const total = numStems * selectedProduct.price;
      setFormData({ ...formData, [name]: value, totalPrice: total });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleBuyNow = () => {
    if (!formData.name || !formData.address || !formData.phone || !formData.stems) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    const message = `Hello, I want to buy *${selectedProduct.title}* at ₹${selectedProduct.price} per stem.
    \n\nCustomer Details:
    \n👤 Name: ${formData.name}
    \n📍 Address: ${formData.address}
    \n📞 Phone: ${formData.phone}
    \n🌱 Number of Stems: ${formData.stems}
    \n💰 Total Price: ₹${formData.totalPrice}
    \n🫶 Thanks For Choosing Us! Kindly Wait For Our Response 🌞`;

    const whatsappURL = `https://wa.me/917448614596?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", address: "", phone: "", stems: "", totalPrice: 0 });
    setSelectedProduct(null);
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 fw-bold text-white">PLANTS</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow-sm p-3">
              <img
                src={product.image}
                className="img-fluid rounded"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="text-dark">{product.title}</h6>
                <h6 className="text-danger">₹{product.price} per stem</h6>
                <button className="btn btn-success btn-sm mt-auto" onClick={() => handleProductClick(product)}>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal fade show d-flex align-items-center justify-content-center" style={{ display: "block" }}>
          <div className="modal-content p-4">
            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={() => setSelectedProduct(null)}></button>
            <div className="modal-header border-0 text-center">
              <h6 className="modal-title mx-auto">Order {selectedProduct.title}</h6>
            </div>
            <div className="modal-body text-center">
              <img
                src={selectedProduct.image}
                className="img-fluid rounded"
                alt={selectedProduct.title}
                style={{ maxWidth: "80%" }}
              />
              <h6 className="text-danger mt-2">Price per stem: ₹{selectedProduct.price}</h6>
              <form className="mt-3">
                <input type="text" className="form-control mb-2" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="text" className="form-control mb-2" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
                <input
                  type="tel"
                  className="form-control mb-2"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                />
                <input type="number" className="form-control mb-2" name="stems" placeholder="Number of Stems" value={formData.stems} onChange={handleChange} min="1" required />
                <h6 className="text-dark">Total Amount: ₹{formData.totalPrice}</h6>
                <button type="button" className="btn btn-primary w-100 btn-sm mt-2" onClick={handleBuyNow}>
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && <div className="modal-backdrop fade show" onClick={() => setSelectedProduct(null)}></div>}
    </div>
  );
};

export default Products;
  