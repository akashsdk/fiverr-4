import React from "react";
import "./BuyOnline.css";

import Img1 from "../Img/App Disigen.png";

import Icon1 from "../Icon/App store logo.png";
import Icon2 from "../Icon/play soter.png";

export default function BuyOnline() {
  return (
    <div className="Online-Body">
      <img className="Online-Img" src={Img1} alt="" />

      <div className="Online-Div">
        <p className="Online-Text1">Download The App Now!</p>
        <p className="Online-Text2">For better experience download our app!</p>

        <div className="Online-Div2">
          <img className="Online-Img2" src={Icon2} alt="" />
          <img className="Online-Img3" src={Icon1} alt="" />
        </div>
      </div>
    </div>
  );
}
