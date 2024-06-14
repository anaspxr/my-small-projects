import { useEffect, useState } from "react";

export default function TicTac() {
  const [play, setPlay] = useState(false);
  const [turn, setTurn] = useState(true);
  const [columns, setColumns] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const handleClick = (col) => {
    if (turn) {
      setColumns(columns.toSpliced(col, 1, { value: "X" }));
    } else {
      setColumns(columns.toSpliced(col, 1, { value: "O" }));
    }
    setTurn((prev) => !prev);
  };
  useEffect(() => {
    if (play) {
    }
  }, [play]);
  return (
    <div
      className="content-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button
        className="tictac-button"
        onClick={() => {
          setPlay(!play);
        }}
      >
        Play Tic Tac Toe
      </button>
      <div className="tictac-score">
        <div>
          <h3>Player 1</h3>
          {turn && <p>Your Turn..</p>}
        </div>
        <div>
          <h3>Player 2</h3>
          {!turn && <p>Your Turn..</p>}
        </div>
      </div>
      <div className="tictac-container">
        {columns.map((col, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              className="tictac-cols"
            >
              <p className="tictac-text">{col.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
