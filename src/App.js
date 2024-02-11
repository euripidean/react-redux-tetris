import "./App.css";
import GridBoard from "./Components/GridBoard/GridBoard";
import NextBlock from "./Components/NextBlock/NextBlock";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";
import Controls from "./Components/Controls/Controls";
import MessagePopup from "./Components/MessagePopup/MessagePopup";

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src="/header.png" alt="Paw Patrol Tetris" />
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <img
          className="patrol"
          src="/paw-patrol-gif.gif"
          alt="Paw Patrol Tetris"
        />
      </div>
    </div>
  );
}

export default App;
