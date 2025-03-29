import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./guppy_care.png";
import "./navbar.css"; // Import custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // Delay animation
  }, []);

  return (
    <div className="border">
      <nav className={`navbar navbar-expand-md navbar-light fixed-top ${animate ? "slide-down" : ""}`}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" className="me-2" style={{ height: "80px" }} />
            <span className="fw-bold text-black">Guppy Care</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`navbar-toggler ${isOpen ? "toggle-rotate" : ""}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse  ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium ">
              <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#fishes">FISHES</a></li>
              <li className="nav-item"><a className="nav-link" href="#products">PLANTS</a></li>
              <li className="nav-item"><a className="nav-link" href="#aboutus">ABOUT US</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
