import React, { useRef } from "react";
import "./Home.css";

import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import Index from "./Index";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import BuyOnline from "../Components/BuyOnline";

import Img from "../Img/pexels-oleksandr-tiupa-192136.jpg";
import { Link } from "react-router-dom";
import {ArrowUpOutlined} from '@ant-design/icons';

export default function Home() {
  const headerRef = useRef(null);

  const scrollToHeader = () => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home-body">
      <div className="Home-Div">
        <div ref={headerRef}>
          <Header2 />
        </div>
        <div className="Home-Box">
          <p className="Home-Text">The Boutique Store For Plants!</p>
          <p className="Home-Text2">
            Everything Is Better <br /> With Plants
          </p>

          <Link to="/Shop">
            <div className="Home-Box2">
              <p className="Home-Text3">Shop Now</p>
            </div>
          </Link>
        </div>
        <Index />
        <AboutUs hide="hide" />
        <BuyOnline />
        <Testimonials hide="hide" />
        <Footer />
      </div>
      <img className="Home-Img" alt="Home" src={Img} />
      <button className="Home-BackTop-Button" onClick={scrollToHeader}>
      <ArrowUpOutlined />
      </button>
    </div>
  );
}
