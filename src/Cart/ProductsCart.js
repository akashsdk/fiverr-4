import React from "react";
import "./ProductsCart.css";

export default function ProductsCart({ image, name, price, rating }) {
  return (
    <div className="Products-Body">
      <img className="Products-Img" src={image} alt="cart" />

      <div className="">
        <p className="Products-Text1">{name}</p>
        
        <div className="cart-item__rating">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="cart-item__star">
              &#9733;
            </span>
          ))}
        </div>
        <p className="Products-Text2">${price}</p>
      </div>
    </div>
  );
}
