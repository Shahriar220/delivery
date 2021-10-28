import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CartScreen = () => {
  const cartState = useSelector((state) => state.addToCartReducer);
  const cartItems = cartState.cartItem;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>MyCart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left">
                  <h1>
                    {item.name}[{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.quantity}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity:</h1>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div></div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default CartScreen;
