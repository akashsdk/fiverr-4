import React, { useState } from "react";
import "./ShopCart.css";
import Header from "./Header";
import Footer from "./Footer";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Cactus1.jpeg";
import Img3 from "../Img/Indoor1.jpeg";

export default function ShopCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Desert Rose", price: 26.0, quantity: 1, image: Img1 },
    { id: 2, name: "Grafted Cactus", price: 80.0, quantity: 1, image: Img2 },
    { id: 3, name: "Aluminum Plant", price: 32.0, quantity: 1, image: Img3 },
  ]);

  const handleIncrement = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the cart?`)) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="ShopCart-Body">
        <p className="ShopCart-Text1">Cart</p>
        <div className="ShopCart-Box">
          <div className="ShopCart-Left-Box">
            <div className="ShopCart-Left-Box2">
              <div style={{ width: "10%" }} />
              <p className="ShopCart-Left-Text1">Product</p>
              <p></p>
              <p className="ShopCart-Left-Text1">Price</p>
              <p></p>
              <p className="ShopCart-Left-Text1">Quantity</p>
              <p className="ShopCart-Left-Text1">Subtotal</p>
            </div>

            {cartItems.map((item) => (
              <div className="ShopCart-Left-Box3" key={item.id}>
                <div className="ShopCart-Left-Div2">
                  <img className="ShopCart-Left-Img" src={item.image} alt={item.name} />
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
                  <DeleteOutlined className="ShopCart-Left-Icon" onClick={() => handleDelete(item.id, item.name)} />
                </div>
              </div>
            ))}

            <div className="ShopCart-Left-Div3">
              <p className="ShopCart-Left-Text1">Total({totalItems})</p>
              <p className="ShopCart-Left-Text1">${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          <div className="ShopCart-Right-Box">Right side</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
