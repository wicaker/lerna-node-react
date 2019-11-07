export const acceptProducts = products => {
  return {
    type: "PRODUCT_SUCCESS",
    payload: products
  };
};