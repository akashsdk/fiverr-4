import React from "react";
import "./Testimonials.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import TestimonialCart from "../Cart/TestimonialCart";

import Img1 from "../Img/client-1.jpeg";
import Img2 from "../Img/Client-2.jpeg";
import Img3 from "../Img/Client-3.jpeg";
import Img4 from "../Img/Client-4.jpeg";
import Img5 from "../Img/client-5.jpeg";
import Img6 from "../Img/client-6.jpeg";

export default function Testimonials({ hide }) {
  return (
    <div className="Testimonials-Body">
      {!hide && <Header />}
      <div className="Testimonials-Box">
        <div className="Testimonials-Line" />
        <p className="Testimonials-Text">Testimonial</p>
        <p className="Testimonials-Text2">What Our Client Say</p>
        <div className="Testimonials-Div">
          <TestimonialCart
            text="I purchased a stunning succulent from this store, and I couldn't be happier with my decision. The plant arrived in perfect condition and has added a beautiful touch to my home decor. Will definitely be shopping here again."
            name="Jeanice Ford"
            img={Img1}
          />

          <TestimonialCart
            text="I was amazed by the variety of bonsai trees available at this shop. The quality exceeded my expectations, and the customer service was exceptional. Highly recommended for any plant enthusiast."
            name="Katty Pierce"
            img={Img2}
          />
        </div>

        <div className="Testimonials-Div">
          <TestimonialCart
            text="As a cactus lover, I'm thrilled with the diverse selection offered by this shop. Each plant is healthy and well-cared-for, and the packaging ensured safe delivery. A reliable source for all your cactus needs."
            name="Pedro Lima"
            img={Img3}
          />

          <TestimonialCart
            text="I recently bought an indoor plant for my office, and it has truly transformed the space. The plant arrived promptly and was carefully packaged. Excellent service and top-notch products. I'll be a repeat customer for sure."
            name="Jeanice Ford"
            img={Img4}
          />
        </div>

        <div className="Testimonials-Div">
          <TestimonialCart
            text="The bonsai tree I ordered exceeded my expectations in terms of size and quality. It arrived promptly and was expertly packaged to prevent any damage during transit. I'm impressed with the attention to detail and highly recommend this shop."
            name="Rachel T"
            img={Img5}
          />

          <TestimonialCart
            text="I'm delighted with my purchase of indoor plants from this store. The variety is impressive, and the plants arrived healthy and vibrant. The shopping experience was seamless, and I appreciate the personalized care instructions provided. A fantastic place to shop for plant lovers."
            name="David M"
            img={Img6}
          />
        </div>

        <div className="Testimonials-Line" />
      </div>
      {!hide && <Footer />}
    </div>
  );
}
