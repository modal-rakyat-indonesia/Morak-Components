import React from 'react';
import PropTypes from 'prop-types';

import '../styles/controls/button.scss';

const CustomButton = ({
  children, size, type, onClick
}) => (
  <button onClick={onClick} className={`custom-btn btn ${size} btn-${type}`}>
    {children}
  </button>
);

CustomButton.defaultProps = {
  size: 'small',
  type: 'default',
  children: ''
};

CustomButton.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default CustomButton;
