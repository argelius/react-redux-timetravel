import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Row from '../components/Row';
import Cell from '../components/Cell';
import * as Actions from '../actions';

const Grid = ({width, height, cells, actions}) => {
  let rows = [];

  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {
      row.push(
        <Cell
          key={x}
          onClick={() => actions.toggleCell({x, y})}
          filled={cells[y * width + x] === 1}
        />
      );
    }

    rows.push(<Row key={y}>{row}</Row>);
  }

  return <div>{rows}</div>;
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
)(Grid);
