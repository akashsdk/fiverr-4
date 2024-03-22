import React, { useState, useEffect } from "react";
import "./ProductsCart.css";

import { Tooltip } from "antd";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  MinusOutlined,
  PlusOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import { Button, Drawer, Space, notification } from "antd";
import { Link } from "react-router-dom";

export default function ProductsCart({
  image,
  percentage,
  name,
  price,
  rating,
  shippingFee,
  category,
}) {
  const maxRating = 5;

  const [result, setResult] = useState("");

  useEffect(() => {
    if (percentage === "" || price === "") {
      setResult("");
      return;
    }

    const percent = parseFloat(percentage);
    const num = parseFloat(price);

    if (isNaN(percent) || isNaN(num)) {
      setResult("");
      return;
    }

    const calculatedResult = Math.round(num - (percent / 100) * num);
    setResult(calculatedResult);
  }, [percentage, price]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //   Count and Notification
  const [count, setCount] = useState(1);
  const maxCount = 10;
  const minCount = 1;

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
    } else {
      openNotificationWithIcon("warning", "Maximum value reached (10)");
    }
  };

  const handleDecrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    } else {
      openNotificationWithIcon("warning", "Minimum value reached (0)");
    }
  };

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  return (
    <div className="Products-Body">
      <div className="Products-Per-Div">
        <p>{percentage}% Off</p>
      </div>

      <img className="Products-Img" src={image} alt="cart" />
      
      <div className="Products-Per-Div2">
        <Tooltip
          placement="leftTop"
          title="Add to cart"
          color="rgb(27, 180, 129)"
        >
          <Link
            to={{
              pathname: "/Cart",
              state: {
                image,
                name,
                price,
                shippingFee,
                category,
              },
            }}
          >
            <button className="Products-Button">
              <ShoppingCartOutlined className="Products-Icon" />
            </button>
          </Link>
        </Tooltip>

        <Tooltip
          placement="leftTop"
          title="Quick view"
          color="rgb(27, 180, 129)"
        >
          <button className="Products-Button" onClick={showDrawer}>
            <EyeOutlined className="Products-Icon" />
          </button>
        </Tooltip>
      </div>

      <Link
        to={{
          pathname: "/Cart",
          state: {
            image,
            name,
            price,
            shippingFee,
            category,
          },
        }}
        className="Products-Div"
      >
        <p className="Products-Text1">{name}</p>

        <div className="cart-item__rating">
          {Array.from({ length: maxRating }, (_, index) => (
            <span
              key={index}
              className="cart-item__star"
              style={{ color: index < rating ? "#f7d417" : "#999" }}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <p className="Products-Text2">${price}</p>
          <p className="Products-Text3">${result}.00</p>
        </div>
      </Link>

      <Drawer
        title="Quick view"
        placement="right"
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
        width={"100%"}
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          borderRadius: "5px",
          height: "70vh",
          marginTop: "15vh",
        }}
      >
        <div className="Products-Drawer-Box">
          <div className="Products-Drawer-Left">
            <img className="Products-Drawer-Img" src={image} alt="cart" />
          </div>
          <div className="Products-Drawer-Right">
            <p className="Products-Drawer-Text1">{name}</p>
            <p className="Products-Drawer-Text2">${result}.00</p>
            <div className="Products-Drawer-LineDiv" />
            <div style={{ display: "flex" }}>
              <p>Category:</p>
              <p style={{ color: "rgb(27, 180, 129)" }}>{category}</p>
            </div>
            <p className="Products-Drawer-Text3">
              Free shipping on orders over ${shippingFee}!
            </p>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <CheckCircleOutlined className="Products-Drawer-Icon" />
              <p className="Products-Drawer-Text4">
                No-Risk Money Back Guarantee!
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <CheckCircleOutlined className="Products-Drawer-Icon" />
              <p className="Products-Drawer-Text4">No Hassle Refunds</p>
            </div>

            <div style={{ display: "flex" }}>
              <CheckCircleOutlined className="Products-Drawer-Icon" />
              <p className="Products-Drawer-Text4">Secure Payments</p>
            </div>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <div className="Products-Drawer-Div">
                <MinusOutlined
                  onClick={handleDecrement}
                  className="Products-Drawer-Icon2"
                />
                <p className="Products-Drawer-Text5">{count}</p>
                <PlusOutlined
                  onClick={handleIncrement}
                  className="Products-Drawer-Icon2"
                />
              </div>

              <button className="Products-Drawer-Button">
                <p className="Products-Drawer-Text6">Buy Now</p>
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
