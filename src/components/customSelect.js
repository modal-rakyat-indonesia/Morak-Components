import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { Map } from 'immutable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/controls/input.scss';

class CustomSelect extends React.Component {
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
    const attributes = Map(this.props)
      .delete('attributes')
      .delete('options')
      .toJS();
    const { options } = this.props;
    return (
      <FormGroup className="custom">
        <Label className={(this.state.isActive ? 'active' : '') +
          (this.state.isFocused ? ' focused' : '')}
        >
          {attributes.label}
        </Label>
        <select
          className="form-control"
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <option value="" />
          {options.map((value, index) => (
            <option key={value.id} value={value.id}>{value.text}</option>
          ))}
        </select>
        <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />

      </FormGroup>
    );
  }
}

CustomSelect.defaultProps = {
  attributes: [],
  value: undefined
};

CustomSelect.propTypes = {
  attributes: PropTypes.array,
  options: PropTypes.array.isRequired,
  value: PropTypes.string
};

export default CustomSelect;
