import * as productTypes from "../types/product.types";
import {
  getAllProductApi,
  getProductById,
  addProductsApi,
  addToCartApi,
  getCartData,
} from "../../api/product.api";

export const getAllProductsAction = () => async (dispatch) => {
  try {
    const getAllProductsActionData = await getAllProductApi();
    dispatch({
      type: productTypes.ALL_PRODUCT_LIST,
      payload: getAllProductsActionData.data.allProducts,
    });
  } catch (error) {
    dispatch({
      type: productTypes.ALL_PRODUCT_LIST_FAILED,
      payload: error,
    });
  }
};

export const getProductByIdAction = (id) => async (dispatch) => {
  try {
    const getAllProductActionData = await getProductById(id);
    dispatch({
      type: productTypes.GET_PRODUCT_BY_ID,
      payload: getAllProductActionData.data,
    });
  } catch (error) {
    dispatch({
      type: productTypes.GET_PRODUCT_BY_ID_FAILED,
      payload: error,
    });
  }
};

export const addProductsActions = (excelFile) => async (dispatch) => {
  try {
    const addProductsData = await addProductsApi(excelFile);
    dispatch({
      type: productTypes.ADD_PRODUCT,
      payload: addProductsData.data,
    });
  } catch (error) {
    dispatch({
      type: productTypes.ADD_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const addToCartActions = (cartAddItem) => async (dispatch) => {
  console.log(cartAddItem);
  try {
    const addToCartData = await addToCartApi(cartAddItem);
    console.log(addToCartData.data);
    if (addToCartData.status === 200) {
      dispatch(getCartDataAction(cartAddItem.userId));
    }
    dispatch({
      type: productTypes.ADD_PRODUCT_TO_CART,
      payload: addToCartData.data,
    });
  } catch (error) {
    dispatch({
      type: productTypes.ADD_PRODUCT_TO_CART_FAILED,
      payload: error,
    });
  }
};

export const getCartDataAction = (userId) => async (dispatch) => {
  try {
    const getCartDataActionData = await getCartData(userId);
    console.log(getCartDataActionData.data);
    dispatch({
      type: productTypes.GET_CART_DATA,
      payload: getCartDataActionData.data,
    });
  } catch (error) {
    dispatch({
      type: productTypes.GET_CART_DATA_FAILED,
      payload: error,
    });
  }
};

export const deleteToCartActions = (cartAddItem) => async (dispatch) => {
  console.log(cartAddItem);
  try {
    const addToCartData = await addToCartApi(cartAddItem);
    console.log(addToCartData.data);
    if (addToCartData.status === 200) {
      dispatch(getCartDataAction(cartAddItem.userId));
    }
    dispatch({
      type: productTypes.ADD_PRODUCT_TO_CART,
      payload: addToCartData.data,
    });
  } catch (error) {
    dispatch({
      type: productTypes.ADD_PRODUCT_TO_CART_FAILED,
      payload: error,
    });
  }
};
