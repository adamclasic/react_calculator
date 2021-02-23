import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { count } = props;

  return (
    <div>
      Display:
      {' '}
      { count }
    </div>
  );
};

Display.propTypes = {
  count: PropTypes.string,
};

Display.defaultProps = {
  count: '00',
};

export default Display;
