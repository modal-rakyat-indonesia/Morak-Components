import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/controls/button.scss';

class CustomButton extends React.Component {
  componentWillMount() {
    this.setState({
      attributes: Map(this.props).delete('attributes').delete('full').toJS()
    });
  }

  render() {
    const {
      children, size, type, onClick, disabled, icon, full
    } = this.props;
    const { attributes } = this.state;
    return (
      <button
        onClick={onClick}
        className={`custom-btn btn ${size} btn-${type}${full ? ' full' : ''}`}
        disabled={disabled}
        {...attributes}
      >
        {children}
        {
          icon !== undefined ? (
            <div className="icon">
              <FontAwesomeIcon icon={icon} />
            </div>
          ) : ''
        }
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
  attributes: {},
  icon: undefined,
  full: false
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
  attributes: PropTypes.object,
  icon: PropTypes.object,
  full: PropTypes.bool
};

export default CustomButton;
