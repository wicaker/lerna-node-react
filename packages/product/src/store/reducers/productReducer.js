const initState = {
  product:'',
  products: []
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LIST_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;