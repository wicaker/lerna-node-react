export const acceptProducts = products => {
  return {
    type: "LIST_PRODUCTS_SUCCESS",
    payload: products
  };
};