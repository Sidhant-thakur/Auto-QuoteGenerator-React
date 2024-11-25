import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch(
      "https://programming-quotesapi.vercel.app/api/random"
    );
    const data = await response.json();
    setQuote(data.quote);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
        <button className="new-quote-button" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
