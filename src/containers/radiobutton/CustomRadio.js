import React, { Component } from 'react';
import CustomRadioButton from '../../components/CustomRadioButton';

export default class CustomRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      required: true,
      selectedValue: 'checked'
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
        id: '1',
        value: 'checked',
        label: 'Checked',
        isDisabled: false
      },
      {
        id: '2',
        value: 'unchecked',
        label: 'Unchecked',
        isDisabled: false
      },
      {
        id: '3',
        value: 'disabled',
        label: 'Disable',
        isDisabled: true
      }
    ];
    return (
      <div>
        <h4>Custom Radio Button</h4>
        <p>Contains basic functionality of radio button</p>
        <p>
          <strong>Customize radio button</strong><br />
          <small>Specify behavior for radio button when checked, unchecked, hover & disable</small>
        </p>
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
