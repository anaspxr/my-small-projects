import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./TodoList/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
