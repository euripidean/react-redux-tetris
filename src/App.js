import "./App.css";
import GridBoard from "./Components/GridBoard/GridBoard";
import NextBlock from "./Components/NextBlock/NextBlock";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";
import Controls from "./Components/Controls/Controls";
import MessagePopup from "./Components/MessagePopup/MessagePopup";
import header from "./images/header.png";
import gif from "./images/paw-patrol-gif.gif";

function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={header} alt="Paw Patrol Tetris" />
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <img className="patrol" src={gif} alt="Paw Patrol Tetris" />
      </div>
    </div>
  );
}

export default App;
