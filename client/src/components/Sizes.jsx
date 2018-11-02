import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Sizes = ({ sizes, defaultSizes }) => {
  console.log("sizes", sizes);
  return (
    <div className="sizes-table">
      {defaultSizes.map((size, i) => <Row row={size} available={sizes}/>)}
    </div>
  )
};

export default Sizes;

Sizes.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

Sizes.defaultProps = {
  sizes: [['no sizes']],
};
