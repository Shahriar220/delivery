import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.addToCartReducer);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mr-3">
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItem.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
