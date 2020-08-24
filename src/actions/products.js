// importing the action types
import { ADD_PRODUCTS, ADD_TO_CART } from "./actionTypes";
// importing the url funciton that write in the helper function
import { APIUrls } from "../helpers";

// this function is for fetching the products from the api
export default function fetchProducts() {
  return (dispatch) => {
    const url = APIUrls.getProducts();
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATA", data);
        // adding the data to the store
        dispatch(addProducts(data));
      });
  };
}

// action creator for add the data to the store
function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

// this function is for adding the product in to the cart
export function addToCart(product) {
  // console.log("ID", product);
  // console.log("JOSN", JSON.stringify(product));
  return (dispatch) => {
    const url = APIUrls.getCartItem();
    // console.log("URLS", url);
    // console.log("HI", APIUrls.getCartItem());
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATAPOST", data);
      });
  };
}

// this function is for fetching the cart item
export function cartItemFetch() {
  return (dispatch) => {
    const url = APIUrls.getCartItem();
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("CARTITEMFETCH", data);
        // adding the cart item to the store
        dispatch(addCart(data));
      });
  };
}

// action creator for adding the cart item to the store
export function addCart(carts) {
  // console.log("UPDATECART", carts);
  return {
    type: ADD_TO_CART,
    carts,
  };
}

// this function is for rmeove the product from the cart
export function removeFromCart(product) {
  return (dispatch) => {
    let url = APIUrls.getCartItem();
    url = url + "/" + product.id;
    // console.log("URLS", url);
    // console.log("HI", APIUrls.getCartItem());
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATAPOST", data);
        // for fetching the cart and update store
        dispatch(cartItemFetch());
      });
  };
}

// this function is for deleting the product from the products
export function deleteProduct(product) {
  console.log("DELETE");
  return (dispatch) => {
    let url = APIUrls.getProducts();
    url = url + "/" + product.id;
    // console.log("URLS", url);
    // console.log("HI", APIUrls.getCartItem());
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATAPOST", data);
        // updating the prodcut into the store
        dispatch(fetchProducts());
      });
  };
}

// this fuction is for adding the product to the products through api
export function addToProducts(product) {
  return (dispatch) => {
    const url = APIUrls.getProducts();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATA", data);
        // updating the store by fetching the products
        dispatch(fetchProducts());
      });
  };
}

// this function is for updating the products detail
export function updateProduct(id, product) {
  return (dispatch) => {
    const url = APIUrls.updateProductUrl(id);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        // console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // console.log("DATA", data);
        // updaitng the product detail and update store
        dispatch(fetchProducts());
      });
  };
}
