import React, { useState } from "react";
//import Example from '../utils/Modal'
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addtoCart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };
  return (
    <div className="mb-8 p-3 shadow-sm p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1 className="mb-1 mt-1">{pizza.name}</h1>
        <img
          src={pizza.image}
          style={{ height: "200px", width: "200px" }}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="flex-container">
        <div className="w-1">
          <p>variant</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div>
          <p className="w-1 m-1">Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1>Price:{pizza.prices[0][varient] * quantity}</h1>
        </div>
        <div className="w-1">
          <button className="btn-danger" onClick={addtoCart}>
            Add To Cart
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            style={{ height: "200px", width: "200px" }}
            alt=""
            className="img-fluid"
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Pizza;
