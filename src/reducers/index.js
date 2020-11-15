import { combineReducers } from "redux";
import productReducer from "./productReducer";

let rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
