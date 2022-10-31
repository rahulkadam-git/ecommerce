import React from "react";
import "./NewHeader.css";
import NavImg from "../../imgs/nav.jpeg";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function NewHeader(props) {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>
            <ShoppingCartTwoToneIcon /> All
          </p>
          <p>Mobiles</p>
          <p>Best Sellers</p>
          <p>Fashion</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src={NavImg} alt="nav-img" />
        </div>
      </div>
    </div>
  );
}

export default NewHeader;
