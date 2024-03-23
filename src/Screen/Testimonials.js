import React from "react";
import "./Testimonials.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Testimonials({hide}) {
  return (
    <div style={{ width: "100%" }}>
      {!hide && <Header />}
      <div style={{backgroundColor:'#fff', color:'red'}}>Testimonials</div>
      {!hide && <Footer />}
    </div>
  );
}
