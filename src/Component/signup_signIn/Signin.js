import React, { useEffect, useState } from "react";
import "./Signin.css";
import signinLogo from "../../imgs/pngwing.com.png";
import { Link } from "react-router-dom";
import { loginUserAction } from "../../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const initialData = {
  emailId: "",
  password: "",
};

function Signin() {
  const [logData, setLogData] = useState(initialData);
  const { userData = {}, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (userData) {
      history.push("/cart");
    }
  });

  //initialState function

  const handleInitialState = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  //submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logData);
    dispatch(loginUserAction(logData));
  };

  return (
    <div className="signin-form">
      <div className="logo">
        <img src={signinLogo} alt="logo" />
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h1>Sign in</h1>
          </div>
          <div className="email-input">
            <label className="email-label">Email</label>
            <input
              type="text"
              name="emailId"
              id="email"
              onChange={handleInitialState}
            ></input>
          </div>
          <div className="password-input">
            <label className="password-label">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInitialState}
            ></input>
          </div>
          <div className="terms-condition">
            <h6>
              By continuing, you agree to{" "}
              <Link to="#">Amazon's Conditions of Use</Link> and{" "}
              <Link to="#">Privacy Notice.</Link>
            </h6>
          </div>
          <div className="submit-input">
            <button className="submit">Submit</button>
          </div>
          <div className="create-account">
            <h6>New Amazon account?</h6>
            <Link to="/signup">
              <button className="submit">Create new account</button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signin;
