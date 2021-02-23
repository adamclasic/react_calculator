import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ count }) => (
  <div>
    { count }
  </div>
);

Display.propTypes = {
  count: PropTypes.string,
};

Display.defaultProps = {
  count: '0',
};

export default Display;
