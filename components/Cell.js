import React from 'react';

const style = {
  width: '24px',
  height: '24px',
  border: '1px solid black'
};

const Cell = ({children, filled = false, onClick}) => (
  <div
    onClick={onClick}
    style={{
      ...style,
      backgroundColor: filled ? '#000' : '#fff'
    }}
  >
    {children}
  </div>
);

export default Cell;
