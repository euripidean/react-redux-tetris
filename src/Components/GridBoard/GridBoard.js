import React from "react";
import GridSquare from "../GridSquare/GridSquare";
import "./GridBoard.css";

// Represents a 10 x 18 grid of grid squares

export default function GridBoard() {
  // generates an array of 18 rows, each containing 10 GridSquares.
  const grid = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
    }
  }

  return <div className="grid-board">{grid}</div>;
}
