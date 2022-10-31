import React, { useEffect, useState } from "react";
import "./Signup.css";
import signinLogo from "../../imgs/pngwing.com.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserAction,
  clearError,
  clearResponse,
} from "../../redux/actions/auth.actions";

const initialState = {
  name: "",
  phone: "",
  emailId: "",
  password: "",
};

function Signup() {
  const [registerData, setRegisterData] = useState(initialState);
  const { response, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  console.log(response, error);

  useEffect(() => {
    dispatch(clearResponse());
    dispatch(clearError());
  }, [dispatch]);

  //handle Initial state

  const handleInitialState = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  //handle Submit
  console.log(registerData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(registerData));
  };

  return (
    <div className="signup-form">
      <div className="logo">
        <img src={signinLogo} alt="logo" />
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h1>Create an account</h1>
          </div>
          <div className="name-input">
            <label className="name-label">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInitialState}
            />
          </div>
          <div className="phone-input">
            <label className="phone-label">Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={handleInitialState}
            />
          </div>
          <div className="email-input">
            <label className="email-label">Email Id</label>
            <input
              type="email"
              name="emailId"
              id="email"
              onChange={handleInitialState}
            />
          </div>
          <div className="password-input">
            <label className="password-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInitialState}
            />
          </div>
          <div className="submit-input">
            <button className="">Submit</button>
          </div>
          <div className="alreadyHave-account">
            <h5>
              already have an account <Link to="/signin">Signin</Link>
            </h5>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signup;
