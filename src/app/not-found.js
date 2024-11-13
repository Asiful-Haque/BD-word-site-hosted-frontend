import React from "react";
import Link from "next/link";
import "../styles/not-found.css";
import Image from 'next/image';


const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="image">
        <Image
          src="https://content2.mcqstudy.com/bw-static-files/mobile_logo/bengali.webp"
          alt="Example Image"
          layout="intrinsic"
          width={300}
          height={200}
        />
      </div>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! The page you are looking for doesnt exist.
      </p>
      <Link href="/" className="back-home-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
