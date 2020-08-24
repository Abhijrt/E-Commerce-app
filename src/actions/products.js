import { ADD_PRODUCTS, ADD_TO_CART } from "./actionTypes";
import { APIUrls } from "../helpers";

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
        // dispatch(cartItemFetch());
      });
  };
}

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
        console.log("CARTITEMFETCH", data);
        dispatch(addCart(data));
      });
  };
}

export function addCart(carts) {
  // console.log("UPDATECART", carts);
  return {
    type: ADD_TO_CART,
    carts,
  };
}

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
        dispatch(cartItemFetch());
      });
  };
}

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
        dispatch(fetchProducts());
      });
  };
}

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
        dispatch(fetchProducts());
      });
  };
}

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
        dispatch(fetchProducts());
      });
  };
}
