import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

class CustomInput extends React.Component {
  componentWillMount() {
    const { value } = this.props;
    this.setState({
      isActive: value !== '' && value !== undefined
    });
  }

  onFocus = () => {
    this.setState({
      isActive: true
    });
  }

  onBlur= (e) => {
    if (e.target.value === '') {
      this.setState({
        isActive: false
      });
    }
  }

  render() {
    const attributes = this.props;

    return (
      <FormGroup>
        <Label className={this.state.isActive ? 'active' : ''}>
          {attributes.label}
        </Label>
        <Input
          ref={(input) => {
            this.input = input;
          }}
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
