import { useState } from "react";
import Result from "./components/Result";
import WordCounter from "./components/WordCounter";

export type Results = {
  wpm: number;
  correctWords: string;
};
function App() {
  const [result, setResult] = useState<Results>({} as Results);

  if (!(Object.keys(result).length === 0)) {
    return (
      <main className="container">
        <h1>Typing Speed Test</h1>
        <p>Thank you for playing the game this are your results</p>
        <Result wpm={result.wpm} correctWords={result.correctWords} />
        <button onClick={() => setResult({} as Results)}>Play Again</button>
      </main>
    );
  }
  return (
    <main className="App">
      <h1>Typing Speed Test</h1>
      <p>
        How fast are your fingers? Do the one-minute typing test to find out!
        Press the space bar after each word. At the end, you'll get your typing
        speed in WPM. Good luck!
      </p>
      <WordCounter setResult={setResult} />
    </main>
  );
}

export default App;
