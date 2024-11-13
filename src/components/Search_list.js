"use client"
import React, { useEffect, useState } from "react";

const SearchList = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure we're in the browser before accessing localStorage
      const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
      setSearchHistory(storedSearchHistory);
    }
  }, []);

  return (
    <div className="words-searched">
      {searchHistory.length === 0 ? (
        <p>
          Currently, you do not have any favorite words. Please click on the heart icon to add words to your favorite list.
        </p>
      ) : (
        <ul>
          {searchHistory.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchList;
