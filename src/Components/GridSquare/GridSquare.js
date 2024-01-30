import React from "react";
import "./GridSquare.css";

// Represents a grid square with a color

export default function GridSquare({ color }) {
  const classes = `grid-square color-${color}`;
  return <div className={classes} />;
}
