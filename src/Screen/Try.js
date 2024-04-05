import React, { useRef } from "react";
import "./Try.css";

export default function Try() {
  const headerRef = useRef(null);

  const scrollToHeader = () => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button className="box-Button" onClick={scrollToHeader}>
        Back to Top
      </button>

      <div className="box">
        <div className="box-header" ref={headerRef}>
          Header
        </div>
        <div className="box-body">
          {[...Array(20)].map((_, index) => (
            <p key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          ))}
        </div>
        <div className="box-footer">footer</div>
      </div>
    </div>
  );
}
