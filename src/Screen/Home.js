import React from "react";
import "./Home.css";

import Header from '../Components/Header';

import Img from "../Img/pexels-oleksandr-tiupa-192136.jpg";

export default function Home() {
  return (
    <div className="Home-body">
      <div className="Home-Box1">
        <div className="Home-Box1-Div">
          <Header/>
          <h1>ok</h1>
          <h1>hjkjhgfdghjkjhgfghjkjhgfghjkjhgfghjkjhg</h1>
        </div>
        <img className="Home-Box1-Img" src={Img} alt="img" />
      </div>
    </div>
  );
}
