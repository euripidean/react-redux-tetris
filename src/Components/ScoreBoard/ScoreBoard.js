import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../../features/gameSlice";
import "./ScoreBoard.css";

export default function ScoreBoard() {
  const dispatch = useDispatch();
  const { score, isRunning, gameOver } = useSelector((state) => state);

  return (
    <div className="score-board">
      <p>
        Score: <span id="score">{score}</span>
      </p>
      {gameOver ? null : (
        <button
          className="score-board-button"
          onClick={() => {
            if (isRunning) {
              dispatch(pause());
            } else {
              dispatch(resume());
            }
          }}
        >
          {isRunning ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
      )}

      <button
        className="score-board-button restart"
        onClick={() => {
          dispatch(restart());
        }}
      >
        <i className="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
}
