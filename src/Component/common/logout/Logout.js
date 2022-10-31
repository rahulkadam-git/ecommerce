import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../../redux/actions/auth.actions";
import "./logout.css";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Link to="/" onClick={handleLogout} style={{ color: "white" }}>
      <div className="logout-btn">Logout</div>
    </Link>
  );
}

export default Logout;
