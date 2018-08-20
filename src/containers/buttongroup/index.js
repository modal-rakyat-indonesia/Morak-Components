import React from 'react';
import CustomButtonGroup from '../../components/customButtonGroup';
import CustomButton from '../../components/customButton';
import { performButtonGroupValidation } from '../../helpers/validation';

const data = [
  {
    id: 1,
    text: 'Male'
  },
  {
    id: 2,
    text: 'Female'
  }
];

class ButtonGroup extends React.Component {
  componentWillMount() {
    this.setState({
      selectedValue: 1,
      selectedValue2: '',
      valid: true
    });
  }

  onSelectionChange = (id) => {
    this.setState({
      selectedValue: id
    });
  }

  onSelectionChange2 = (id) => {
    this.setState({
      selectedValue2: id
    });
  }

  onSubmit = () => {
    const { selectedValue2 } = this.state;
    this.setState({
      valid: performButtonGroupValidation(true, selectedValue2)
    });
  };

  render() {
    const { selectedValue, selectedValue2, valid } = this.state;
    return (
      <div>
        <h2>
        Button Group
        </h2>
        <p>This page contains Modal Rakyat standardized controls for button
           group as a substitution for radio button.
        </p>
        <div className="standard-button">
          <div className="section-title">
            <p><strong>Contains button group with multiple choices</strong></p>
            <CustomButtonGroup
              selectedValue={selectedValue}
              label="gender"
              options={data}
              onSelectionClick={this.onSelectionChange}
            />
            <br />
            <p>
              <small>Note: Each component of button group must pass a selected value
               to its parent
              </small>
            </p>
          </div>
        </div>
        <div className="standard-button">
          <div className="section-title">
            <p><strong>Trigger an error message on submit</strong><br />
              <small>Button group will automatically trigger error if
                 no value is detected and the control is set to required
              </small>
            </p>
            <CustomButtonGroup
              selectedValue={selectedValue2}
              label="gender"
              options={data}
              onSelectionClick={this.onSelectionChange2}
              valid={valid}
            />
            <br />
            <CustomButton size="medium" type="primary" onClick={this.onSubmit}>
              Try Submit!
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonGroup;
