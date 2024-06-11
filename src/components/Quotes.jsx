import React, { useEffect, useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState();
  const fetchQuotes = () => {
    const randomNum = Math.floor(Math.random() * 30);
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quotes[randomNum]);
      });
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="content-container">
      <button className="fetch-button" onClick={fetchQuotes}>
        Fetch another Quote
      </button>
      <h2>{quote && quote.quote}</h2>
      <h3>{quote && "-" + quote.author}</h3>
    </div>
  );
}
