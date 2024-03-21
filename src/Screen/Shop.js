import React from "react";
import "./Shop.css";

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

        <p>Categories</p>

        <div>
          <button>
            <p>Bonsai</p>
            <p>[4]</p>
          </button>

          <button>
            <p>Cactus</p>
            <p>[4]</p>
          </button>

          <button>
            <p>Indoor Plants</p>
            <p>[5]</p>
          </button>

          <button>
            <p>Succulent</p>
            <p>[4]</p>
          </button>
        </div>

        <p>Filter By Price</p>
      </div>

      <div className="Shop-Right">Right</div>
    </div>
  );
}
