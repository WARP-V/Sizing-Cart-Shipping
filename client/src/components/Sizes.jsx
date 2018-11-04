import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Sizes = ({
  sizes, defaultSizes, curButton, setCurrent,
}) => (
  <div className="sizes-info">
    <div className="sizes-title">
      <span>Select Size</span>
      <span className="sizes-guide">Size Guide</span>
    </div>
    <div className="sizes-table">
      {
        defaultSizes.map(
          (size, i) => (
            <Row
              row={size}
              change={(id) => { setCurrent(id + (i * 5)); }}
              curButton={curButton - (i * 5)}
              available={sizes}
            />
          ),
        )
       }
    </div>
  </div>
);

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object),
  defaultSizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  curButton: PropTypes.number,
  setCurrent: PropTypes.func,
};

Sizes.defaultProps = {
  sizes: [],
  defaultSizes: [],
  curButton: -1,
  setCurrent: () => {},
};

export default Sizes;
