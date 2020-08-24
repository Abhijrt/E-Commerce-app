// this is the api root
const API_ROOT = "https://5f42874cd4b4790016fd7b1f.mockapi.io";

// this is the api calls url for different - different operations
export const APIUrls = {
  getProducts: () => `${API_ROOT}/products`,
  getCartItem: () => `${API_ROOT}/carts`,
  deleteProductUrl: (id) => `${API_ROOT}/products/${id}`,
  deleteCartItemUrl: (id) => `${API_ROOT}/carts/${id}`,
  updateProductUrl: (id) => `${API_ROOT}/products/${id}`,
};
