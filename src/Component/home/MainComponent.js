import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../redux/actions/product.action";

function MainComponent(props) {
  const { allProducts } = useSelector((state) => state.products);
  const { userData } = useSelector((state) => state.auth);

  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  return (
    <div className="home_section">
      <div className="banner_section">
        <Banner />
      </div>
      <div className="slide_section">
        <div className="left_slide">
          <Slide title="Deal of the day" products={allProducts} />
        </div>
        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt="rightimg"
          />
          <div className="seeMoreLink">
            <Link to="/all-product">See more</Link>
          </div>
        </div>
      </div>
      <Slide title="Today's Deal" products={allProducts} />

      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default MainComponent;
