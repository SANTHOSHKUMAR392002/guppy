import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImage from "./about_us.jpg";
import "./about_us.css"; 

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <div className={`aboutus-page ${animate ? "fade-in" : ""}`} id="aboutus">
      <div className="container my-5">
        <div className="row align-items-center">
        <h2 className="fw-bold text-white  text-center">ABOUT US</h2>
        <div className="col-12 col-md-8 mx-auto text-center">
        <img src={aboutImage} className="img-fluid rounded shadow aboutus-image w-100" alt="About Us" style={{ maxWidth: "100%",maxHeight:"400px" }}/>
        </div>
            <h4 className="fw-bold text-white aboutus-heading">
              Come visit Guppy Care and let’s create a thriving underwater world together! 🌊🐠💖
              Our goal is to ensure every fish lover finds the perfect guppy for their home or business aquarium. 
              🌍💙 With a focus on quality, care, and customer satisfaction, we strive to be your trusted partner in fishkeeping. 🌟
            </h4>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
