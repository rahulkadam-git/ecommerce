/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import {
  getProductByIdAction,
  addToCartActions,
} from "../../redux/actions/product.action";
import { getCartDataAction } from "../../redux/actions/product.action";

import "./productInfo.css";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [foundProductById, setFoundProductById] = useState(null);
  const [allProductInCart, setAllProductInCart] = useState(null);

  const [product, setProduct] = useState(null);
  const [productAvailableInCart, setProductAvailableInCart] = useState(false);
  const { productByID, productsInCart } = useSelector(
    (state) => state.products
  );
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(id);
    dispatch(getProductByIdAction(id));
    if (productByID) {
      setProduct(productByID);
    }
  }, []);

  // useEffect(() => {
  //   if (productByID) {
  //     setProduct(productByID);
  //   }
  //   console.log(productByID);
  // }, [productByID]);

  const handleAddToCart = (e, cartItem) => {
    e.preventDefault();
    let userId;
    if (userData) {
      userId = {
        userId: userData.user_id,
      };
    }
    const cartAddItem = {
      cartItem: cartItem,
      userId: userData?.user_id,
    };
    console.log(cartAddItem);
    dispatch(addToCartActions(cartAddItem));
    dispatch(getCartDataAction(userId));
  };
  // console.log(product);
  // useEffect(() => {
  //   if (productsInCart && productByID) {
  //     console.log(productByID);
  //     const productAvail = productsInCart.find(
  //       (prod) => prod._id === productByID._id
  //     );
  //     if (productAvail === undefined) {
  //       setProductAvailableInCart(false);
  //     } else {
  //       setProductAvailableInCart(true);
  //     }
  //     console.log(productAvail);
  //     setProduct(productByID);
  //   }
  // }, [productByID]);

  return (
    <div className="product-info">
      <div className="product-info-left">
        <img src={product?.url} alt="product" />
      </div>
      <div className="product-info-center">
        <div className="product-title">
          <h2>{product?.title?.longTitle}</h2>
          <h4>{product?.title?.shortTitle}</h4>
          <h4 className="mrp">M.R.P : ₹{product?.price?.mrp}</h4>
          <h3>deal price : ₹{product?.price?.cost}</h3>
          <p>
            You save : ₹{product?.price?.mrp - product?.price?.cost}(
            {product?.price?.discount})
          </p>
          <p className="description">
            About product : {product?.description}
            {product?.price?.discount}
          </p>
        </div>
      </div>
      <div className="product-info-right">
        <div className="cost">₹{product?.price?.cost}.00</div>
        <div className="stock">Instock</div>
        <div className="quantity">
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          {productAvailableInCart ? (
            <Link to="/cart">
              <button className="addtocart-btn">Go to cart</button>
            </Link>
          ) : (
            <button
              className="addtocart-btn"
              onClick={(e) => handleAddToCart(e, product?._id)}
            >
              Add to cart
            </button>
          )}
        </div>
        <div>
          {" "}
          <button className="buynow-btn">Buy now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
