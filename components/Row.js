import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap'
};

const Row = ({children}) => <div style={style}>{children}</div>;

export default Row;
