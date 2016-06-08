import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from '../actions';

const style = {
  margin: '10px 0'
};

const SetSize = ({width, height, actions}) => {
  const handleWidthChange = (e) => {
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

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSize);
