export const addToCartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    default:
      return state;
  }
};
