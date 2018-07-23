import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ show }) => (
  show ?
    (
      <div className="loading-spinner">
        <img src="/img/Spinner.svg" alt="Loading" />
      </div>) : ''
);

LoadingSpinner.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingSpinner;
