import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { count } = props;

  return (
    <div>
      { count }
    </div>
  );
};

Display.propTypes = {
  count: PropTypes.string,
};

Display.defaultProps = {
  count: '0',
};

export default Display;
