import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import useWords from "../hooks/useWords";
import Timer from "./Timer";
import Word from "./Word";
import Wpm from "./Wpm";
import { timeAtom } from "../store";

const WordCounter = () => {
  // get reference to user input
  const uInput = useRef<HTMLInputElement>(null);
  const [startCount, setStartCount] = useState(false);
  const [time, setTime] = useAtom(timeAtom);
  const {
    words,
    activeWordIndex,
    setActiveWordIndex,
    correctWords,
    setCorrectWord,
  } = useWords();

  useEffect(() => {
    uInput.current?.focus();
  }, []);

  useEffect(() => {
    if (time === 0) {
      resetGame();
    }
  }, [time]);

  function resetGame() {
    setStartCount(false);
    setTime(60);
    setActiveWordIndex(0);
    setCorrectWord();
  }

  function handleSpace(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      setActiveWordIndex((index) => index + 1);
      if (uInput.current?.value) {
        setCorrectWord(uInput.current?.value);
        uInput.current.value = " ";
      }
    }
    if (!startCount) setStartCount(true);

    if (activeWordIndex === words.length || time <= 0) {
      setStartCount(false);
      setTime(60);
    }
  }

  return (
    <>
      <Wpm correctWords={correctWords} />
      <Timer start={startCount} />
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
