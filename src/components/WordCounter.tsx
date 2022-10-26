import { useState } from "react";
import useWords from "../hooks/useWords";
import Word from "./Word";

const WordCounter = () => {
  const [userInput, setUserInput] = useState("");
  const {
    words,
    activeWordIndex,
    setActiveWordIndex,
    correctWords,
    setCorrectWord,
  } = useWords();

  function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }
  function handleSpace(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      setActiveWordIndex((index) => index + 1);

      setCorrectWord(userInput);

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
          const isCorrect = correctWords[index];

          return (
            <Word
              key={index}
              active={isActive}
              value={word}
              correct={isCorrect}
            />
          );
        })}
      </div>
    </>
  );
};

export default WordCounter;
