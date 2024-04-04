import React from "react";
import "./Home.css";

import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import Index from "./Index";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import BuyOnline from "../Components/BuyOnline";

import Img from "../Img/pexels-oleksandr-tiupa-192136.jpg";
import { Link } from "react-router-dom";

import { FloatButton } from "antd";


export default function Home() {
  return (
    <div className="Home-body">
      <div className="Home-Div">
        <Header2 />
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
    </div>
  );
}
