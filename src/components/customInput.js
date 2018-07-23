import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import { Map } from 'immutable';

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
      <FormGroup>
        <Label className={(this.state.isActive ? 'active' : '') +
          (this.state.isFocused ? ' focused' : '')}
        >
          {attributes.label}
        </Label>
        <Input
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </FormGroup>
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
