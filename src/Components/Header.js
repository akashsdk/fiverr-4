import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";

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
        
        <div className="dropdown">
          <Link to="/Shop" className="Header-Link">
            <p className="Header-Text">Shop</p>
          </Link>
          <DownOutlined className="headerBox-2-Icon" />
          <UpOutlined className="headerBox-2-Icon2" />
          <div className="dropdown-content">
            <Link to="/team-augmentation" className="dropdown-content-Link">
              <p className="dropdown-content-Text">Bonsai</p>
            </Link>
            <Link to="/project-development" className="dropdown-content-Link">
              <p className="dropdown-content-Text">Cactus</p>
            </Link>
            <Link to="/mvp-services" className="dropdown-content-Link">
              <p className="dropdown-content-Text"> Indoor Plants</p>
            </Link>
            <Link to="/offshore-development" className="dropdown-content-Link">
              <p className="dropdown-content-Text">Succulent</p>
            </Link>
          </div>
        </div>
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
