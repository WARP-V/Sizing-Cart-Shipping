import React from 'react';
import PropTypes from 'prop-types';

const Sizes = ({ sizes }) => (
  <div className="sizes-table">
    {sizes.map((size, i) => <button type="button" className="sizes-buttons" key={`size_${i + 1}`}>{size}</button>)}
  </div>
);

export default Sizes;

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

Sizes.defaultProps = {
  sizes: [['no sizes']],
};
