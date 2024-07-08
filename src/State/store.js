import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./TodoList/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
