import { useEffect, useRef } from "react";
import useWords from "../hooks/useWords";
import Word from "./Word";

const WordCounter = () => {
  // get reference to user input
  const uInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    uInput.current?.focus();
  }, []);

  const {
    words,
    activeWordIndex,
    setActiveWordIndex,
    correctWords,
    setCorrectWord,
  } = useWords();

  function handleSpace(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      setActiveWordIndex((index) => index + 1);
      if (uInput.current?.value) {
        setCorrectWord(uInput.current?.value);
        uInput.current.value = " ";
      }
    }
  }

  return (
    <>
      <input
        type="text"
        name="word"
        id="word"
        ref={uInput}
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
