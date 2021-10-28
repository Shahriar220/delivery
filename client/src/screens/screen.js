import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../redux/actions/pizzaAction";
//import pizzas from "../piazzadata";
import Pizza from "../components/pizza";
export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizza);
  const { pizzas, error, loading } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizza());
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div
                className="pizza col-3 m-3"
                key={pizza._id}
                style={{ height: "400px", width: "400px" }}
              >
                <div key={pizza._id}>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
      <br />
    </div>
  );
}
