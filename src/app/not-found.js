import React from 'react';
import Link from "next/link";
import "../styles/not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for doesnt exist.</p>
      <Link href="/" className="back-home-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
