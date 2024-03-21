import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="Header-Body">
      <div className="Header-box1">
        <Link to="/">
          <p style={{ fontSize: "30px" }}>Shop Name</p>
        </Link>
      </div>

      <div className="Header-box2">
        <Link to="/Home" className="Header-Link">
          <p className="Header-Text">Home</p>
        </Link>
        <Link to="/Shop" className="Header-Link">
          <p className="Header-Text">Shop</p>
        </Link>
        <Link to="AboutUs" className="Header-Link">
          <p className="Header-Text">About Us</p>
        </Link>
        <Link to="/Testimonials" className="Header-Link">
          <p className="Header-Text">Testimonials</p>
        </Link>
        <Link to="/Cart" className="Header-Link">
          <ShoppingCartOutlined className="Header-Icon" />
          <div className="Header-Icon-div">
            <p className="Header-Icon-Text">0</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
