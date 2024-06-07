import { useState } from "react";
import ShowResult from "./ShowResult";
export default function Button() {
  const [finalResult, setFinalResult] = useState(null);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);
  const [choice, setChoice] = useState(null);
  const stonePaperScissor = (val) => {
    setChoice(val);
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        setResult("Stone");
        break;
      case 2:
        setResult("Paper");
        break;
      case 3:
        setResult("Scissor");
        break;
      default:
        console.log("error");
    }
    setCount(count + 1);
    getResult(result, choice);
  };
  const getResult = (a, b) => {
    if (a === b) setFinalResult("Draw");
    else if (a === "Paper") {
      if (b === "Stone") {
        setFinalResult("Computer Won!! Paper beats stone (idk why)");
      } else setFinalResult("You Won!! Scissor cuts through Paper!!");
    } else if (a === "Scissor") {
      if (b === "Stone") {
        setFinalResult("You Won!! Stone breaks Scissor");
      } else setFinalResult("Computer Won!! Scissor cuts through Paper!!");
    } else {
      if (b === "Paper")
        setFinalResult("You Won!! Paper beats stone (idk why) ");
      else setFinalResult("Computer Won!!  Stone breaks Scissor");
    }
  };
  return (
    <div>
      <p>
        played {count} {count === 1 ? "time" : "times"}
      </p>
      <p className="choice">
        Pick Your Choice :{" "}
        <span
          onClick={() => {
            stonePaperScissor("Stone");
          }}
        >
          Stone
        </span>
        <span
          onClick={() => {
            stonePaperScissor("Paper");
          }}
        >
          Paper
        </span>
        <span
          onClick={() => {
            stonePaperScissor("Scissor");
          }}
        >
          Scissor
        </span>
      </p>
      <ShowResult
        userChoice={choice}
        computerChoice={result}
        finalResult={finalResult}
      />
    </div>
  );
}
