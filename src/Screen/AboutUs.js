import React from "react";
import "./AboutUs.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function AboutUs({ hide }) {
  return (
    <div style={{ width: "100%" }}>
      {!hide && <Header />}
      <div style={{backgroundColor:'#fff', color:'red'}}>AboutUs</div>
      {!hide && <Footer />}
    </div>
  );
}
