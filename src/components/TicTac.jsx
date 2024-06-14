export default function TicTac() {
  return (
    <div
      className="content-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <button className="tictac-button">Play Tic Tac Toe</button>
      <div className="tictac-container">
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
        <div className="tictac-cols"></div>
      </div>
    </div>
  );
}
