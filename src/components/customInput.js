import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import '../styles/controls/input.scss';

class CustomInput extends React.Component {
  componentWillMount() {
    const { value, type } = this.props;
    this.setState({
      isActive: value !== '' && value !== undefined,
      isFocused: false,
      showPassword: false,
      type
    });
  }

  onFocus = () => {
    this.setState({
      isActive: true,
      isFocused: true
    });
  }

  onBlur= (e) => {
    this.setState({
      isFocused: false
    });

    if (e.target.value === '') {
      this.setState({
        isActive: false
      });
    }
  }

  onShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
      type: showPassword ? 'password' : 'text'
    });
  }

  render() {
    const originalType = this.props.type;
    const attributes = Map(this.props).delete('attributes').delete('type').toJS();
    const { showPassword, type } = this.state;
    return (
      <div className="form-group position-relative custom">
        <label
          className={(this.state.isActive ? 'active' : '') +
          (this.state.isFocused ? ' focused' : '')}
          htmlFor={attributes.id}
        >
          {attributes.label}
        </label>
        <input
          id={attributes.id}
          className="form-control"
          type={type}
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {
          originalType === 'password' ? (
            <div
              onClick={this.onShowPassword}
              className="show-password"
              role="presentation"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
            </div>
          ) : ''
        }
      </div>
    );
  }
}

CustomInput.defaultProps = {
  attributes: [],
  value: undefined,
  type: 'text'
};

CustomInput.propTypes = {
  attributes: PropTypes.array,
  value: PropTypes.string,
  type: PropTypes.string
};

export default CustomInput;
