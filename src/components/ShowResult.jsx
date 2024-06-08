export default function ShowResult(props) {
  return (
    <div>
      <p>Your Choice : {props.userChoice}</p>
      <p>Computer's choice:{props.computerChoice} </p>
      <h1>{props.finalResult}</h1>
    </div>
  );
}
