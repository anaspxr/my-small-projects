import { useState } from "react";

export default function ShowResult(props) {
  const [finalResult, setFinalResult] = useState(null);
  //   if (props.computerChoice === props.userChoice) setFinalResult("Draw");
  //   else if (props.computerChoice === "Paper") {
  //     if (props.userChoice === "Stone") {
  //       setFinalResult("Computer Won!! Paper beats stone (idk why)");
  //     } else setFinalResult("You Won!! Scissor cuts through Paper!!");
  //   } else if (props.computerChoice === "Scissor") {
  //     if (props.userChoice === "Stone") {
  //       setFinalResult("You Won!! Stone breaks Scissor");
  //     } else setFinalResult("Computer Won!! Scissor cuts through Paper!!");
  //   } else {
  //     if (props.userChoice === "Paper")
  //       setFinalResult("You Won!! Paper beats stone (idk why) ");
  //     else setFinalResult("Computer Won!!  Stone breaks Scissor");
  //   }

  return (
    <div>
      <p>Your Choice : {props.userChoice}</p>
      <p>Computer's choice:{props.computerChoice} </p>
      <p>{props.finalResult}</p>
    </div>
  );
}
