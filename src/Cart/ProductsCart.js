import React, { useState, useEffect } from "react";
import "./ProductsCart.css";

import { Tooltip } from "antd";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";

export default function ProductsCart({
  image,
  percentage,
  name,
  price,
  rating,
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

  return (
    <div className="Products-Body">
      <div className="Products-Per-Div">
        <p>{percentage}% Off</p>
      </div>

      <img className="Products-Img" src={image} alt="cart" />
      <div className="Products-Per-Div2">
        <Tooltip placement="leftTop" title="Add to cart" color='rgb(27, 180, 129)'>
          <button className="Products-Button">
            <ShoppingCartOutlined className="Products-Icon" />
          </button>
        </Tooltip>

        <Tooltip placement="leftTop" title="Quick view" color='rgb(27, 180, 129)'>
          <button className="Products-Button">
            <EyeOutlined className="Products-Icon" />
          </button>
        </Tooltip>
      </div>
      <div className="Products-Div">
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
      </div>
    </div>
  );
}
