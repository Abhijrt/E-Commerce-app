import { ADD_PRODUCTS } from "../actions/actionTypes";

const initialProductState = {
  products: [],
  cart: [],
  isShowCart: false,
};

export function products(state = initialProductState, action) {
  // console.log("IN REDUCER", action.type);
  switch (action.type) {
    case ADD_PRODUCTS:
      // console.log("UPDATE", action.products);
      return {
        ...state,
        products: action.products,
      };
    default:
      // console.log("DEFAULR");
      return state;
  }
}
