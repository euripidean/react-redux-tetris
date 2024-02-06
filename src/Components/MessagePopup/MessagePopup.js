import React from "react";
import { useSelector } from "react-redux";
import "./MessagePopup.css";

// Displays a message
export default function MessagePopup(props) {
  const { isRunning, gameOver } = useSelector((state) => state);

  return (
    <div className={isRunning && !gameOver ? `hidden` : `message-popup`}>
      {gameOver ? <h2>Game Over</h2> : <h2>Paused</h2>}
    </div>
  );
}
