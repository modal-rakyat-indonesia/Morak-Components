import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomToggleButton from '../../components/customToggleButton';

class ToggleButton extends React.Component {
  componentWillMount() {
    this.setState({
      toggled: false
    });
  }

  onToggle = (toggled) => {
    this.setState({
      toggled
    });
  }

  render() {
    const { toggled } = this.state;
    return (
      <div className="section-title">
        <h4>Toggle Button</h4>
        <p>Contains basic functionality of toggle button</p>
        <p>
          <strong>Customize toggle button size</strong><br />
          <small>Specify size for toggle button with active/inactive text</small>
        </p>
        <Row>
          <Col>
            <CustomToggleButton size="small" defaultTitle="No" toggledTitle="Yes" />
            <p className="text-center"><small>size=&#34;small&#34;</small></p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <CustomToggleButton size="medium" defaultTitle="No" toggledTitle="Yes" />
            <p className="text-center"><small>size=&#34;medium&#34;</small></p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <CustomToggleButton size="large" defaultTitle="No" toggledTitle="Yes" />
            <p className="text-center"><small>size=&#34;large&#34;</small></p>
          </Col>
        </Row>
        <p>
          <strong>Trigger action on toggle</strong><br />
          <small>Specify an action when toggle button is changed</small>
        </p>
        <Row className="mt-2">
          <Col>
            <CustomToggleButton
              size="medium"
              defaultTitle="No"
              toggledTitle="Yes"
              onToggle={this.onToggle}
            />
            <p className="text-center"><small>Current status: {toggled ? 'active' : 'inactive'}</small></p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ToggleButton;
