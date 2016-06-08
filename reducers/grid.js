import {
  SET_GRID_SIZE,
  TOGGLE_CELL
} from '../actions';

const grid = (state, action) => {
  switch (action.type) {
    case SET_GRID_SIZE:
      return {
        ...state,
        width: action.width,
        height: action.height,
        cells: new Array(action.width * action.height).fill(0)
      };
    case TOGGLE_CELL:
      const cells = [...state.cells];
      const {x, y} = action;
      const val = cells[y * state.width + x];

      cells[y * state.width + x] = val === 1 ? 0 : 1;

      return {
        ...state,
        cells
      };
    default:
      return state;
  }
};

export default grid;
