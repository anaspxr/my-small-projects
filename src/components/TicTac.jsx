import { useEffect, useState } from "react";

export default function TicTac() {
  const initialValue = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const [highLight, setHighlight] = useState(false);
  const [play, setPlay] = useState(false);
  const [turn, setTurn] = useState(true);
  const [complete, setComplete] = useState(null);
  const [columns, setColumns] = useState(initialValue);

  useEffect(() => {
    highLight &&
      setTimeout(() => {
        setHighlight(false);
      }, 1000);
  }, [highLight]);

  const handleClick = (col) => {
    if (turn) {
      setColumns(columns.toSpliced(col, 1, { value: "X" }));
    } else {
      setColumns(columns.toSpliced(col, 1, { value: "O" }));
    }
    setTurn((prev) => !prev);
  };
  return (
    <div
      className="content-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="tictac-score">
        <div>
          <h3>Player 1</h3>
          {turn && play && <p>Your Turn..</p>}
        </div>
        <div>
          <h3>Player 2</h3>
          {!turn && play && <p>Your Turn..</p>}
        </div>
      </div>
      <button
        className={`tictac-button ${highLight && "highlighted"}`}
        onClick={() => {
          !play ? setPlay(true) : setColumns(initialValue);
        }}
      >
        {play ? "Restart" : "Start"}
      </button>

      <div className="tictac-container">
        {columns.map((col, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                play ? handleClick(index) : setHighlight(true);
              }}
              className={`tictac-cols ${play && "tictac-cols-hover"} `}
            >
              <p className="tictac-text">{col.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
