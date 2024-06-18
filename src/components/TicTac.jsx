import { useEffect, useState } from "react";
import Info from "./Info";

export default function TicTac() {
  const initialValue = ["", "", "", "", "", "", "", "", ""];
  const [highLight, setHighlight] = useState(false);
  const [play, setPlay] = useState(false);
  const [turn, setTurn] = useState(true);
  const [columns, setColumns] = useState(initialValue);
  const [winner, setWinner] = useState(null);
  const [warning, setWarning] = useState("");

  const handleColumnClick = (index) => {
    if (columns[index] !== "") {
      setWarning("That column is already marked..!!");
    } else {
      setWarning("");
      setColumns(columns.toSpliced(index, 1, turn ? "X" : "O"));
      setTurn((prev) => !prev);
    }
  };

  const handlePlayClick = () => {
    if (play) {
      setColumns(initialValue);
      setTurn(true);
      setWinner(null);
      setWarning(null);
    } else {
      setPlay(true);
    }
  };

  useEffect(() => {
    highLight &&
      setTimeout(() => {
        setHighlight(false);
      }, 1000);
  }, [highLight]);

  useEffect(() => {
    // ? function to check if someone won or the game is a draw
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = true;
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      flag === true && !columns[a] && (flag = false);
      if (
        columns[a] &&
        columns[a] === columns[b] &&
        columns[a] === columns[c]
      ) {
        setWinner(columns[a]);
        return;
      }
    }
    flag === true && setWinner("D");
  }, [columns]);

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
        <div className={`${turn && "tictac-turn"}`}>
          <h3>Player 1</h3>
          {turn && play && <p>Your Turn..</p>}
        </div>
        <div className={`${!turn && "tictac-turn"}`}>
          <h3>Player 2</h3>
          {!turn && play && <p>Your Turn..</p>}
        </div>
      </div>
      <button
        className={`tictac-button ${highLight && "highlighted"}`}
        onClick={handlePlayClick}
      >
        {play ? "Restart" : "Start"}
      </button>
      {highLight && (
        <p style={{ textAlign: "center" }}>Click start to play..!!</p>
      )}
      <p style={{ textAlign: "center" }}>{warning}</p>
      <div className="tictac-container">
        {columns.map((col, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                play ? handleColumnClick(index) : setHighlight(true);
              }}
              className={`tictac-cols ${play && "tictac-cols-hover"} `}
            >
              <p className="tictac-text">{col}</p>
            </div>
          );
        })}
        {winner && (
          <div className="winner-overlay">
            <h2>
              {winner === "X"
                ? "Player1 won!!"
                : winner === "O"
                ? "Player2 won!!"
                : "Draw..!!"}
            </h2>
            <button className="tictac-button" onClick={handlePlayClick}>
              Restart
            </button>
          </div>
        )}
      </div>
      <Info
        infos={[
          "used useState() to manage states of many variables",
          "used map method to display 9 columns of the game",
          "used an object to display value to display (X or O)",
          "used useEffect to show that user need to click the start button to play the game",
        ]}
      />
    </div>
  );
}
