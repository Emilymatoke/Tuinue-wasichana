// Button.js

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import CSS file for button styles

const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
      className={`btn ${type}`} // Apply button styles and type-specific styles
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']), // Different button types
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'primary', // Default to primary button style
  disabled: false,
};

export default Button;
