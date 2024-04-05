import React, { useState, useEffect } from "react";
import { Progress, Result } from "antd";
import { Link } from "react-router-dom";
import "./PlaceOrder.css";

const twoColors = {
    '0%': 'rgb(255, 4, 4)',
    '50%': '#ffe58f',
    '100%': 'rgb(27, 180, 129)',
};

export default function PlaceOrder() {
  const [redirectCountdown, setRedirectCountdown] = useState(3);
  const [exitCountdown, setExitCountdown] = useState(60);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setRedirectCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const exitTimer = setInterval(() => {
      setExitCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(redirectTimer);
      clearInterval(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (redirectCountdown === 0) {
      // Redirect after 3 seconds
    }
  }, [redirectCountdown]);

  useEffect(() => {
    if (exitCountdown === 0) {
      // Auto-exit after 60 seconds
      window.location.href = "/Shop";
    }
  }, [exitCountdown]);

  const newValue = exitCountdown * 1.667;


  return (
    <div className="PlaceOrder-Body">
      {redirectCountdown > 0 ? (
        <p className="countdown-text">
          Redirecting in {redirectCountdown} seconds...
        </p>
      ) : (
        <Result
          status="success"
          title="Successfully Purchased from Greenery!"
          subTitle="Order number: 2017182818828182881"
          extra={[
            <div key="buttons">
              <p className="PlaceOrder-Text">
                Cloud server configuration takes 1-5 minutes, <br /> Please
                wait! You get an email.
              </p>
              <Link to="/Shop">
                <button className="PlaceOrder-Button2">Buy Again</button>
              </Link>

              <Link to="/">
                <button className="PlaceOrder-Button">Go Back</button>
              </Link>
              
              <p className="PlaceOrder-Text2">
                Auto-exit in {exitCountdown} seconds...
              </p>
              <Progress percent={newValue} strokeColor={twoColors} showInfo={false}/>
            </div>,
          ]}
        />
      )}
    </div>
  );
}
