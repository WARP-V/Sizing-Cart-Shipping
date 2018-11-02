import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Sizes = ({ sizes, defaultSizes }) => {
  
  return (
    <div className="sizes-info">
      <div className="sizes-title">
        <span>Select Size</span><span className="sizes-guide">Size Guide</span> 
      </div>
      <div className="sizes-table">
        {defaultSizes.map((size, i) => <Row row={size} available={sizes}/>)}
      </div>
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
