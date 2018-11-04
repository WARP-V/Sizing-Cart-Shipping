import React from 'react';
import PropTypes from 'prop-types';


const Description = ({ description }) => (
  <div className="description">
    <div className="description-paragraph">
      <p>
        { description[2] }
      </p>
    </div>
  </div>
);

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
};

Description.defaultProps = {
  description: JSON.stringify([]),
};

export default Description;
