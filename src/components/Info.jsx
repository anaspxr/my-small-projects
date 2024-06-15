import React, { useState } from "react";

export default function Info(props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="info">
      <button
        onClick={() => {
          setShowInfo((prev) => !prev);
        }}
      >
        {showInfo ? "Hide info" : "Show info"}
      </button>
      <ul></ul>
    </div>
  );
}
