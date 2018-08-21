import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/progressbar.scss';

const CustomProgress = ({
  percentage, size, animated, display
}) => (
  <div className={`progress custom ${display ? 'large' : size}`}>
    <div
      className={`progress-bar 
      ${animated ? (percentage <= 25 ? 'danger' : (percentage <= 75 ? 'warning' : 'complete')) : ''}`}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
            width: `${percentage}%`
          }}
    >
      { display ? `${percentage}%` : '' }
    </div>
  </div>
);

CustomProgress.defaultProps = {
  size: 'small',
  display: false,
  animated: false
};

CustomProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  size: PropTypes.string,
  display: PropTypes.bool,
  animated: PropTypes.bool
};

export default CustomProgress;
