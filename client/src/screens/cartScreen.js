import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";
const CartScreen = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.addToCartReducer);
  const cartItems = cartState.cartItem;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  function routeChange() {
    useHistory.push("/address");
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>MyCart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-10">
                  <h1>
                    {item.name}[{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.quantity}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity:</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity + 1, item.varient))
                    }
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    onClick={() =>
                      dispatch(addToCart(item, item.quantity - 1, item.varient))
                    }
                    aria-hidden="true"
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-10">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                    alt=""
                  />
                </div>
                <div className="m-1 w-10">
                  <i
                    className="fa fa-trash mt-5"
                    style={{ color: "red" }}
                    aria-hidden="true"
                    onClick={() => dispatch(deleteFromCart(item))}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "44px" }}>Subtotal:{subtotal}/-</h2>
          <button className="btn" onClick={routeChange}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
