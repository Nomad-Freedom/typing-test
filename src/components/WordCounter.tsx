import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import useWords from "../hooks/useWords";
import Timer from "./Timer";
import Word from "./Word";
import Wpm from "./Wpm";
import { timeAtom } from "../store";
import { Results } from "../App";
import { getWordsPerMinute } from "../lib/wordStats";

type Props = {
  setResult: React.Dispatch<React.SetStateAction<Results>>;
};

const WordCounter = ({ setResult }: Props) => {
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
    resetWordBank,
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
    saveResults();
    setStartCount(false);
    setTime(60);
    setActiveWordIndex(0);
    setCorrectWord();
    resetWordBank();
  }

  function saveResults() {
    const wpm = getWordsPerMinute(time, correctWords);
    const successfulWords = correctWords.filter(
      (value) => value === true
    ).length;
    const resultCorrectWords = `${successfulWords} of ${correctWords.length} correct words `;
    const accuracy = successfulWords / correctWords.length;
    setResult({ wpm, correctWords: resultCorrectWords, accuracy });
  }

  function handleSpace(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === " ") {
      if (uInput.current?.value === "") {
        uInput.current.value = "";
        return;
      }

      setActiveWordIndex((index) => index + 1);

      if (uInput.current?.value) {
        setCorrectWord(uInput.current?.value);
        uInput.current.value = "";
      }
    }
    if (!startCount) setStartCount(true);

    if (activeWordIndex === words.length) {
      resetGame();
    }
  }

  return (
    <section className="container">
      <div className="word-counter_stats">
        <Wpm correctWords={correctWords} />
        <Timer start={startCount} />
      </div>
      <input
        type="text"
        name="word"
        id="word"
        ref={uInput}
        onKeyDown={handleSpace}
        placeholder="Type the Words Here"
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
    </section>
  );
};

export default WordCounter;
