import React, { useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

import ProductsCart from "../Cart/ProductsCart";

import Img1 from "../Img/Bonsai-1.jpeg";
import Img2 from "../Img/Bonsai-2.jpeg";
import Img3 from "../Img/Bonsai-3.jpeg";
import Img4 from "../Img/Bonsai-4.jpeg";

import Img5 from "../Img/Cactus1.jpeg";
import Img6 from "../Img/Cactus2.jpeg";
import Img7 from "../Img/Cactus3.jpeg";
import Img8 from "../Img/Cactus4.jpeg";

import Img9 from "../Img/Indoor1.jpeg";
import Img10 from "../Img/Indoor2.jpeg";
import Img11 from "../Img/Indoor3.jpeg";
import Img12 from "../Img/Indoor4.jpeg";
import Img13 from "../Img/Indoor5.jpeg";

import Img14 from "../Img/Succulent1.jpeg";
import Img15 from "../Img/Succulent2.jpeg";
import Img16 from "../Img/Succulent3.jpeg";
import Img17 from "../Img/Succulent4.jpeg";

export default function Shop() {
  const [page, setPage] = useState(1);
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
          <button
            className="Shop-Left-Button"
            onClick={() => {
              setPage(1);
            }}
          >
            <p className="Shop-Left-Text2">All Products</p>
            <p className="Shop-Left-Text3">[14]</p>
          </button>

          <button
            className="Shop-Left-Button"
            onClick={() => {
              setPage(2);
            }}
          >
            <p className="Shop-Left-Text2">Bonsai</p>
            <p className="Shop-Left-Text3">[4]</p>
          </button>

          <button
            className="Shop-Left-Button"
            onClick={() => {
              setPage(3);
            }}
          >
            <p className="Shop-Left-Text2">Cactus</p>
            <p className="Shop-Left-Text3">[4]</p>
          </button>

          <button
            className="Shop-Left-Button"
            onClick={() => {
              setPage(4);
            }}
          >
            <p className="Shop-Left-Text2">Indoor Plants</p>
            <p className="Shop-Left-Text3">[5]</p>
          </button>

          <button
            className="Shop-Left-Button"
            onClick={() => {
              setPage(5);
            }}
          >
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

          <div style={{ width: "100%" }}>
            {page === 1 ? (
              <div>
                <p className="Shop-Right-Text">All Products</p>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img1}
                    name="Desert Rose"
                    price="100.00"
                    rating={4}
                    percentage="20"
                    shippingFee="50"
                    category="Bonsai"
                  />
                  <ProductsCart
                    image={Img2}
                    name="Juniper Bonsai"
                    price="120.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Bonsai"
                  />
                  <ProductsCart
                    image={Img3}
                    name="Lemon Bonsai"
                    price="99.50"
                    rating={4}
                    percentage="22"
                    shippingFee="50"
                    category="Bonsai"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img4}
                    name="Periwinkle Bonsai"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Bonsai"
                  />
                   <ProductsCart
                    image={Img5}
                    name="Grafted Cactus"
                    price="32.00"
                    rating={5}
                    percentage="10"
                    shippingFee="50"
                    category="Cactus"
                  />
                  <ProductsCart
                    image={Img6}
                    name="Office Desk Cactus"
                    price="120.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Cactus"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img8}
                    name="Periwinkle Bonsai"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Cactus"
                  />
                   <ProductsCart
                    image={Img9}
                    name="Aluminum Plant"
                    price="50.00"
                    rating={5}
                    percentage="15"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                  <ProductsCart
                    image={Img10}
                    name="Arrowhead"
                    price="32.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                </div>

                <div className="Shop-Right-Div">
                <ProductsCart
                    image={Img11}
                    name="Chinese Evergreen"
                    price="19.50"
                    rating={4}
                    percentage="21"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                  <ProductsCart
                    image={Img12}
                    name="Hanging Weeping Fig"
                    price="199.50"
                    rating={2}
                    percentage="43"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                   <ProductsCart
                    image={Img13}
                    name="Rubber Indoor Plant"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img14}
                    name="Boncellensis Secullant"
                    price="50.00"
                    rating={5}
                    percentage="15"
                    shippingFee="50"
                    category="Succulent"
                  />
                  <ProductsCart
                    image={Img15}
                    name="Crown Of Thorns"
                    price="32.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Succulent"
                  />
                  <ProductsCart
                    image={Img16}
                    name="Gonialoe Variegata"
                    price="19.50"
                    rating={4}
                    percentage="21"
                    shippingFee="50"
                    category="Succulent"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img17}
                    name="Thorny Secculent"
                    price="199.50"
                    rating={2}
                    percentage="43"
                    shippingFee="50"
                    category="Succulent"
                  />
                </div>
              </div>
            ) : page === 2 ? (
              <div>
                <p className="Shop-Right-Text">Bonsai</p>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img1}
                    name="Desert Rose"
                    price="100.00"
                    rating={4}
                    percentage="20"
                    shippingFee="50"
                    category="Bonsai"
                  />
                  <ProductsCart
                    image={Img2}
                    name="Juniper Bonsai"
                    price="120.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Bonsai"
                  />
                  <ProductsCart
                    image={Img3}
                    name="Lemon Bonsai"
                    price="99.50"
                    rating={4}
                    percentage="22"
                    shippingFee="50"
                    category="Bonsai"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img4}
                    name="Periwinkle Bonsai"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Bonsai"
                  />
                </div>
              </div>
            ) : page === 3 ? (
              <div>
                <p className="Shop-Right-Text">Cactus</p>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img5}
                    name="Grafted Cactus"
                    price="32.00"
                    rating={5}
                    percentage="10"
                    shippingFee="50"
                    category="Cactus"
                  />
                  <ProductsCart
                    image={Img6}
                    name="Office Desk Cactus"
                    price="120.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Cactus"
                  />
                  <ProductsCart
                    image={Img7}
                    name="The Evergreen Lush"
                    price="19.50"
                    rating={4}
                    percentage="21"
                    shippingFee="50"
                    category="Cactus"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img8}
                    name="Periwinkle Bonsai"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Cactus"
                  />
                </div>
              </div>
            ) : page === 4 ? (
              <div>
                <p className="Shop-Right-Text">Indoor Plants</p>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img9}
                    name="Aluminum Plant"
                    price="50.00"
                    rating={5}
                    percentage="15"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                  <ProductsCart
                    image={Img10}
                    name="Arrowhead"
                    price="32.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                  <ProductsCart
                    image={Img11}
                    name="Chinese Evergreen"
                    price="19.50"
                    rating={4}
                    percentage="21"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img12}
                    name="Hanging Weeping Fig"
                    price="199.50"
                    rating={2}
                    percentage="43"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                   <ProductsCart
                    image={Img13}
                    name="Rubber Indoor Plant"
                    price="199.50"
                    rating={5}
                    percentage="33"
                    shippingFee="50"
                    category="Indoor Plants"
                  />
                </div>
              </div>
            ) : page === 5 ? (
              <div>
                <p className="Shop-Right-Text">Succulent</p>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img14}
                    name="Boncellensis Secullant"
                    price="50.00"
                    rating={5}
                    percentage="15"
                    shippingFee="50"
                    category="Succulent"
                  />
                  <ProductsCart
                    image={Img15}
                    name="Crown Of Thorns"
                    price="32.00"
                    rating={3}
                    percentage="15"
                    shippingFee="50"
                    category="Succulent"
                  />
                  <ProductsCart
                    image={Img16}
                    name="Gonialoe Variegata"
                    price="19.50"
                    rating={4}
                    percentage="21"
                    shippingFee="50"
                    category="Succulent"
                  />
                </div>

                <div className="Shop-Right-Div">
                  <ProductsCart
                    image={Img17}
                    name="Thorny Secculent"
                    price="199.50"
                    rating={2}
                    percentage="43"
                    shippingFee="50"
                    category="Succulent"
                  />
                </div>
              </div>
            ) : (
              <h1> Error page</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
