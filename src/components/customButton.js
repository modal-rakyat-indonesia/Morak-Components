import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import '../styles/controls/button.scss';

class CustomButton extends React.Component {
  componentWillMount() {
    this.setState({
      attributes: Map(this.props).delete('attributes').toJS()
    });
  }

  render() {
    const {
      children, size, type, onClick, disabled
    } = this.props;
    const { attributes } = this.state;
    return (
      <button
        onClick={onClick}
        className={`custom-btn btn ${size} btn-${type}`}
        disabled={disabled}
        {...attributes}
      >
        {children}
      </button>
    );
  }
}

CustomButton.defaultProps = {
  size: 'medium',
  type: 'outline',
  children: '',
  onClick: () => {
  },
  disabled: false,
  attributes: {}
};

CustomButton.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]),
  disabled: PropTypes.bool,
  attributes: PropTypes.object
};

export default CustomButton;
