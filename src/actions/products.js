import { ADD_PRODUCTS } from "./actionTypes";

export default function fetchProducts() {
  return (dispatch) => {
    const url =
      "https://my-json-server.typicode.com/Abhijrt/Fake-API-For-ECommerce/products";
    fetch(url)
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATA", data);
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
