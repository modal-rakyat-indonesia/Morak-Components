import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import { Map } from 'immutable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <FormGroup>
        <Label className={(this.state.isActive ? 'active' : '') +
          (this.state.isFocused ? ' focused' : '')}
        >
          {attributes.label}
        </Label>
        <Input
          type="select"
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <option value="" />
          {options.map((value, index) => (
            <option key={value.id} value={value.id}>{value.text}</option>
          ))}
        </Input>
        <FontAwesomeIcon className="arrow-down" icon="chevron-down" />

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