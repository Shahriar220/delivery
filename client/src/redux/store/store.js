import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizza } from "../reducers/pizzaReducer";
import { addToCartReducer } from "../reducers/cartReducer";

const finalReducer = combineReducers({
  getAllPizza: getAllPizza,
  addToCartReducer: addToCartReducer,
});

const cartItems = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const initialState = {
  addToCartReducer: {
    cartItem: cartItems,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
