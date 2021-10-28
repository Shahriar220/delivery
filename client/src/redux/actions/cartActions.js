export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  const cartItems = getState().addToCartReducer.cartItem;
  localStorage.setItem("cartItem", JSON.stringify(cartItems));
};
