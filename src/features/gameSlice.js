import { createSlice } from "@reduxjs/toolkit";
import { defaultState, canMoveTo, nextRotation } from "../utils/index";

export const gameSlice = createSlice({
  name: "game",
  initialState: defaultState(),
  reducers: {
    pause: () => {},
    resume: () => {},
    moveLeft: (state) => {
      const { shape, grid, x, y, rotation } = state;
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        state.x -= 1;
      }
      return state;
    },
    moveRight: (state) => {
      const { shape, grid, x, y, rotation } = state;
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        state.x += 1;
      }
      return state;
    },
    moveDown: (state) => {
      const { shape, grid, x, y, rotation } = state;
      if (canMoveTo(shape, grid, x, y + 1, rotation)) {
        state.y += 1;
      }
      return state;
    },
    rotate: (state) => {
      const { shape, grid, x, y, rotation } = state;
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        state.rotation = newRotation;
      }
      return state;
    },
    gameOver: () => {},
    restart: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  moveLeft,
  moveRight,
  moveDown,
  rotate,
  pause,
  resume,
  gameOver,
  restart,
} = gameSlice.actions;

export default gameSlice.reducer;
