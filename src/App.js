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
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </div>
  );
}

export default App;
