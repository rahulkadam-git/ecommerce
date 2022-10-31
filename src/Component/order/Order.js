import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCartDataAction } from "../../redux/actions/product.action";
import "./Order.css";

function Order() {
  const { userDataWithCart } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.auth);

  const [cartData, setCartData] = useState(null);

  const dispatch = useDispatch();
  let userId;
  if (userData) {
    userId = {
      userId: userData.user_id,
    };
  }

  useEffect(() => {
    dispatch(getCartDataAction(userId));
  }, []);

  useEffect(() => {
    if (userDataWithCart) {
      setCartData(userDataWithCart);
    }
  }, [userDataWithCart]);

  let subTotalValue;
  const subTotalArray = [];
  const subTotal = () => {
    userDataWithCart?.cart?.map((product) => {
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
          <h2>Order Details</h2>
        </div>
        <div className="title">
          <div className="left-title">
            <div />
            <div className="product-titles">Product</div>
          </div>
          <div className="right-title">Price</div>
        </div>
        <Divider />
        <form>
          {cartData?.cart?.map((product, index) => (
            <div className="cart-product" key={index}>
              <div className="product-details">
                <div className="product-order-img">
                  <img
                    src={product.url}
                    className="product-order-img"
                    alt=""
                  ></img>
                </div>
                <div className="product-description">
                  <div className="product-title">
                    <h4>{product?.title.longTitle}</h4>
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
                  </div>
                </div>
              </div>
              <div className="product-price">
                <div className="product-cost">
                  <h3 className="cost-amount">
                    <h3>₹{product?.price?.cost}</h3>
                  </h3>
                </div>
                <div className="product-discount">
                  <h3 className="discount-amount">
                    ({product?.price?.discount})
                  </h3>
                </div>
                <div>
                  <button className="deleteBtn">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </form>
        <Divider />
      </div>
      <div className="buynow-container">
        {/* <Buynow subTotalValue={subTotalValue} items={subTotalArray} /> */}
      </div>
    </div>
  );
}

export default Order;
