import React, { useState } from "react";
import "./App.css";
import StonePaperScissor from "./components/StonePaperScissor";
import Quotes from "./components/Quotes";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TicTac from "./components/TicTac";
import Counter from "./components/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const CounterContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  const menuItems = [
    {
      title: "Tic Tac Toe",
      path: "/",
    },
    {
      title: "Quotes",
      path: "/quotes",
    },
    {
      title: "Login",
      path: "/user",
    },
    {
      title: "To Do List",
      path: "/todolist",
    },
    {
      title: "Stone Paper Scissor",
      path: "/sps",
    },
    {
      title: `Counter (${count})`,
      path: "/counter",
    },
  ];
  const Buttons = menuItems.map((content, index) => (
    <a href={content.path} key={index} className="nav-buttons">
      {content.title}
    </a>
  ));
  return (
    <div className="App">
      <h3>Choose a Project:</h3>
      <CounterContext.Provider value={setCount}>
        <div className="buttons-container"> {Buttons}</div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TicTac />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/user" element={<Form />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/sps" element={<StonePaperScissor />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
