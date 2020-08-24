const API_ROOT = "https://5f42874cd4b4790016fd7b1f.mockapi.io";

export const APIUrls = {
  getProducts: () => `${API_ROOT}/products`,
  getCartItem: () => `${API_ROOT}/carts`,
  deleteProductUrl: (id) => `${API_ROOT}/products/${id}`,
  deleteCartItemUrl: (id) => `${API_ROOT}/carts/${id}`,
  updateProductUrl: (id) => `${API_ROOT}/products/${id}`,
};
