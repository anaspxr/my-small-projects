import React, { useContext } from "react";
import { CounterContext, userContext } from "../App";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [count] = useContext(CounterContext);
  const [currentUser, setCurrentUser] = useContext(userContext);
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
      title: `${currentUser.username ? "Profile" : "Signup/Login"}`,
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
  return (
    <div className="buttons-container">
      {menuItems.map((content, index) => (
        <Link to={content.path} key={index} className="nav-buttons">
          <span>{content.title}</span>
        </Link>
      ))}
    </div>
  );
}
