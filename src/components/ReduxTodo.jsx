import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../State/todoSlice";

export default function ReduxTodo() {
  const [inputValue, setInputValue] = useState("");
  const tasks = useSelector((state) => state.todoList.value);
  const dispatch = useDispatch();

  const focuser = useRef(null);
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now().toString(), value: inputValue };
      dispatch(addTask(newTask));
      setInputValue("");
    }
    focuser.current.focus();
  };
  return (
    <div>
      <div className="todo-list">
        <h1>To Do List with Redux</h1>
        <div className="inputField">
          <input
            ref={focuser}
            type="text"
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
            value={inputValue}
          />
          <button onClick={handleClick}>Add Task</button>
        </div>

        {tasks.length > 0 && (
          <div className="tasks-field">
            <h3>Pending Tasks:</h3>
            <ul>
              {tasks.map((item, index) => (
                <li key={item.id}>
                  <TaskDisplayField index={index} item={item} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function TaskDisplayField({ item, index }) {
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(item.value);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ index: index, newTask: inputValue }));
    setEditOpen(false);
  };
  return (
    <form
      style={{
        gap: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <span className="list-index">{index + 1} : </span>{" "}
        <input
          onChange={handleChange}
          className="taskField"
          disabled={!editOpen}
          type="text"
          value={inputValue}
        />
        {editOpen && (
          <button
            onClick={handleSubmit}
            type="submit"
            className="taskUpdateButton"
          >
            Update
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          className="task-edit"
          onClick={() => {
            setEditOpen((prev) => !prev);
          }}
        >
          {editOpen ? "Cancel" : "Edit"}
        </span>
        <span
          className="task-delete"
          onClick={() => {
            dispatch(deleteTask(index));
          }}
        >
          Delete
        </span>
      </div>
    </form>
  );
}
