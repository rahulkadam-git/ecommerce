import * as productTypes from "../types/product.types";

const initialState = {
  allProducts: [],
  response: "",
  error: "",
  productByID: null,
  productsInCart: null,
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case productTypes.ALL_PRODUCT_LIST:
      return {
        ...state,
        allProducts: payload,
      };
    case productTypes.ALL_PRODUCT_LIST_FAILED:
      return {
        ...state,
        allProducts: [],
        error: payload,
      };
    case productTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        productByID: payload,
      };
    case productTypes.GET_PRODUCT_BY_ID_FAILED:
      return {
        ...state,
        error: payload,
      };
    case productTypes.ADD_PRODUCT:
      return {
        ...state,
        response: payload,
      };
    case productTypes.ADD_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
      };
    case productTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        response: payload.response,
      };
    case productTypes.ADD_PRODUCT_TO_CART_FAILED:
      return {
        ...state,
        error: payload,
      };
    case productTypes.GET_CART_DATA:
      return {
        ...state,
        isLoggedIn: false,
        productsInCart: payload.cart,
      };
    case productTypes.GET_CART_DATA_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        error: payload.error,
      };
    case productTypes.CLEAR_ERROR:
      return {
        ...state,
        response: "",
      };
    case productTypes.CLEAR_RESPONSE:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
}
