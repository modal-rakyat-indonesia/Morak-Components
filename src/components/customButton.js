import React from 'react';
import PropTypes from 'prop-types';

import '../styles/controls/button.scss';

const CustomButton = ({
  children, size, type, onClick, disabled
}) => (
  <button
    onClick={onClick}
    className={`custom-btn btn ${size} btn-${type}`}
    disabled={disabled}
  >
    {children}
  </button>
);

CustomButton.defaultProps = {
  size: 'medium',
  type: 'outline',
  children: '',
  onClick: () => {
  },
  disabled: false
};

CustomButton.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  disabled: PropTypes.bool
};

export default CustomButton;
