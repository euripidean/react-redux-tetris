import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
} from "../../features/gameSlice";
import "./Controls.css";

export default function Controls() {
  const dispatch = useDispatch();
  const { isRunning, speed, gameOver } = useSelector((state) => state);

  // GAME TIMER
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  // Handle game updates
  const update = useCallback(
    (time) => {
      requestRef.current = requestAnimationFrame(update);
      if (!isRunning) {
        return;
      }
      if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = time;
      }
      const deltaTime = time - lastUpdateTimeRef.current;
      progressTimeRef.current += deltaTime;
      if (progressTimeRef.current > speed) {
        dispatch(moveDown());
        progressTimeRef.current = 0;
      }
      lastUpdateTimeRef.current = time;
    },
    [dispatch, isRunning, speed]
  );

  // Control when update is called
  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning, update]);

  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={() => {
          dispatch(rotate());
        }}
      >
        <i className="fa-solid fa-rotate"></i>
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        <i className="fa-solid fa-arrow-down"></i>
      </button>
    </div>
  );
}
