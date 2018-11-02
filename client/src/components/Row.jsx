import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row, available }) => {
  return (
    <div className="row">
      {row.map((item, i) => {
        return (
          <div className={`sizes-buttons ${!available.includes(item) ? 'available' : ''}`} key={`size_${i + 1}`}>
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
