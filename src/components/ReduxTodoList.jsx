import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../State/TodoList/todoSlice";

function ReduxTodoList() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
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
    </div>
  );
}

export default ReduxTodoList;
