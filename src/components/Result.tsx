import React from "react";
import { Results } from "../App";

const Result = ({ correctWords, wpm }: Results) => {
  return (
    <section>
      <h2>Your Score</h2>
      <div>
        <div>
          <h3>WPM</h3>
          <span>{wpm}</span>
        </div>
        <div>
          <h3>Number of Correct Words</h3>
          <span>{correctWords}</span>
        </div>
      </div>
    </section>
  );
};

export default Result;
