import React from 'react';
import { Row, Col } from 'reactstrap';
import ToggleButton from './togglebutton';
import CustomRadio from './CustomRadio';

const RadioButton = () => (
  <div>
    <h2>
      Radio Button
    </h2>
    <p>This page contains Modal Rakyat standardized controls for radio button and toggle.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <ToggleButton />
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <CustomRadio />
      </Col>
    </Row>
  </div>
);

export default RadioButton;
