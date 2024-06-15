import React, { useState } from "react";

export default function Info(props) {
  const [showInfo, setShowInfo] = useState(false);
  const List =
    props.infos &&
    props.infos.map((value, index) => {
      return <li key={index}>{value}</li>;
    });
  return (
    <div className="info">
      <button
        onClick={() => {
          setShowInfo((prev) => !prev);
        }}
      >
        {showInfo ? "Hide info" : "Show info"}
      </button>
      {showInfo && <ul>{List}</ul>}
    </div>
  );
}
