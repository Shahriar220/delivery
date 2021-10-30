import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizza } from "../reducers/pizzaReducer";
import { addToCartReducer } from "../reducers/cartReducer";
import { registerRequest, loginUser } from "../reducers/userReducer";

const finalReducer = combineReducers({
  getAllPizza: getAllPizza,
  registerRequest: registerRequest,
  addToCartReducer: addToCartReducer,
  loginUser: loginUser,
});

const cartItems = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  addToCartReducer: {
    cartItem: cartItems,
  },
  loginUser: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
