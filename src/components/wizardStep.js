import React from 'react';
import PropTypes from 'prop-types';

import '../styles/controls/wizardstep.scss';

class WizardStep extends React.Component {
  componentWillMount() {
  }

  render() {
    const {
      Step1, Step2, Step3, Step4, activeStep, onChangeStep
    } = this.props;
    return (
      <div className="container">
        <ul className="progressbar">
          <li
            onClick={() => {
              onChangeStep(1);
            }}
            role="presentation"
            className={activeStep >= 1 ? 'active' : ''}
          />
          <li
            onClick={() => {
              onChangeStep(2);
            }}
            role="presentation"
            className={activeStep >= 2 ? 'active' : ''}
          />
          <li
            onClick={() => {
              onChangeStep(3);
            }}
            role="presentation"
            className={activeStep >= 3 ? 'active' : ''}
          />
          <li
            onClick={() => {
              onChangeStep(4);
            }}
            role="presentation"
            className={activeStep >= 4 ? 'active' : ''}
          />
        </ul>
        <div className="content">
          {
          activeStep === 1 ? (
            <Step1 />
          ) : ''
          }
          {
          activeStep === 2 ? (
            <Step2 />
          ) : ''
          }
          {
          activeStep === 3 ? (
            <Step3 />
          ) : ''
          }
          {
          activeStep === 4 ? (
            <Step4 />
          ) : ''
          }
        </div>
      </div>
    );
  }
}

WizardStep.defaultProps = {
  activeStep: 1
};

WizardStep.propTypes = {
  Step1: PropTypes.func.isRequired,
  Step2: PropTypes.func.isRequired,
  Step3: PropTypes.func.isRequired,
  Step4: PropTypes.func.isRequired,
  activeStep: PropTypes.number,
  onChangeStep: PropTypes.func.isRequired
};

export default WizardStep;
