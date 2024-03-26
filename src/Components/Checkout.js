import React, { useState, useEffect } from "react";
import "./Checkout.css";

import Header from "./Header";
import Footer from "./Footer";

import { DownOutlined, UpOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Cactus1.jpeg";
import Img3 from "../Img/Indoor1.jpeg";

export default function Checkout() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  const toggleOrderSummary = () => {
    setOrderSummaryOpen(!orderSummaryOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setOrderSummaryOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="Checkout-Body">
        
        <div className="ShopCart-Top-Box">
          <ArrowLeftOutlined
            className="ShopCart-Top-Icon"
            onClick={handleGoBack}
          />
          <p className="Checkout-Text1">Checkout</p>
        </div>

        <div className="Checkout-Top-Box">
          <button className="Checkout-Top-Button" onClick={toggleOrderSummary}>
            {orderSummaryOpen ? (
              <div style={{ display: "flex" }}>
                <p className="Checkout-Right-Text1">Hide Order Summary</p>
                <UpOutlined className="Checkout-Top-Icon" />
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <p className="Checkout-Right-Text1">Show Order Summary</p>
                <DownOutlined className="Checkout-Top-Icon" />
              </div>
            )}

            <p className="Checkout-Right-Text1">$188.00</p>
          </button>
        </div>

        {orderSummaryOpen && (
          <div className="Checkout-Right-Div1">
            <div className="Checkout-Right-Div2">
              <p className="Checkout-Right-Text1">Product</p>
              <p className="Checkout-Right-Text1">Subtotal</p>
            </div>

            <div className="Checkout-Right-Div5">
              <div className="Checkout-Right-Div4">
                <img className="Checkout-Right-Img" src={Img1} alt="" />
                <p>Desert Rose × 1</p>
              </div>

              <p>$26.00</p>
            </div>

            <div className="Checkout-Right-Div5">
              <div className="Checkout-Right-Div4">
                <img className="Checkout-Right-Img" src={Img2} alt="" />
                <p>Grafted Cactus × 1</p>
              </div>

              <p>$80.00</p>
            </div>

            <div className="Checkout-Right-Div5">
              <div className="Checkout-Right-Div4">
                <img className="Checkout-Right-Img" src={Img3} alt="" />
                <p>Aluminum Plant × 1</p>
              </div>

              <p>$32.00</p>
            </div>

            <div className="Checkout-Right-Div2">
              <p>Subtotal</p>
              <p>$138.00</p>
            </div>

            <div className="Checkout-Right-Div2">
              <p>Shipping Free</p>
              <p>$50.00</p>
            </div>

            <div className="Checkout-Right-Div3">
              <p className="Checkout-Right-Text2">Total</p>
              <p className="Checkout-Right-Text2">$188.00</p>
            </div>
          </div>
        )}

        <div className="Checkout-Box">
          <div className="Checkout-Left">
            <p className="Checkout-Text2">Customer information</p>
          </div>

          <div className="Checkout-Right">
            <p className="Checkout-Text2">Your order</p>

            <div className="Checkout-Right-Div1">
              <div className="Checkout-Right-Div2">
                <p className="Checkout-Right-Text1">Product</p>
                <p className="Checkout-Right-Text1">Subtotal</p>
              </div>

              <div className="Checkout-Right-Div5">
                <div className="Checkout-Right-Div4">
                  <img className="Checkout-Right-Img" src={Img1} alt="" />
                  <p>Desert Rose × 1</p>
                </div>

                <p>$26.00</p>
              </div>

              <div className="Checkout-Right-Div5">
                <div className="Checkout-Right-Div4">
                  <img className="Checkout-Right-Img" src={Img2} alt="" />
                  <p>Grafted Cactus × 1</p>
                </div>

                <p>$80.00</p>
              </div>

              <div className="Checkout-Right-Div5">
                <div className="Checkout-Right-Div4">
                  <img className="Checkout-Right-Img" src={Img3} alt="" />
                  <p>Aluminum Plant × 1</p>
                </div>

                <p>$32.00</p>
              </div>

              <div className="Checkout-Right-Div2">
                <p>Subtotal</p>
                <p>$138.00</p>
              </div>

              <div className="Checkout-Right-Div2">
                <p>Shipping Free</p>
                <p>$50.00</p>
              </div>

              <div className="Checkout-Right-Div3">
                <p className="Checkout-Right-Text2">Total</p>
                <p className="Checkout-Right-Text2">$188.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
