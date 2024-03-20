import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import ErrorPage from "./Screen/ErrorPage";
import AboutUs from "./Screen/AboutUs";
import Shop from "./Screen/Shop";
import Testimonials from "./Screen/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
