import { useState } from "react";
import { shuffleArray, wordBank } from "../lib/wordBank";

const useWords = () => {
  // initialize word bank and randomized words
  const [words, setWords] = useState<string[]>(() => shuffleArray(wordBank));
  // active word state
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  // correct words array
  const [correctWords, setCorrectWords] = useState<boolean[]>([]);

  function setCorrectWord(userInput: string) {
    // check if user input match word bank
    const isWordMatch = userInput.trim() === words[activeWordIndex];
    // update correct word array state
    setCorrectWords((correctWords) => [...correctWords, isWordMatch]);
  }

  return {
    words,
    activeWordIndex,
    setActiveWordIndex,
    correctWords,
    setCorrectWord,
  };
};

export default useWords;
