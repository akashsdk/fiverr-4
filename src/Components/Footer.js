import React from "react";
import "./Footer.css";

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="Footer-Body">
      <div className="Footer-Box">
        <div className="Footer-Box1">
          <p className="Footer-Box-text1">Address</p>
          <p className="Footer-Box-text2">123 Fifth Avenue, USA</p>
        </div>

        <div className="Footer-Box2">
          <p className="Footer-Box-text3">Get In Touch</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div style={{ display: "flex" }}>
            <button className="Footer-Button">
              <FacebookOutlined className="Footer-Icon" />
            </button>

            <button className="Footer-Button">
              <TwitterOutlined className="Footer-Icon" />
            </button>

            <button className="Footer-Button">
              <InstagramOutlined className="Footer-Icon" />
            </button>

            <button className="Footer-Button">
              <YoutubeOutlined className="Footer-Icon" />
            </button>
          </div>

          <p className="Footer-Box-text4">Call Us</p>

          <p className="Footer-Box-text2">123-456-7890</p>
        </div>

        <div className="Footer-Box3">
          <p className="Footer-Box-text1">Email:</p>
          <p className="Footer-Box-text2">info@greenery.com</p>
        </div>gff
      </div>
      <div className="Footer-div">
        <p className="Footer-Box-text5">
          Copyright &copy; {new Date().getFullYear()} Greenery
          <br />
          All rights reserved
        </p>

        <p className="Footer-Box-text6">Powered by Greenery.</p>
      </div>
    </div>
  );
}
