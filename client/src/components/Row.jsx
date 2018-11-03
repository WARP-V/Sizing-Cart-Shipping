import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
  row, available, curButton, change,
}) => (
  <div className="row">
    {row.map((item, i) => (
      <div className={`sizes-buttons ${i === curButton ? 'current' : ''} ${!available.includes(item) ? 'available' : ''}`} onClick={() => (change(i))} key={`size_${i + 1}`} onKeyPress={this.handleKeyPress} role="button" tabIndex="-1">
        <div className="sizes-num">{item}</div>
      </div>
    ))}
  </div>
);


export default Row;


Row.propTypes = {
  row: PropTypes.number.isRequired,
  available: PropTypes.arrayOf(PropTypes.number).isRequired,
  curButton: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
};
