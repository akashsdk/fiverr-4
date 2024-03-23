import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FloatButton } from "antd";

import Home from "./Screen/Home";
import ErrorPage from "./Screen/ErrorPage";
import AboutUs from "./Screen/AboutUs";
import Shop from "./Screen/Shop";
import Testimonials from "./Screen/Testimonials";
import Footer from "./Components/Footer";
import ShopCart from './Components/ShopCart';
import Checkout from './Components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop-Bonsai" element={<Shop />} />
          <Route path="/Shop-Cactus" element={<Shop />} />
          <Route path="/Shop-IndoorPlants" element={<Shop />} />
          <Route path="/Shop-Succulent" element={<Shop />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Cart" element={<ShopCart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <FloatButton.BackTop visibilityHeight={0} />
      </div>
    </BrowserRouter>
  );
}

export default App;
