import React, { useContext } from "react";
import { CounterContext, userContext } from "../App";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [count] = useContext(CounterContext);
  const [currentUser] = useContext(userContext);
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
    {
      title: `Blogs`,
      path: "/blogs",
    },
    {
      title: `Counter with Redux`,
      path: "/reduxcounter",
    },
  ];
  return (
    <div className="buttons-container">
      {menuItems.map((content, index) => (
        <NavLink
          to={content.path}
          key={index}
          className={({ isActive }) => {
            return isActive ? "nav-buttons nav-button-active" : "nav-buttons";
          }}
        >
          <span>{content.title}</span>
        </NavLink>
      ))}
    </div>
  );
}
