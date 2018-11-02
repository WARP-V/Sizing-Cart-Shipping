import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row, available, curButton, change }) => {
  return (
    <div className="row">
      {row.map((item, i) => {
        return (
          <div className={`sizes-buttons ${i === curButton ? 'current' : ''} ${!available.includes(item) ? 'available' : ''}`} onClick={ () => ( change(i) ) } key={`size_${i + 1}`}>
            <div className="sizes-num">{item}</div>
          </div>
        );
      })}
    </div>
  );
};


export default Row;

Row.defaultProps = {
  available: [],
};
