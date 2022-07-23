import React, { useState } from "react";
import adverLast from "../images/adver3.jpg";

export const FloatingAd = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    // floating ad
    <>
      {/* <h1>Hello world</h1> */}
      <div className={`${isClosed ? "ad-display-none" : "newAds"}`}>
        <a onClick={() => setIsClosed(true)} className="icon" href="#">
          X
        </a>
        <a href="#">
          <img src={adverLast} alt="" />
        </a>
      </div>
    </>
  );
};
