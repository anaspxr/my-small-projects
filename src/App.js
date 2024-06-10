import { useState } from "react";
import "./App.css";
import StonePaperScissor from "./components/StonePaperScissor";

function App() {
  const listItems = ["Stone Paper Scissor", "2", "3", "4"];
  const [showContent, setShowContent] = useState(0);
  const Buttons = listItems.map((content, index) => (
    <button
      key={index}
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
      <div className="buttons-container"> {Buttons}</div>
      {showContent === 1 && <StonePaperScissor />}
      {showContent === 2 && "content 2"}
      {showContent === 3 && "content 3"}
      {showContent === 4 && "content 4"}
    </div>
  );
}

export default App;
