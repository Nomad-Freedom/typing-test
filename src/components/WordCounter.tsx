import { useState } from "react";
import { shuffleArray, wordBank } from "../lib/wordBank";

const WordCounter = () => {
  const [words, setWords] = useState<string[]>(() => shuffleArray(wordBank));
  return (
    <div>
      {words.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
};

export default WordCounter;
