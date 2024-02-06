import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
} from "../../features/gameSlice";
import "./Controls.css";

export default function Controls(props) {
  const dispatch = useDispatch();
  const { isRunning, speed } = useSelector((state) => state);

  // GAME TIMER
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  // Handle game updates
  const update = (time) => {
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
  };

  // Control when update is called
  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
}
