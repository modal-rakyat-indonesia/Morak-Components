import React from 'react';
import { Row, Col } from 'reactstrap';
import BasicButtons from './basicbuttons';

const Buttons = () => (
  <div>
    <h2>
      Buttons
    </h2>
    <p>This page contains Modal Rakyat standardized controls for standard
       button and other type of buttons.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <BasicButtons />
      </Col>
    </Row>
  </div>
);

export default Buttons;
