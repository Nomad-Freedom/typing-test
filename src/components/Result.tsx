import React from "react";
import { Results } from "../App";

const Result = ({ correctWords, wpm, accuracy }: Results) => {
  return (
    <section>
      <h2 className="result-heading">Your Score</h2>
      <div className="result-container">
        <div className="result-container_item">
          <h3>WPM</h3>
          <span>{wpm}</span>
        </div>
        <div className="result-container_item">
          <h3>Accuracy</h3>
          <span>{(accuracy * 100).toFixed(0)}%</span>
        </div>
        <div className="result-container_item">
          <h3>Number of Correct Words</h3>
          <span>{correctWords}</span>
        </div>
      </div>
    </section>
  );
};

export default Result;
