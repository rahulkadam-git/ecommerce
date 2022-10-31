import { Link } from "react-router-dom";
import React from "react";
import "./buynow.css";

function Buynow({ subTotalValue, items }) {
  return (
    <div className="buyNow">
      <div className="subtotal">
        <h4>
          Subtotal ({items.length}items) : {subTotalValue}
        </h4>
      </div>
      <div>
        <Link to="/order">
          <button className="buynow-btn">Buy now</button>
        </Link>
      </div>
    </div>
  );
}

export default Buynow;
