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

export default Description;

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.strings).isRequired,
};

