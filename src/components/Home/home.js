import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./Background.jpg";
import "./home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);


  const text = "WELCOME TO GUPPY CARE";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);


  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <div id="home" className={`home-container ${animate ? "fade-in" : ""}`} style={{ backgroundImage: `url(${image})` }}>
    <h1 className="home-title">{displayText}<span className="cursor">|</span></h1>
    </div>
  );
};

export default Home;
