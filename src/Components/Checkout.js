import React, { useState, useEffect } from "react";
import "./Checkout.css";

import Header from "./Header";
import Footer from "./Footer";

import {
  DownOutlined,
  UpOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import { FloatButton } from "antd";

import countryOptions from "../Data/countries.json";

import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Cactus1.jpeg";
import Img3 from "../Img/Indoor1.jpeg";
import { Link } from "react-router-dom";

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

  //showLoginInfo
  const [showLoginInfo, setShowLoginInfo] = useState(false);

  const toggleLoginInfo = () => {
    setShowLoginInfo(!showLoginInfo);
  };

  // Add Coupon
  const [showCoupon, setAddCoupon] = useState(false);

  const setShowCoupon = () => {
    setAddCoupon(!showCoupon);
  };

  //Input
  // Password
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Username or Email Address
  const [inputValue1, setInputValue1] = useState("");
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  // First Name
  const [inputValue2, setInputValue2] = useState("");
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  // Last Name
  const [inputValue3, setInputValue3] = useState("");
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };

  //Company name
  const [inputValue4, setInputValue4] = useState("");
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
  };

  //Country / Region
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  //Street Address
  const [selectedCountry2, setSelectedCountry2] = useState("");

  const handleChange2 = (selectedOption) => {
    setSelectedCountry2(selectedOption);
  };

  //Town / City
  const [selectedCountry3, setSelectedCountry3] = useState("");

  const handleChange3 = (selectedOption) => {
    setSelectedCountry3(selectedOption);
  };

  //District
  const [selectedCountry4, setSelectedCountry4] = useState("");

  const handleChange4 = (selectedOption) => {
    setSelectedCountry4(selectedOption);
  };

  //Postcode / ZIP Code
  const [inputValue7, setInputValue7] = useState("");

  const handleInputChange7 = (event) => {
    setInputValue7(event.target.value);
  };

  //Phone
  const [inputValue5, setInputValue5] = useState("");

  const handleInputChange5 = (event) => {
    setInputValue5(event.target.value);
  };

  //Other information
  const [inputValue6, setInputValue6] = useState("");

  const handleInputChange6 = (event) => {
    setInputValue6(event.target.value);
  };

  //Coupon Code
  const [inputValue8, setInputValue8] = useState("");

  const handleInputChange8 = (event) => {
    setInputValue8(event.target.value);
  };
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

            <div className="Checkout-Left-Box1">
              <p className="Checkout-Left-Text1">Already have an account?</p>
              <button
                className="Checkout-Left-Button"
                onClick={toggleLoginInfo}
              >
                Log in
              </button>
            </div>
            <div className="Checkout-Left-Line" />

            <div className="password-input-container">
              <input
                type="email"
                value={inputValue1}
                onChange={handleInputChange1}
                className="password-input"
                placeholder="Username or Email Address*"
              />
            </div>

            {showLoginInfo && (
              <div style={{ width: "100%" }}>
                <div className="password-input-container">
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={inputValue}
                      onChange={handleInputChange}
                      className="password-input"
                      placeholder="Enter your password"
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOutlined className="Checkout-Left-Icon" />
                      ) : (
                        <EyeInvisibleOutlined className="Checkout-Left-Icon" />
                      )}
                    </span>
                  </div>
                  <p
                    className={`input-label ${
                      inputValue.length > 0 ? "active" : ""
                    }`}
                  >
                    Password
                  </p>
                </div>

                <div className="Checkout-Left-Box1">
                  <button className="Checkout-Left-Button2">LogIn</button>

                  <button
                    className="Checkout-Left-Button"
                    onClick={toggleLoginInfo}
                  >
                    Lost Your Password?
                  </button>
                </div>
                <div className="Checkout-Left-Box1">
                  <p style={{ opacity: ".7", marginBottom: "10px" }}>
                    Login is optional, you can continue with your order below.
                  </p>
                </div>
              </div>
            )}

            <div className="Checkout-Left-Box1">
              <p className="Checkout-Left-Text1">Billing details</p>
            </div>
            <div className="Checkout-Left-Line" />

            <div className="Checkout-Left-Box2">
              <div className="Checkout-Left-Box3">
                <input
                  type="email"
                  value={inputValue2}
                  onChange={handleInputChange2}
                  className="password-input"
                  placeholder="First Name*"
                />
                <p
                  className={`input-label ${
                    inputValue2.length > 0 ? "active" : ""
                  }`}
                >
                  First Name
                </p>
              </div>

              <div className="Checkout-Left-Box3">
                <input
                  type="email"
                  value={inputValue3}
                  onChange={handleInputChange3}
                  className="password-input"
                  placeholder="Last Name*"
                />
                <p
                  className={`input-label ${
                    inputValue3.length > 0 ? "active" : ""
                  }`}
                >
                  Last Name
                </p>
              </div>
            </div>

            <div className="password-input-container">
              <input
                type="email"
                value={inputValue4}
                onChange={handleInputChange4}
                className="password-input"
                placeholder="Company name (Optional)"
              />
              <p
                className={`input-label ${
                  inputValue4.length > 0 ? "active" : ""
                }`}
              >
                Company name
              </p>
            </div>

            <div className="password-input-container">
              <select
                value={selectedCountry}
                onChange={handleChange}
                className={`Checkout-Select ${selectedCountry ? "active" : ""}`}
              >
                <option value="" disabled>
                  Country / Region*
                </option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label
                className={`input-label ${selectedCountry ? "active" : ""}`}
              >
                Country / Region
              </label>
            </div>

            <div className="Checkout-Left-Box2">
              <div className="Checkout-Left-Box3">
                <select
                  value={selectedCountry2}
                  onChange={handleChange2}
                  className={`Checkout-Select ${
                    selectedCountry ? "active" : ""
                  }`}
                >
                  <option value="" disabled>
                    Street Address*
                  </option>
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label
                  className={`input-label ${selectedCountry2 ? "active" : ""}`}
                >
                  Street Address
                </label>
              </div>

              <div className="Checkout-Left-Box3">
                <select
                  value={selectedCountry3}
                  onChange={handleChange3}
                  className={`Checkout-Select ${
                    selectedCountry3 ? "active" : ""
                  }`}
                >
                  <option value="" disabled>
                    Town / City*
                  </option>
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label
                  className={`input-label ${selectedCountry3 ? "active" : ""}`}
                >
                  Town / City
                </label>
              </div>
            </div>

            <div className="Checkout-Left-Box2">
              <div className="Checkout-Left-Box3">
                <select
                  value={selectedCountry4}
                  onChange={handleChange4}
                  className={`Checkout-Select ${
                    selectedCountry ? "active" : ""
                  }`}
                >
                  <option value="" disabled>
                    District*
                  </option>
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label
                  className={`input-label ${selectedCountry4 ? "active" : ""}`}
                >
                  District
                </label>
              </div>

              <div className="Checkout-Left-Box3">
                <input
                  type="email"
                  value={inputValue7}
                  onChange={handleInputChange7}
                  className="password-input"
                  placeholder="Postcode / ZIP (Optional)"
                />
                <p
                  className={`input-label ${
                    inputValue7.length > 0 ? "active" : ""
                  }`}
                >
                  Postcode / ZIP
                </p>
              </div>
            </div>

            <div className="password-input-container">
              <input
                type="phone"
                value={inputValue5}
                onChange={handleInputChange5}
                className="password-input"
                placeholder="Phone*"
              />
              <p
                className={`input-label ${
                  inputValue5.length > 0 ? "active" : ""
                }`}
              >
                Phone
              </p>
            </div>

            <div className="Checkout-Left-Box1">
              <p className="Checkout-Left-Text1">Additional information</p>
            </div>
            <div className="Checkout-Left-Line" />

            <div className="password-input-container">
              <input
                type="phone"
                value={inputValue6}
                onChange={handleInputChange6}
                className="password-input"
                placeholder="Other information (Optional)"
              />
              <p
                className={`input-label ${
                  inputValue6.length > 0 ? "active" : ""
                }`}
              >
                Other information
              </p>
            </div>

            <button className="Checkout-coupon-Button" onClick={setShowCoupon}>
              Have a coupon?
            </button>

            {showCoupon && (
              <div className="Checkout-coupon-Box">
                <div className="password-input-container">
                  <input
                    type="phone"
                    value={inputValue8}
                    onChange={handleInputChange8}
                    className="password-input"
                    placeholder="Coupon Code"
                  />
                  <p
                    className={`input-label ${
                      inputValue8.length > 0 ? "active" : ""
                    }`}
                  >
                    Coupon Code
                  </p>
                </div>

                <button className="Checkout-coupon-Button2"> Apply</button>
              </div>
            )}

            <div className="Checkout-Left-Box1">
              <p className="Checkout-Left-Text1">Payment</p>
            </div>
            <div className="Checkout-Left-Line" />

            <div className="Checkout-Payment-Box">
              <WalletOutlined className="Checkout-Payment-Icon" />
              <p className="Checkout-Payment-Text">
                Sorry, it seems that there are no available payment methods.
                Please contact us if you require assistance or wish to make
                alternate arrangements.
                <br />
                Only cash on delivery is available now.
              </p>
            </div>

            <Link to="/PlaceOrder" style={{width:'100%'}}>
              <button className="Checkout-Button">Place Order</button>
            </Link>
          </div>

          <div className="Checkout-Right">
            <p className="Checkout-Text2">Your order</p>
            <div className="Checkout-Left-Line" />

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
      <FloatButton.BackTop className="backTop" visibilityHeight={0} />
    </div>
  );
}
