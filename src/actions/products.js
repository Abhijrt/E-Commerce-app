import { ADD_PRODUCTS } from "./actionTypes";

export default function fetchProducts() {
  return (dispatch) => {
    const url = "https://5f42874cd4b4790016fd7b1f.mockapi.io/products";
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("DATA", data);
        dispatch(addProducts(data));
      });
  };
}

function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}
