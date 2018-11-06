import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
  row, available, curButton, change,
}) => (
  <div className="row">
    {row.map((item, i) => (
      <div className={`sizes-buttons ${i === curButton ? 'current' : ''} ${!available.includes(item) ? 'available' : ''}`} onClick={() => (change(i))} key={`size_${i + 1}`} onKeyPress={this} role="presentation" tabIndex="-1">
        <div className="sizes-num">{item}</div>
      </div>
    ))}
  </div>
);

Row.propTypes = {
  row: PropTypes.arrayOf(PropTypes.any),
  available: PropTypes.arrayOf(PropTypes.any),
  curButton: PropTypes.number,
  change: PropTypes.func,
};

Row.defaultProps = {
  row: [],
  available: [],
  curButton: -1,
  change: () => {},
};

export default Row;
