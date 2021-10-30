import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../redux/actions/pizzaAction";
//import pizzas from "../piazzadata";
import Pizza from "../components/pizza";
import Loading from "../components/loading";
import Error from "../components/error";
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
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
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
