import Navbar from "./components/Navbar/navbar.js";
import Home from "./components/Home/home.js"
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories/categories.js";
import Products from "./components/Products/products.js";
import AboutUs from "./components/AboutUs/about_us.js";
import Footer from "./components/Footer/footer.js";
import LiveFeed from "./components/LiveFeed/LiveFeed.js";
import "./App.css"
function App() {
  return (
      <div className="main">
        <Navbar/>
        <Home/>
        <Categories/>
        <Products/>
        <LiveFeed/>
        <AboutUs/>
        <Footer/>
      </div>
  );
}

export default App;
