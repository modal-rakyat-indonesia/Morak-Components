import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomProgressBar from '../../components/customProgressBar';

class ProgressBar extends React.Component {
  componentWillMount() {
    this.setState({
      progress: 10,
      interval: setInterval(() => {
        let { progress } = this.state;
        progress = progress + 10 > 100 ? 10 : progress + 10;
        this.setState({
          progress
        });
      }, 500)
    });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  render() {
    const { progress } = this.state;
    return (
      <div>
        <h2>
      Progress Bar
        </h2>
        <p>This page contains Modal Rakyat standardized controls for progress bar
        </p>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6">
            <p><strong>Customize progress bar size</strong></p>
            <small>size=&#34;small&#34;</small>
            <CustomProgressBar percentage={25} size="small" />
            <br />
            <small>size=&#34;medium&#34;</small>
            <CustomProgressBar percentage={50} size="medium" />
            <br />
            <small>size=&#34;large&#34;</small>
            <CustomProgressBar percentage={80} size="large" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="12" sm="12" md="12" lg="6">
            <p><strong>Use animated color on the bar based on progress</strong></p>
            <small>size=&#34;small&#34;</small>
            <CustomProgressBar percentage={25} size="small" animated />
            <br />
            <small>size=&#34;medium&#34;</small>
            <CustomProgressBar percentage={50} size="medium" animated />
            <br />
            <small>size=&#34;large&#34;</small>
            <CustomProgressBar percentage={80} size="large" animated />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="12" sm="12" md="12" lg="6">
            <p><strong>Display percentage inside progress bar (large size only)</strong></p>
            <small>size=&#34;large&#34;</small>
            <CustomProgressBar percentage={progress} display animated />
          </Col>
        </Row>
      </div>
    );
  }
}
export default ProgressBar;
