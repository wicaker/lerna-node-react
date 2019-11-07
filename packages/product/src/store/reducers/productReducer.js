const initState = {
  products: []
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;