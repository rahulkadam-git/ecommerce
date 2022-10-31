import { combineReducers } from "redux";
import authReducer from "../reducer/auth.reducer";
import productReducer from "./product.reducer";

export default combineReducers({
  auth: authReducer,
  products: productReducer,
});
