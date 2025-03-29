import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./footer.css"; // Import custom styles

const Footer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <footer className={`footer-container ${animate ? "fade-in" : ""}`} id="contact">
      <div className="container">
        <div className="row footer-content">
          

          {/* Contact Info */}
          <div className="col-12 col-md-8">
            <h5 className="fw-bold text-white">CONTACT</h5>
            <p className="text-white">Near Perumal Kovil Thanthonimalai,Karur -639005</p>
            <p className="text-white"><strong>Phone:</strong> +91-7448614596</p>
            <p className="text-white"><strong>Email:</strong> guppycarekarur@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-white">CONNECT</h5>
            <div className="d-flex gap-3 social-icons">
              <a href="https://www.facebook.com/share/1A8kVeq928/?mibextid=qi2Omg" target="_blank"className="social-linkf"><FaFacebookF /></a>
              <a href="https://wa.me/7448614596" className="social-linkw" target="_blank"><FaWhatsapp /></a>       
              <a href="https://www.instagram.com/guppycare_?igsh=OXFtZm1iYzB0NXMw"  target="_blank" className="social-linki"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 text-white copyright">
        © Copyright 2025 Guppy Care. All Rights Reserved.
        <br/><div className="buttowski"></div>
        <p>Powered By <span className="B">BUTTOWSKI</span></p>
      </div>
    </footer>
  );
};

export default Footer;
