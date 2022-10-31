import * as authTypes from "../types/auth.types";
import jwt_decode from "jwt-decode";
import { loginUser, registerUser } from "../../api/auth.api";

export const clearResponse = () => async (dispatch) => {
  dispatch({
    type: authTypes.CLEAR_RESPONSE,
  });
};
export const clearError = () => async (dispatch) => {
  dispatch({
    type: authTypes.CLEAR_ERROR,
  });
};

export const registerUserAction = (newUser) => async (dispatch) => {
  try {
    console.log(newUser);
    const registerUserAction = await registerUser(newUser);

    dispatch({
      type: authTypes.REGISTER_NEW_USER,
      payload: registerUserAction.data,
    });
  } catch (error) {
    dispatch({
      type: authTypes.REGISTER_NEW_USER_FAILED,
      payload: error,
    });
  }
};

export const loginUserAction = (loginData) => async (dispatch) => {
  try {
    const loginUserActionData = await loginUser(loginData);
    dispatch(loginSuccessAction(loginUserActionData.data.token));
  } catch (error) {
    dispatch({
      type: authTypes.LOGIN_USER_FAILED,
      payload: error,
    });
  }
};

export const loginSuccessAction = (token) => async (dispatch) => {
  localStorage.setItem("token", token);
  const user = await jwt_decode(token);
  dispatch({
    type: authTypes.LOGIN_USER,
    payload: user,
  });
};

export const logoutAction = () => (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: authTypes.LOGOUT_USER,
      payload: { user: {} },
    });
  } catch (error) {
    dispatch({
      type: authTypes.LOGIN_USER_FAILED,
      payload: error,
    });
  }
};
