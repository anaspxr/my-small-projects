import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByValue,
  reset,
} from "../State/TodoList/counterSlice";

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const isPending = useSelector((state) => state.counter.pending);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      {isPending && <p>Calculating..</p>}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button
          onClick={() => {
            dispatch(incrementByValue(5));
          }}
        >
          +5
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Aync +10</button>
      </div>
    </div>
  );
}

export default ReduxCounter;
