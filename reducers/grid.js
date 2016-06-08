import {
  SET_GRID_SIZE,
  TOGGLE_CELL
} from '../actions';

const grid = (state, action) => {
  switch (action.type) {
    case SET_GRID_SIZE:
      const newCells = new Array(action.width * action.height).fill(0);

      /**
       * Copy previous picture.
       */
      for (let y = 0; y < state.height; y++) {
        for (let x = 0; x < state.width; x++) {
          newCells[y * action.width + x] = state.cells[y * state.width + x];
        }
      }

      return {
        ...state,
        width: action.width,
        height: action.height,
        cells: newCells
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
