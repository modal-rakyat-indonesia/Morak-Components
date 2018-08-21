import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/controls/radiobutton.scss';

export default class CustomRadioButton extends Component {
  componentWillMount() {
    this.setState({
      isValid: this.props.isRequired
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isRequired !== nextProps.isRequired) {
      this.setState({
        isValid: nextProps.isRequired
      });
    }
  }
  render() {
    const {
      inputList, selectedValue, handleChange
    } = this.props;
    // eslint-disable-next-line
    {console.log(this.props)}
    const { isValid } = this.state;
    return (
      <div>
        {
          inputList && inputList.map(input => (
            <label className={input.isDisabled ? 'radio-container radio-disable' : 'radio-container'} key={input.id}>
              <input type="radio" id={input.id} checked={input.value === selectedValue} name="radio" value={input.value} disabled={input.isDisabled} onChange={handleChange} />
              {input.label}
              <span className={isValid ? 'radio-checkmark' : 'radio-checkmark radio-error'} />
            </label>
          ))
        }
      </div>
    );
  }
}

CustomRadioButton.propTypes = {
  isRequired: PropTypes.bool.isRequired,
  inputList: PropTypes.array.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleChange: PropTypes.func.isRequired
};
