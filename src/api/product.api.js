import api from "./index";

const getAllProductApi = async () => {
  return await api.get("/product/allproduct");
};

const getProductById = async (id) => {
  return await api.get(`/product/${id}`);
};

const addProductsApi = async (excelFile) => {
  return await api.post(`/product/add-product`, excelFile);
};

const addToCartApi = async (cartAddItem) => {
  return await api.post(`/product/add-cart`, cartAddItem);
};

const getCartData = async (userId) => {
  return await api.post("/user/get-cart", userId);
};

const placeOrder = async (orderDetails) => {
  return await api.post(`/product/place-order`, orderDetails);
};
export {
  placeOrder,
  addToCartApi,
  getProductById,
  addProductsApi,
  getAllProductApi,
  getCartData,
};
