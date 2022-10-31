import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Component/header/Navbar";
import MainComponent from "./Component/home/MainComponent";
import NewHeader from "./Component/newHeader/NewHeader";
import Footer from "./Component/footer/Footer";
import Signin from "./Component/signup_signIn/Signin";
import Signup from "./Component/signup_signIn/Signup";
import Cart from "./Component/cart/Cart";
import ProductInfo from "./Component/productInfo/ProductInfo";
import ProductPage from "./Component/productPage/ProductPage";
import AdminPortal from "./Component/admin/AdminPortal";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import store from "./redux/store/store";
import { loginSuccessAction } from "./redux/actions/auth.actions";
import { getCartDataAction } from "./redux/actions/product.action";
import Order from "./Component/order/Order";

function App() {
  const token = localStorage.getItem("token");

  const { userData = {} } = useSelector((state) => state.auth);
  const { productsInCart } = useSelector((state) => state.products);
  useEffect(() => {
    store.dispatch(loginSuccessAction(token));
  }, [token]);

  useEffect(() => {
    let userId;
    if (userData) {
      userId = {
        userId: userData.user_id,
      };
    }
    store.dispatch(getCartDataAction(userId));
  }, [userData]);

  return (
    <Fragment>
      <Navbar userData={userData} productsInCart={productsInCart} />
      <NewHeader userData={userData} />
      <Switch>
        <Route path="/" exact component={MainComponent} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/cart"
          component={() => <Cart productsInCart={productsInCart} />}
        />
        <Route path="/order" component={Order} />
        <Route path="/productdetails/:id" component={ProductInfo} />
        <Route path="/all-product" component={ProductPage} />
        <Route path="/admin" component={AdminPortal} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
