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
                  <span className="list-index">{index + 1} : </span>{" "}
                  <span>{item.value}</span>
                  <span
                    className="task-edit"
                    onClick={() => {
                      dispatch(
                        editTask({ index: index, newTask: "hello world" })
                      );
                    }}
                  >
                    Edit
                  </span>
                  <span
                    className="task-delete"
                    onClick={() => {
                      dispatch(deleteTask(index));
                    }}
                  >
                    Delete
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
