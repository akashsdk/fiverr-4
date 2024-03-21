import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

import ProductsCart from "../Cart/ProductsCart";

import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Bonsai-2.jpeg";
import Img3 from "../Img/Bonsai-3.jpeg";
import Img4 from "../Img/Bonsai-4.jpeg";

export default function Shop() {
  return (
    <div className="Shop-Body">
      <div className="Shop-Left">
        <div className="Shop-Search-Div">
          <input className="Shop-Input" placeholder="Search Products..." />
          <button className="Shop-Search-Button">
            <p className="Shop-Search-Text">Search</p>
          </button>
        </div>

        <p className="Shop-Left-Text">Categories</p>

        <div className="Shop-Left-Div">
          <button className="Shop-Left-Button">
            <p className="Shop-Left-Text2">Bonsai</p>
            <p className="Shop-Left-Text3">[4]</p>
          </button>

          <button className="Shop-Left-Button">
            <p className="Shop-Left-Text2">Cactus</p>
            <p className="Shop-Left-Text3">[4]</p>
          </button>

          <button className="Shop-Left-Button">
            <p className="Shop-Left-Text2">Indoor Plants</p>
            <p className="Shop-Left-Text3">[5]</p>
          </button>

          <button className="Shop-Left-Button">
            <p className="Shop-Left-Text2">Succulent</p>
            <p className="Shop-Left-Text3">[4]</p>
          </button>
        </div>

        <p className="Shop-Left-Text">Filter By Price</p>
      </div>

      <div className="Shop-Right">
        <div className="Shop-RightBox">
          <div>
            <Link to="/">/Home</Link>
            <Link style={{ marginLeft: "5px" }} to="/Shop">
              /Shop{" "}
            </Link>
          </div>

          <p className="Shop-Right-Text">All Products</p>

          <div className="Shop-Right-Div">
            <ProductsCart
              image={Img1}
              name="Product Name"
              price="22.0"
              rating={4}
            />
            <ProductsCart img={Img2} />
            <ProductsCart img={Img3} />
            <ProductsCart img={Img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
