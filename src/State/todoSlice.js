import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    editTask: (state, action) => {
      state.value.splice(action.payload.index, 1, {
        ...state[action.payload.index],
        value: action.payload.newTask,
      });
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
