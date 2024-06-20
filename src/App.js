import React, { useState } from "react";
import "./App.css";
import StonePaperScissor from "./components/StonePaperScissor";
import Quotes from "./components/Quotes";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TicTac from "./components/TicTac";
import Counter from "./components/Counter";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blog/Blogs";

export const CounterContext = React.createContext();
export const userContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h3>Choose a Project:</h3>
      <CounterContext.Provider value={[count, setCount]}>
        <userContext.Provider value={[currentUser, setCurrentUser]}>
          <Navbar />
          <Routes>
            <Route path="/" element={<TicTac />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/user" element={<Form />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/sps" element={<StonePaperScissor />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </userContext.Provider>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
