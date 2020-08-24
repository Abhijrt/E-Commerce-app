import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypes";

const initialProductState = {
  products: [],
  carts: [],
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
    case ADD_TO_CART:
      // console.log(state.products);
      // let newCartArray = state.products.filter(
      //   (product) => product.id === action.id
      // );
      console.log("Array", action.carts);
      return {
        ...state,
        carts: action.carts,
      };

    default:
      // console.log("DEFAULR");
      return state;
  }
}
