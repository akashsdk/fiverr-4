import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Header2.css";
import { Button, Drawer, Space, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  DownOutlined,
  UpOutlined,
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
  MenuOutlined,
  CloseOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Cactus1.jpeg";
import Img3 from "../Img/Indoor1.jpeg";

import Logo from "../Icon/Logo and Icon W.png";

export default function Header2({ setPage }) {
  const navigate = useNavigate();

  const handleCategoryClick = (pageValue) => {
    navigate("/Shop");
    setPage(pageValue);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Count and Notification
  const maxCount = 10;
  const minCount = 1;

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  // Shopping cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Desert Rose",
      price: 26.0,
      quantity: 1,
      img: Img1,
    },
    {
      id: 2,
      name: "Grafted Cactus",
      price: 80.0,
      quantity: 1,
      img: Img2,
    },
    {
      id: 3,
      name: "Aluminum Plant",
      price: 32.0,
      quantity: 1,
      img: Img3,
    },
    // Add more items as needed
  ]);

  const handleIncrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity < maxCount
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > minCount
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    openNotificationWithIcon("success", "Item removed from cart!");
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // Calculate total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //set menu opthion
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // menu-Box

  const [menuOpen2, setMenuOpen2] = useState(false);

  const toggleMenu2 = () => {
    setMenuOpen2(!menuOpen2);
  };
  return (
    <div className="Header-Body">
      <div className="Header2-Box">
        <div className="Header-box1">
          <Link to="/">
            <img className="Header-ImgLogo" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="Header-box2">
          <Link to="/" className="Header-Link">
            <p className="Header-Text">Home</p>
          </Link>

          <div className="dropdown">
            <Link
              to="/Shop"
              className="Header-Link"
              onClick={() => handleCategoryClick(1)}
            >
              <p className="Header-Text">Shop</p>
            </Link>
            <DownOutlined className="headerBox-2-Icon" />
            <UpOutlined className="headerBox-2-Icon2" />
            <div
              className="dropdown-content"
              style={{ backgroundColor: "transparent" }}
            >
              <Link
                to="/Shop-Bonsai"
                className="dropdown-content-Link"
                onClick={() => handleCategoryClick(2)}
              >
                <p className="dropdown-content-Text">Bonsai</p>
              </Link>
              <Link
                to="/Shop-Cactus"
                className="dropdown-content-Link"
                onClick={() => handleCategoryClick(3)}
              >
                <p className="dropdown-content-Text">Cactus</p>
              </Link>
              <Link
                to="/Shop-IndoorPlants"
                className="dropdown-content-Link"
                onClick={() => handleCategoryClick(4)}
              >
                <p className="dropdown-content-Text"> Indoor Plants</p>
              </Link>
              <Link
                to="/Shop-Succulent"
                className="dropdown-content-Link"
                onClick={() => handleCategoryClick(5)}
              >
                <p className="dropdown-content-Text">Succulent</p>
              </Link>
            </div>
          </div>
          <Link to="/AboutUs" className="Header-Link">
            <p className="Header-Text">About Us</p>
          </Link>
          <Link to="/Testimonials" className="Header-Link">
            <p className="Header-Text">Testimonials</p>
          </Link>
          <button onClick={showDrawer} className="Header-Link">
            <ShoppingCartOutlined className="Header2-Icon" />
            <div className="Header-Icon-div">
              <p className="Header-Icon-Text">{cartItems.length}</p>
            </div>
          </button>
        </div>

        <div className="Header-box3">
          {menuOpen ? (
            <div
              style={{
                transition: "height 0.3s ease-in-out",
              }}
            >
              <CloseOutlined
                className="Header-box3-Icon"
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <MenuOutlined className="Header-box3-Icon" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {menuOpen && !isMobile && (
        <div className="Header2-box3-Div">
          <Link to="/" className="Header-Link">
            <p className="Header2-Text">Home</p>
          </Link>

          <div className="Header-box3-Div2">
            <Link
              to="/Shop"
              className="Header-Link"
              onClick={() => handleCategoryClick(1)}
            >
              <p className="Header2-Text">Shop</p>
            </Link>

            {menuOpen2 ? (
              <div style={{ transition: "height 0.3s ease-in-out" }}>
                <DownOutlined
                  onClick={toggleMenu2}
                  className="Header-box3-Icon2"
                />
              </div>
            ) : (
              <UpOutlined onClick={toggleMenu2} className="Header-box3-Icon2" />
            )}
          </div>

          {menuOpen2 ? (
            <></>
          ) : (
            <div className="Header-box3-Div3">
              <Link
                to="/Shop-Bonsai"
                className="Header-Link"
                onClick={() => handleCategoryClick(2)}
              >
                <RightOutlined />
                <p className="dropdown-content-Text">Bonsai</p>
              </Link>
              <Link
                to="/Shop-Cactus"
                className="Header-Link"
                onClick={() => handleCategoryClick(3)}
              >
                <RightOutlined />
                <p className="dropdown-content-Text">Cactus</p>
              </Link>
              <Link
                to="/Shop-IndoorPlants"
                className="Header-Link"
                onClick={() => handleCategoryClick(4)}
              >
                <RightOutlined />
                <p className="dropdown-content-Text"> Indoor Plants</p>
              </Link>
              <Link
                to="/Shop-Succulent"
                className="Header-Link"
                onClick={() => handleCategoryClick(5)}
              >
                <RightOutlined />
                <p className="dropdown-content-Text">Succulent</p>
              </Link>
            </div>
          )}

          <Link to="/AboutUs" className="Header-Link">
            <p className="Header2-Text">About Us</p>
          </Link>

          <Link to="/Testimonials" className="Header-Link">
            <p className="Header2-Text">Testimonials</p>
          </Link>
        </div>
      )}

      <Drawer
        title="Shopping Cart"
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <div className="Header-Drawer-Body">
          {cartItems.map((item) => (
            <div key={item.id} className="Header-Drawer-Box">
              <div style={{ display: "flex" }}>
                <img
                  src={item.img}
                  alt="Drawer"
                  className="Header-Drawer-Img"
                />
                <div className="Header-Drawer-Div1">
                  <p className="Header-Drawer-Text1">{item.name}</p>
                  <div className="Header-Drawer-Div">
                    <MinusOutlined
                      onClick={() => handleDecrement(item.id)}
                      className="Header-Drawer-Icon2"
                    />
                    <p className="Header-Drawer-Text2">{item.quantity}</p>
                    <PlusOutlined
                      onClick={() => handleIncrement(item.id)}
                      className="Header-Drawer-Icon2"
                    />
                  </div>
                </div>

                <div className="Header-Drawer-Div2">
                  <CloseCircleOutlined
                    onClick={() => handleDeleteItem(item.id)}
                    className="Header-Drawer-Icon1"
                  />
                  <p className="Header-Drawer-Text3">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="Header-Drawer-Line" />
            </div>
          ))}
          <div className="Header-Drawer-Box2">
            <div className="Header-Drawer-Line" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="Header-Drawer-Text4">Total Amount({totalItems}):</p>
              <p className="Header-Drawer-Text5">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="Header-Drawer-Line" />
            <div style={{ height: "30px" }} />
            <Link to="/Cart">
              <div className="Header-Drawer-Link">
                <p className="Header-Drawer-Text6">View Cart</p>
              </div>
            </Link>

            <Link to="/Checkout">
              <div className="Header-Drawer-Link">
                <p className="Header-Drawer-Text6">Checkout</p>
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
