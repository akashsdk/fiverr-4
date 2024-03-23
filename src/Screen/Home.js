import React from "react";
import "./Home.css";

import Header2 from "../Components/Header2";
import Index from "./Index";

import Img from "../Img/pexels-oleksandr-tiupa-192136.jpg";

export default function Home() {
  return (
    <div className="Home-body">
      <div className="Home-Div">
        <Header2 />
        <div className="Home-Box">
          <p className="Home-Text">The Boutique Store For Plants!</p>
          <p className="Home-Text2">Everything Is Better <br/> With Plants</p>

          <div className="Home-Box2">
            <p className="Home-Text3">Shop Now</p>
          </div>
        </div>
        <Index />
      </div>
      <img className="Home-Img" alt="Home" src={Img} />
    </div>
  );
}
