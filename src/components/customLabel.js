import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/customlabel.scss';

const customLabel = ({
  type, children
}) => (
  <div className={type}>
    {children}
  </div>
);

customLabel.defaultProps = {
  type: 'success',
  children: 'Verified'
};

customLabel.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element])
};

export default customLabel;
