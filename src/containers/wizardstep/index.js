import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import WizardStepComponent from '../../components/wizardStep';

class WizardStep extends React.Component {
  componentWillMount() {
    this.setState({
      activeStep: 1
    });
  }

  onChangeStep = (step) => {
    // perform validation each step...
    this.setState({
      activeStep: step
    });
  }

  render() {
    const { activeStep } = this.state;
    return (
      <div>
        <h2>
          Wizard Step
        </h2>
        <p>This page contains wizard step control that helps you navigate multiple
           subcomponent. Wizard step works like tabs control.
        </p>
        <p><small>Try to click on each step to see change on the subcomponent</small></p>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <WizardStepComponent
              onChangeStep={this.onChangeStep}
              activeStep={activeStep}
              Step1={() => (
                <p className="wizard-component">This is Step 1</p>
              )}
              Step2={() => (
                <p className="wizard-component">This is Step 2</p>
              )}
              Step3={() => (
                <p className="wizard-component">This is Step 3</p>
              )}
              Step4={() => (
                <p className="wizard-component">This is Step 4</p>
              )}
            />
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ about, auth }) => ({
  options: about.options,
  url: about.url,
  apiUrl: about.apiUrl,
  date: about.date,
  authenticated: auth.authenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardStep);
