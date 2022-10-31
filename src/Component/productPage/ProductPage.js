import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./productPage.css";
import { Link } from "react-router-dom";

import Card from "./card.js";

function ProductPage() {
  const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="product-list">
      {allProducts?.map((product, index) => (
        <Link to={`/productdetails/${product?._id}`} key={index}>
          <Card product={product} key={index} />
        </Link>
      ))}
    </div>
  );
}

export default ProductPage;
