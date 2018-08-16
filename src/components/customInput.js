import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import '../styles/customcontrol.scss';

class CustomInput extends React.Component {
  componentWillMount() {
    const { value } = this.props;
    this.setState({
      isActive: value !== '' && value !== undefined,
      isFocused: false
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

  render() {
    const attributes = Map(this.props).delete('attributes').toJS();

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
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

CustomInput.defaultProps = {
  attributes: [],
  value: undefined
};

CustomInput.propTypes = {
  attributes: PropTypes.array,
  value: PropTypes.string
};

export default CustomInput;
