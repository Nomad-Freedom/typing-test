import WordCounter from "./components/WordCounter";

function App() {
  return (
    <main className="App">
      <h1>Typing Speed Test</h1>
      <p>
        How fast are your fingers? Do the one-minute typing test to find out!
        Press the space bar after each word. At the end, you'll get your typing
        speed in CPM and WPM. Good luck!
      </p>
      <WordCounter />
    </main>
  );
}

export default App;
