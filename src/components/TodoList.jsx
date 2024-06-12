import { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    setTasks(
      tasks.filter((_item, i) => {
        return index !== i;
      })
    );
  };
  return (
    <div className="content-container todo-list">
      <h1>To Do List</h1>
      <div className="inputField">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={handleClick}>Add Task</button>
      </div>

      {tasks.length > 0 && (
        <div className="tasks-field">
          <h3>Pending Tasks:</h3>
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>
                <span className="list-index">{index + 1} : </span>{" "}
                <span>{item}</span>{" "}
                <span
                  className="task-delete"
                  onClick={() => {
                    handleDelete(index);
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
  );
}
