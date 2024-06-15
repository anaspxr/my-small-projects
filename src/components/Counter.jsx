import React, { useContext, useReducer, useState } from "react";
import Info from "./Info";
import { CounterContext } from "../App";

export default function Counter() {
  const [, setValue] = useContext(CounterContext);
  const initialValue = 0;

  const reducer = (state, action) => {
    return action(state);
  };

  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="content-container">
      <h3 style={{ textAlign: "center" }}>
        A simple counter using useReducer Hook to manage state
      </h3>
      <p style={{ textAlign: "center" }}>Count: {count}</p>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="buttons-container"
      >
        <button
          onClick={() => {
            setValue((value) => value + 1);
            dispatch((state) => {
              return state + 1;
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch((state) => {
              return state - 1;
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch((state) => {
              return initialValue;
            });
          }}
        >
          Reset
        </button>
      </div>
      <Info
        infos={[
          "used useReducer() to increment,decrement and reset the count",
          "used useContext to display the count on the another component (see on 'Counter' button on top)",
        ]}
      />
    </div>
  );
}
