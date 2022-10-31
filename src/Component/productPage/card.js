import React from "react";
import "./card.css";

function card({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.url} alt="product" />
      </div>
      <div className="product-title">{product.title.longTitle}</div>

      <div className="product-cost">
        <h3>₹{product.price.cost}</h3>
        <h6>₹{product.price.mrp}</h6>
      </div>
    </div>
  );
}

export default card;
