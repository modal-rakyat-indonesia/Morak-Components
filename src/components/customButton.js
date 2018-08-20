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
  size: 'medium',
  type: 'outline',
  children: '',
  onClick: () => {
  }
};

CustomButton.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default CustomButton;
