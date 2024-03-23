import React from "react";
import "./Index.css";

import { Link } from "react-router-dom";
import { ArrowRightOutlined} from '@ant-design/icons';

import Icon1 from "../Icon/plant.png";
import Icon2 from "../Icon/plant (1).png";
import Icon3 from "../Icon/good-review.png";
import Icon4 from "../Icon/delivery-truck.png";

import Img1 from '../Img/Cactus.jpeg';
import Img2 from '../Img/Bonsai.jpeg';
import Img3 from '../Img/Succulent.jpeg';
import Img4 from '../Img/Indoor Plants.jpeg';

export default function Index() {
  return (
    <div className="Index-Body">
      <div style={{ backgroundColor: "#fff", height: "20px" }} />

      <div className="Index-Top-Div">
        <div className="Index-Top-Div2">
          <div className="Index-Top-Div3">
            <img className="Index-Top-Icon" alt="Icon" src={Icon1} />
          </div>
          <div className="Index-Top-Div4">
            <p className="Index-Top-Text1">High Quality Plants</p>
            <p className="Index-Top-Text2">
              A line about the service you've mentioned above.
            </p>
          </div>
        </div>

        <div className="Index-Top-Div2">
          <div className="Index-Top-Div3">
            <img className="Index-Top-Icon" alt="Icon" src={Icon2} />
          </div>
          <div className="Index-Top-Div4">
            <p className="Index-Top-Text1">Wide Plant Range</p>
            <p className="Index-Top-Text2">
              A line about the service you've mentioned above.
            </p>
          </div>
        </div>

        <div className="Index-Top-Div2">
          <div className="Index-Top-Div3">
            <img className="Index-Top-Icon" alt="Icon" src={Icon3} />
          </div>
          <div className="Index-Top-Div4">
            <p className="Index-Top-Text1">Excellent Services</p>
            <p className="Index-Top-Text2">
              A line about the service you've mentioned above.
            </p>
          </div>
        </div>

        <div className="Index-Top-Div2">
          <div className="Index-Top-Div3">
            <img className="Index-Top-Icon" alt="Icon" src={Icon4} />
          </div>
          <div className="Index-Top-Div4">
            <p className="Index-Top-Text1">Fast Delivery</p>
            <p className="Index-Top-Text2">
              A line about the service you've mentioned above.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff", height: "20px" }} />

      <div className="Index-Dow-Div">
        <div>
          <img alt="" />
          <Link>
            <p>Cactus</p>
            <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
}
