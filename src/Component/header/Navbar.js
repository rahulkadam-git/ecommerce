import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../imgs/amazon_PNG25.png";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Avatar, Badge } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../common/logout/Logout";

function Navbar({ productsInCart }) {
  const [handleMenuState, setHandleMenuState] = useState(false);
  const { userData = {} } = useSelector((state) => state.auth);

  const handleMenu = () => {
    setHandleMenuState((prevState) => ({
      handleMenuState: !prevState.handleMenuState,
    }));
  };

  return (
    <header>
      <nav>
        <div className="left">
          <div className="nav_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav_search">
            <input type="text"></input>
          </div>
          <div className="nav_search_btn">
            <SearchIcon />
          </div>
        </div>

        <div className="right">
          {!userData ? (
            <div className="nav_btn">
              <Link
                to="/signin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Signin
              </Link>
            </div>
          ) : (
            <></>
          )}

          <Link to="/cart">
            <div className="cart_btn">
              <Badge badgeContent={productsInCart?.length} color="primary">
                <ShoppingCartTwoToneIcon id="cartIcon" />
              </Badge>
              <div
                style={{
                  color: "white",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                Cart
              </div>
            </div>
          </Link>
          <div className="user_avatar" onClick={handleMenu}>
            <Avatar sx={{ bgcolor: purple[500] }}>AD</Avatar>
          </div>

          {handleMenuState ? (
            <div
              className=""
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#303030",
                position: "absolute",
                display: "block",
                top: "75px",
                right: "0",
                color: "white",
              }}
            >
              <Logout />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
