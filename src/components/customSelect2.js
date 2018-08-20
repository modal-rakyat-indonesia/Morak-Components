import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { Map } from 'immutable';
import { components } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';

import '../styles/controls/input.scss';
import '../styles/controls/select2.scss';

const Placeholder = props => (
  <div>
    <Label className={(props.selectProps.isActive ? 'active' : '') +
          (props.selectProps.isFocused ? ' focused' : '')}
    >
      {props.selectProps.label}
    </Label>
    <components.Control {...props} />
  </div>
);

Placeholder.propTypes = {
  selectProps: PropTypes.object.isRequired
};

class CustomSelect2 extends React.Component {
  componentWillMount() {
    const { value, values, multi } = this.props;
    this.setState({
      isActive: multi ? (values !== undefined ? values.length > 0 : false)
        : (value !== undefined ? value.value !== undefined : false),
      isFocused: false,
      value: {}
    });
  }

  onFocus = () => {
    this.setState({
      isActive: true,
      isFocused: true
    });
  }

  onBlur= (e, isMulti) => {
    this.setState({
      isFocused: false
    });

    if (this.state.value === null) {
      this.setState({
        isActive: false
      });
      return;
    }

    if (isMulti) {
      if (this.state.value.length <= 0) {
        this.setState({
          isActive: false
        });
      }
    } else if (this.state.value.value === undefined) {
      this.setState({
        isActive: false
      });
    }
  }

  onInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
  }

  onSelection = (value, onChange) => {
    this.setState({
      value
    });

    if (onChange) { onChange(value); }
  }

  render() {
    const attributes = Map(this.props)
      .delete('attributes')
      .delete('options')
      .toJS();
    const { isActive, isFocused } = this.state;
    return (
      <FormGroup className="custom">
        <Label className={(isActive ? 'active' : '') +
          (isFocused ? ' focused' : '')}
        >
          {attributes.label}
        </Label>
        <AsyncSelect
          loadOptions={(inputValue, callback) => {
            attributes.loadOptions(inputValue, callback, attributes.loadOptions);
            }}
          {...attributes}
          components={{ Control: Placeholder }}
          placeholder=""
          label={attributes.label}
          isActive={isActive}
          isFocused={isFocused}
          classNamePrefix="react-select"
          defaultOptions
          cacheOptions
          defaultValue={attributes.values}
          onInputChange={this.onInputChange}
          onFocus={this.onFocus}
          onBlur={e => this.onBlur(e, attributes.multi)}
          isDisabled={attributes.disabled}
          isClearable={attributes.clearable}
          isMulti={attributes.multi}
          onChange={value =>
            this.onSelection(value, attributes.onChange)
          }
        />
      </FormGroup>
    );
  }
}

CustomSelect2.defaultProps = {
  attributes: [],
  values: undefined,
  value: undefined,
  multi: false
};

CustomSelect2.propTypes = {
  attributes: PropTypes.array,
  values: PropTypes.array,
  value: PropTypes.object,
  multi: PropTypes.bool
};

export default CustomSelect2;
