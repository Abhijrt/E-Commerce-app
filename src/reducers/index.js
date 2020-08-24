// importing the combine reducers from redux
import { combineReducers } from "redux";
// importing the products reducer
import { products } from "./products";

// exporting the reducers
export default combineReducers({
  products,
});
