import { useState } from "react";
import "./App.css";
import StonePaperScissor from "./components/StonePaperScissor";
import Quotes from "./components/Quotes";
import Form from "./components/Form";

function App() {
  const listItems = ["Stone Paper Scissor", "Quotes", "Form"];
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
      {showContent === 2 && <Quotes />}
      {showContent === 3 && <Form />}
    </div>
  );
}

export default App;
