import React from "react";
import GridSquare from "../GridSquare/GridSquare";

import "./NextBlock.css";

export default function NextBlock(props) {
  // const { block } = props;
  const block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const grid = block.map((row, rowIndex) => {
    return row.map((square, colIndex) => {
      return <GridSquare key={`${rowIndex}${colIndex}`} color={square} />;
    });
  });

  return <div className="next-block">{grid}</div>;
}
