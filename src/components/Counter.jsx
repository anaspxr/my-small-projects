import React, { useContext, useEffect, useReducer } from "react";
import Info from "./Info";
import { CounterContext } from "../App";

export default function Counter() {
  const [, setValue] = useContext(CounterContext);
  const initialValue = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.value;
      case "decrement":
        return state - action.value;
      case "multi":
        return state * action.value;
      case "divide":
        return state / action.value;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    setValue(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="content-container">
      <h3 style={{ textAlign: "center" }}>
        A simple counter using useReducer Hook to manage state
      </h3>
      <p style={{ textAlign: "center" }}>Count: {count}</p>
      <div className="counter-buttons">
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 10 });
          }}
        >
          +10
        </button>
      </div>
      <div className="counter-buttons">
        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 1 });
          }}
        >
          -1
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement", value: 10 });
          }}
        >
          -10
        </button>
      </div>
      <div className="counter-buttons">
        <button
          onClick={() => {
            dispatch({ type: "multi", value: 2 });
          }}
        >
          *2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "multi", value: 10 });
          }}
        >
          *10
        </button>
      </div>
      <div className="counter-buttons">
        <button
          onClick={() => {
            dispatch({ type: "divide", value: 2 });
          }}
        >
          /2
        </button>
        <button
          onClick={() => {
            dispatch({ type: "divide", value: 10 });
          }}
        >
          /10
        </button>
      </div>
      <div className="counter-buttons">
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
      <Info
        infos={[
          "used useReducer() to increment,decrement,,multiple,divide and reset the count",
          "used useContext to display the count on the another component (see on 'Counter' button on top)",
        ]}
      />
    </div>
  );
}
