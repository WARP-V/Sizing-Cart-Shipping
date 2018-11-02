import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row, available }) => {
  console.log("available", available);
  return (
    <div className="row">
      {row.map((item, i) => <div className={`sizes-buttons ${!available.includes(item) ? 'available' : ''}`} key={`size_${i + 1}`}>{item}</div>)}
    </div>
  );
}


export default Row;

Row.defaultProps = {
  available: [],
}