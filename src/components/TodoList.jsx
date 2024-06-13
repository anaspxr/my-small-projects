import { useEffect, useRef, useState } from "react";

export default function TodoList() {
  const localData = JSON.parse(localStorage.getItem("tasks"));
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(localData ? [...localData] : []);
  const focuser = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now(), value: inputValue };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
    console.log(tasks);
    focuser.current.focus();
  };
  const handleDelete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_item, i) => {
        return index !== i;
      })
    );
  };
  return (
    <div className="content-container todo-list">
      <h1>To Do List</h1>
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
