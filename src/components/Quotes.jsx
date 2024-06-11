import React, { useEffect, useState } from "react";

export default function Quotes() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const fetchQuotes = () => {
    setLoading(true);
    setError(null);
    fetch("https://dummyjson.com/quotes")
      .then((res) => {
        if (!res.ok) throw new Error("error");
        return res.json();
      })
      .then((data) => {
        const randomNum = Math.floor(Math.random() * data.quotes.length);
        setQuote(data.quotes[randomNum]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(
          <p>
            Failed to fetch from{" "}
            <a href="https://dummyjson.com/quotes">
              https://dummyjson.com/quotes
            </a>
            Try again later
          </p>
        );
        setLoading(false);
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
      {loading && <span>Loading...</span>}
      {error}
      <h2>{quote && quote.quote}</h2>
      <h3>{quote && "-" + quote.author}</h3>
    </div>
  );
}
