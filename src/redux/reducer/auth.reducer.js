import * as authTypes from "../types/auth.types";

const initialState = {
  error: "",
  response: "",
  userData: null,
  isLoggedIn: false,
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case authTypes.REGISTER_NEW_USER:
      return {
        ...state,
        isLoggedIn: false,
        response: payload.message,
      };
    case authTypes.REGISTER_NEW_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.error,
      };
    case authTypes.LOGIN_USER:
      return {
        ...state,
        isLoggedIn: false,
        userData: payload,
      };
    case authTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.error,
      };

    case authTypes.CLEAR_RESPONSE:
      return {
        ...state,
        response: "",
      };
    case authTypes.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
}
