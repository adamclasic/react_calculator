/* eslint-disable jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (
  <div role="button" onClick={() => { clickHandler(name); }}>
    { name }
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
