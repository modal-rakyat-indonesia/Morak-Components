import React, { Component } from 'react';
import CustomRadioButton from '../../components/CustomRadioButton';

export default class CustomRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      required: true,
      selectedValue: ''
    };
  }
  handleOptionChange = ({ target }) => {
    this.setState({
      selectedValue: target.value
    });
  }
  render() {
    const { required, selectedValue } = this.state;
    const dataInput = [
      {
        id: 'fruit',
        value: 'strawberry',
        label: 'Strawberry',
        disabled: false
      },
      {
        id: 'flower',
        value: 'rose',
        label: 'Rose',
        disabled: false
      },
      {
        id: 'animal',
        value: 'tiger',
        label: 'Tiger',
        disabled: false
      }
    ];
    return (
      <div>
        <CustomRadioButton
          isRequired={required}
          inputList={dataInput}
          selectedValue={selectedValue}
          handleChange={this.handleOptionChange}
        />
      </div>
    );
  }
}
