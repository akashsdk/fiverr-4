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
  ArrowRightOutlined,
} from "@ant-design/icons";

import Signature from "../Icon/Signature.png";

import Img1 from "../Img/woman-planting-plant-in-pot.jpg";
import Img2 from "../Img/AboutUs img 1.webp";
import Img3 from "../Img/AboutUs img 2.jpg";
import Img4 from "../Img/AboutUs img 3.png";

import { Link } from "react-router-dom";

export default function AboutUs({ hide }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#fbfbfb" }}>
      {!hide && <Header />}
      <div className="AboutUs-Body">
        <div className="AboutUs-Left">
          <img className="AboutUs-Left-Img" src={Img1} alt="" />
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

      <div className="AboutUs-Box">
        <div className="AboutUs-Box2">
          <img className="AboutUs-Box-Img" src={Img3} alt="" />
          <img className="AboutUs-Box-Img" src={Img2} alt="" />
        </div>

        <div className="AboutUs-Box3">
          <div className="AboutUs-Box4">
            <p className="AboutUs-Box-Text1">Plants Care Instruction</p>
            <p className="AboutUs-Box-Text2">
              Each order includes a small care guide booklet.
            </p>
            <Link to='/Shop' className="AboutUs-Box-Link">
              <p className="AboutUs-Box-Text3">Shop Now</p>
              <ArrowRightOutlined className="AboutUs-Box-Icon" />
            </Link>
          </div>

          <div className="AboutUs-Box4">
            <p className="AboutUs-Box-Text1">Editor's Pick</p>
            <p className="AboutUs-Box-Text2">
              Find the best plants hand-picked by our editor.
            </p>
            <Link to='/Shop' className="AboutUs-Box-Link">
              <p className="AboutUs-Box-Text3">Shop Now</p>
              <ArrowRightOutlined className="AboutUs-Box-Icon" />
            </Link>
          </div>
        </div>

        <div className="AboutUs-Box5">
          <div className="AboutUs-Box6">
            <p className="AboutUs-Text2" >Buy Online Now & Get 10% Off!</p>
            <p className="AboutUs-Text3">
              Curae quia enim aute, consequatur, eius quaerat excepteur fames
              pharetra.
            </p>

            <Link to="/Shop">
              <div className="AboutUs-Home-Box2">
                <p className="AboutUs-Home-Text3">Shop Now</p>
              </div>
            </Link>
          </div>

          <img className="AboutUs-Box-Img2" src={Img4} alt="" />
        </div>
      </div>
      <div style={{height:'30px', backgroundColor: "#fbfbfb" }}/>
      {!hide && <Footer />}
    </div>
  );
}
