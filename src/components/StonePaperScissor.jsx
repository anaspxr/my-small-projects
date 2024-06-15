import { useState } from "react";
import Info from "./Info";
export default function StonePaperScissor() {
  const [finalResult, setFinalResult] = useState(null);
  const [result, setResult] = useState(null);
  const [choice, setChoice] = useState(null);

  const generateRandom = (val) => {
    setChoice(val);
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        setResult("Stone");
        getResult("Stone", val);
        break;
      case 2:
        setResult("Paper");
        getResult("Paper", val);
        break;
      case 3:
        setResult("Scissor");
        getResult("Scissor", val);
        break;
      default:
        console.log("error");
    }
  };

  const getResult = (a, b) => {
    if (a === b) setFinalResult("Draw");
    else if (a === "Paper") {
      if (b === "Stone") {
        setFinalResult("Computer Won!! Paper beats stone ");
      } else setFinalResult("You Won!! Scissor cuts through Paper!!");
    } else if (a === "Scissor") {
      if (b === "Stone") {
        setFinalResult("You Won!! Stone breaks Scissor");
      } else setFinalResult("Computer Won!! Scissor cuts through Paper!!");
    } else {
      if (b === "Paper") setFinalResult("You Won!! Paper beats stone  ");
      else setFinalResult("Computer Won!!  Stone breaks Scissor");
    }
  };
  return (
    <div className="content-container">
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Stone Paper Scissor</h2>
        <p className="choice">
          Pick Your Choice :{" "}
          <span
            onClick={() => {
              generateRandom("Stone");
            }}
          >
            Stone
          </span>
          <span
            onClick={() => {
              generateRandom("Paper");
            }}
          >
            Paper
          </span>
          <span
            onClick={() => {
              generateRandom("Scissor");
            }}
          >
            Scissor
          </span>
        </p>
      </div>
      <ShowResult
        userChoice={choice}
        computerChoice={result}
        finalResult={finalResult}
      />
      <Info />
    </div>
  );
}

function ShowResult(props) {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>Your Choice : {props.userChoice}</p>
        <p>Computer's choice:{props.computerChoice} </p>
      </div>
      <h1>{props.finalResult}</h1>
    </div>
  );
}
