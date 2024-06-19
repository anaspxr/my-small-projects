import React, { useState } from "react";
import "./App.css";
import StonePaperScissor from "./components/StonePaperScissor";
import Quotes from "./components/Quotes";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TicTac from "./components/TicTac";
import Counter from "./components/Counter";

export const CounterContext = React.createContext();

function App() {
  const [count, setCount] = useState(0);
  const listItems = [
    "Tic Tac Toe",
    "Quotes",
    "Form",
    "To-Do List",
    "Stone Paper Scissor",
    `Counter (${count})`,
  ];
  const [showContent, setShowContent] = useState(1);
  const Buttons = listItems.map((content, index) => (
    <button
      key={index}
      className={`${showContent === index + 1 && "button-active"}`}
      onClick={() => {
        setShowContent(index + 1);
      }}
    >
      {content}
    </button>
  ));
  return (
    <div className="App">
      <h3>Choose a Project:</h3>
      <CounterContext.Provider value={setCount}>
        <div className="buttons-container"> {Buttons}</div>
        {showContent === 1 && <TicTac />}
        {showContent === 2 && <Quotes />}
        {showContent === 3 && <Form />}
        {showContent === 4 && <TodoList />}
        {showContent === 5 && <StonePaperScissor />}
        {showContent === 6 && <Counter />}
      </CounterContext.Provider>
    </div>
  );
}

export default App;
