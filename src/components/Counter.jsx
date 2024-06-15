import React, { useReducer } from "react";
import Info from "./Info";

export default function Counter() {
  const initialValue = 0;

  const reducer = (state, action) => {
    return action(state);
  };

  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="content-container">
      <h style={{ textAlign: "center" }}>
        A simple counter using useReducer Hook to manage state
      </h>
      <p style={{ textAlign: "center" }}>Count: {count}</p>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="buttons-container"
      >
        <button
          onClick={() => {
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
      <Info />
    </div>
  );
}
