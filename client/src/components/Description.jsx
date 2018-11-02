import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (

  <div className="description">
    <div className="description-paragraph">
      <p>
        { description[2] }
      </p>
    </div>
    <div className="description-details">
      <ul className="details">
        Shown:
        { description[1] }
        <br />
        Style:
        { description[0] }
      </ul>
    </div>
  </div>
);

export default Description;

Description.propTypes = {
  description: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

Description.defaultProps = {
  description: ['no description'],
};
