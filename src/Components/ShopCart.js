import React, { useState } from "react";
import "./ShopCart.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Cactus1.jpeg";
import Img3 from "../Img/Indoor1.jpeg";

import { Link } from "react-router-dom";

export default function ShopCart() {
  const handleGoBack = () => {
    window.history.back(); 
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Desert Rose", price: 26.0, quantity: 1, image: Img1 },
    { id: 2, name: "Grafted Cactus", price: 80.0, quantity: 1, image: Img2 },
    { id: 3, name: "Aluminum Plant", price: 32.0, quantity: 1, image: Img3 },
  ]);
  const [couponVisible, setCouponVisible] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));
  const [rightBoxTotal, setRightBoxTotal] = useState(
    calculateTotalPrice(cartItems)
  );
  const [couponError, setCouponError] = useState(false);

  function calculateTotalPrice(items) {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    let discount = 0;
    if (couponCode === "greenery") {
      discount = 10;
    } else if (couponCode === "akash") {
      discount = 20;
    }
    return subtotal - discount;
  }

  const handleIncrement = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems));
    setRightBoxTotal(calculateTotalPrice(updatedCartItems));
  };

  const handleDecrement = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems));
    setRightBoxTotal(calculateTotalPrice(updatedCartItems));
  };

  const handleDelete = (id, name) => {
    if (
      window.confirm(`Are you sure you want to remove ${name} from the cart?`)
    ) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      setTotalPrice(calculateTotalPrice(updatedCartItems));
      setRightBoxTotal(calculateTotalPrice(updatedCartItems));
    }
  };

  const applyCoupon = () => {
    if (couponCode === "greenery" || couponCode === "akash") {
      setRightBoxTotal(calculateTotalPrice(cartItems));
      setCouponError(false);
    } else {
      setCouponError(true);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="ShopCart-Body">
        <div className="ShopCart-Top-Box">
          <ArrowLeftOutlined
            className="ShopCart-Top-Icon"
            onClick={handleGoBack}
          />
          <p className="ShopCart-Text1">Cart</p>
        </div>
        <div className="ShopCart-Box">
          <div className="ShopCart-Left-Box">
            <div className="ShopCart-Left-Box2">
              <div style={{ width: "10%" }}></div>
              <p className="ShopCart-Left-Text1">Product</p>
              <p className="ShopCart-Left-Text1">Price</p>
              <p className="ShopCart-Left-Text1">Quantity</p>
              <p className="ShopCart-Left-Text1">Subtotal</p>
            </div>

            {cartItems.map((item) => (
              <div className="ShopCart-Left-Box3" key={item.id}>
                <div className="ShopCart-Left-Div2">
                  <img
                    className="ShopCart-Left-Img"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                </div>
                <p>${item.price.toFixed(2)}</p>
                <div className="ShopCart-Left-Div1">
                  <MinusOutlined onClick={() => handleDecrement(item.id)} />
                  <p>{item.quantity}</p>
                  <PlusOutlined onClick={() => handleIncrement(item.id)} />
                </div>
                <div className="ShopCart-Left-Div2">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <DeleteOutlined
                    className="ShopCart-Left-Icon"
                    onClick={() => handleDelete(item.id, item.name)}
                  />
                </div>
              </div>
            ))}

            <div className="ShopCart-Left-Div3">
              <p className="ShopCart-Left-Text1">
                Total(
                {cartItems.reduce((total, item) => total + item.quantity, 0)})
              </p>
              <p className="ShopCart-Left-Text1">${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          <div className="ShopCart-Right-Box">
            <div className="ShopCart-Right-Box2">
              <p className="ShopCart-Left-Text1">Cart Totals</p>
            </div>

            <div className="ShopCart-Right-Box3">
              <p>Subtotal</p>
              <p>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                Item
              </p>
            </div>

            <div className="ShopCart-Right-Box3">
              <p>Total </p>
              <p>$ {rightBoxTotal}.00 </p>
            </div>

            <p
              style={{
                color: couponError ? "red" : "rgb(27, 180, 129)",
                cursor: "pointer",
                marginTop: "25px",
              }}
              onClick={() => setCouponVisible(!couponVisible)}
            >
              Have a coupon?
            </p>

            {couponVisible && (
              <div style={{ width: "100%" }}>
                <div className="ShopCart-Right-Box4">
                  <input
                    className="ShopCart-Right-Input"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                  />
                  <button
                    className="ShopCart-Right-Button"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>
                {couponError ? (
                  <p style={{ color: "red" }}>
                    {" "}
                    Your coupon does not exist!
                    <br />
                    Plz Apply 'greenery' or 'akash'.
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            )}

            <Link to="/Checkout" className="ShopCart-Right-Link">
              <p>Check Out</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
