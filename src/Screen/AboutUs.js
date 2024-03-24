import React from "react";
import "./AboutUs.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import {
  ApartmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import Signature from "../Icon/Signature.png";

import Img1 from '../Img/woman-planting-plant-in-pot.jpg';

export default function AboutUs({ hide }) {
  return (
    <div style={{ width: "100%" }}>
      {!hide && <Header />}
      <div className="AboutUs-Body">
        <div className="AboutUs-Left">
          <img className="AboutUs-Left-Img" src={Img1} alt=""/>
        </div>

        <div className="AboutUs-Right">
          <p className="AboutUs-Text1">We Help Gardens Thrive!</p>

          <p className="AboutUs-Text2">
            Nonummy Cum <br /> Convallis
          </p>

          <p className="AboutUs-Text3">
            Elementum tristique mi montes nibh deserunt magna. Netus assumenda
            molestias nisi porro, nascetur molas. Habitant urna fugiat wisi
            nceptos sodales magna. Molestie suspendisse faucibus justo!
            Sollicitudin tempore unde, dolorem, blanditiis a nam beatae nihil
            bibendum, taciti.
          </p>

          <ApartmentOutlined className="AboutUs-Icon" />

          <p className="AboutUs-Text4">
            Tempore ut mauris aenean cillum ultrices nunc aliqu auris aenean
            mpore utma.
          </p>

          <img className="AboutUs-Img" src={Signature} alt="" />

          <div className="AboutUs-Right-Div1">
            <div className="AboutUs-Right-Div2">
              <FacebookOutlined className="AboutUs-Icon2" />
            </div>

            <div className="AboutUs-Right-Div2">
              <TwitterOutlined className="AboutUs-Icon2" />
            </div>

            <div className="AboutUs-Right-Div2">
              <YoutubeOutlined className="AboutUs-Icon2" />
            </div>

            <div className="AboutUs-Right-Div2">
              <InstagramOutlined className="AboutUs-Icon2" />
            </div>

            <div className="AboutUs-Right-Div2">
              <WhatsAppOutlined className="AboutUs-Icon2" />
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs-Box">hhh</div>
      {!hide && <Footer />}
    </div>
  );
}
