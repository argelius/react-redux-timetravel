export const SET_GRID_SIZE = 'SET_GRID_SIZE';
export const TOGGLE_CELL = 'TOGGLE_CELL';

export const setGridSize = ({width, height}) => ({
  type: SET_GRID_SIZE,
  width,
  height
});

export const toggleCell = ({x, y}) => ({
  type: TOGGLE_CELL,
  x,
  y
});
