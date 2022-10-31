/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import Buynow from "../buynow/Buynow";
import { useSelector } from "react-redux";

function Cart({ productsInCart }) {
  const { userData } = useSelector((state) => state.auth);
  console.log(userData);

  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (productsInCart) {
      setCartData(productsInCart);
    }
  }, [productsInCart]);

  let subTotalValue;
  const subTotalArray = [];
  const subTotal = () => {
    productsInCart?.map((product) => {
      subTotalArray.push(product.price.cost);
    });

    function add(accumulator, a) {
      return accumulator + a;
    }

    subTotalValue = subTotalArray?.reduce(add, 0);
  };
  subTotal();
  console.log(cartData);

  const handleDelete = (e, product) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <div className="cart-section">
      <div className="cart">
        <div className="cart-title">
          <h2>Shopping cart</h2>
        </div>
        <div className="title">
          <div className="left-title">
            <div className="delete-all">Delete all product</div>
            <div className="product-titles">Product</div>
          </div>
          <div className="right-title">Price</div>
        </div>
        <Divider />
        <form>
          {cartData?.map((product, index) => (
            <div className="cart-product" key={index}>
              <div className="product-details">
                <div className="delete-btn">
                  <input type="checkbox"></input>
                </div>
                <div className="product-img">
                  <img src={product.url} alt="product-img"></img>
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h4>{product?.title.longTitle}</h4>
                    <div className="delivery-details">
                      <p className="delivery-time">
                        Usually delivered in 3-4 days
                      </p>
                      <p className="shipping">eligible for free shipping</p>
                      <img
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                        alt="logo"
                      />
                    </div>
                  </div>

                  <div className="down-tab">
                    <div className="quantity">
                      <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="delete-item">
                      <button onClick={(e) => handleDelete(e, product)}>
                        Delete
                      </button>
                    </div>
                    <div className="saveforlater-item">
                      <button>Save for later</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-price">
                <div className="product-cost">
                  <h3 className="cost-amount">
                    <h3>{product?.price?.cost}</h3>
                  </h3>
                </div>
                <div className="product-discount">
                  <h3 className="discount-amount">
                    ({product?.price?.discount})
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </form>
        <Divider />
        <div className="subtotal">
          <div className="subtotal-title">
            Subtotal ({subTotalArray.length}items) :
          </div>

          <div className="totalCost">{subTotalValue}</div>
        </div>
      </div>
      <div className="buynow-container">
        <Buynow subTotalValue={subTotalValue} items={subTotalArray} />
      </div>
    </div>
  );
}

export default Cart;
