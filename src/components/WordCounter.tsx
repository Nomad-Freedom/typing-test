import { useState } from "react";
import { shuffleArray, wordBank } from "../lib/wordBank";
import Word from "./Word";

const WordCounter = () => {
  const [words, setWords] = useState<string[]>(() => shuffleArray(wordBank));
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }
  function handleSpace(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      setActiveWordIndex((index) => index + 1);
      setUserInput("");
    }
  }
  return (
    <>
      <input
        type="text"
        name="word"
        id="word"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleSpace}
      />
      <div>
        {words.map((word, index) => {
          const isActive = index === activeWordIndex;
          return <Word key={index} active={isActive} value={word} />;
        })}
      </div>
    </>
  );
};

export default WordCounter;
