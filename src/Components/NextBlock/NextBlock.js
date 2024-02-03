import React from "react";
import { useSelector } from "react-redux";
import { shapes } from "../../utils/index";
import GridSquare from "../GridSquare/GridSquare";

import "./NextBlock.css";

export default function NextBlock() {
  const nextShape = useSelector((state) => state.nextShape);
  const block = shapes[nextShape][0];
  const grid = block.map((row, rowIndex) => {
    return row.map((square, colIndex) => {
      const color = square ? nextShape : 0;
      return <GridSquare key={`${rowIndex}${colIndex}`} color={color} />;
    });
  });

  return <div className="next-block">{grid}</div>;
}
