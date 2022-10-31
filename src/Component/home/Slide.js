import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slide.css";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function Slide({ title, products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="product_section">
      <div className="product_deals">
        <h3 className="productDealTitle"> {title}</h3>
        <Link to="/all-product">
          <button className="viewAllBtn">View All</button>
        </Link>
      </div>
      <Divider />
      <Carousel
        showDots={false}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products?.map((product, index) => {
          return (
            <Link
              to={`/productdetails/${product?._id}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div className="product_items">
                <div className="product_img">
                  <img src={product?.url} alt=""></img>
                </div>

                <p>{product.title.shortTitle}</p>
                <p className="productDealTitle">{product.title.longTitle}</p>
              </div>
            </Link>
          );
        })}
      </Carousel>{" "}
    </div>
  );
}

export default Slide;
