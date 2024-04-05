import React from "react";
import "./PlaceOrder.css";

import { Result } from "antd";
import { Link } from "react-router-dom";

export default function PlaceOrder() {
  return (
    <div className="PlaceOrder-Body">
      <Result
        status="success"
        title="Successfully Purchased from Greenery!"
        subTitle="Order number: 2017182818828182881"
        extra={[
          <div>
            <p className="PlaceOrder-Text">
              Cloud server configuration takes 1-5 minutes, <br /> Please wait!
              You get email.
            </p>
            <Link to="/">
              <button className="PlaceOrder-Button">Go Back</button>
            </Link>

            <Link to="/Shop">
              <button className="PlaceOrder-Button2">Buy Again</button>
            </Link>
          </div>,
        ]}
      />
    </div>
  );
}
