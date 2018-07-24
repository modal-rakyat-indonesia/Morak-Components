import React from 'react';
import PropTypes from 'prop-types';

import '../styles/loading.scss';

const LoadingSpinner = ({ show, size }) => (
  show ?
    (
      <div className={`loading-spinner ${size}`}>
        <img src="/img/Spinner.svg" alt="Loading" />
      </div>) : ''
);

LoadingSpinner.defaultProps = {
  size: 'small'
};

LoadingSpinner.propTypes = {
  show: PropTypes.bool.isRequired,
  size: PropTypes.string
};

export default LoadingSpinner;
