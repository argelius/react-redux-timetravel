import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from '../actions';

const style = {
  margin: '10px 0'
};

const SetSize = ({width, height, actions}) => {
  const handleWidthChange = (e) => {
    /**
     * Set a new grid size.
     */
    actions.setGridSize({
      width: parseInt(e.target.value),
      height
    });
  };

  const handleHeightChange = (e) => {
    actions.setGridSize({
      width,
      height: parseInt(e.target.value)
    });
  };

  return (
    <div style={style}>
      <label>
        Width&nbsp;
        <input
          /**
           * Execute a function when the
           * cell is clicked.
           */
          onChange={handleWidthChange}
          value={width}
          type='number'
          min='0'
          max='20' />
      </label>
      <label>
        Height&nbsp;
        <input
          onChange={handleHeightChange}
          value={height}
          type='number'
          min='0'
          max='20' />
      </label>
    </div>
  );
};

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

/**
 * Connect the component to
 * the Redux Store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSize);
