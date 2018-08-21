import React from 'react';
import { Row, Col } from 'reactstrap';

const Heading = () => (
  <div>
    <h2>
      Heading
    </h2>
    <p>This page contains Modal Rakyat standardized sized for heading.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="4">
        <h1>Heading 1</h1>
        <h5>*H1 - 51 Size, 61 Line</h5>
      </Col>
      <Col xs="12" sm="12" md="12" lg="4">
        <h2>Heading 2</h2>
        <h5>*H2 - 38 Size, 46 Line </h5>
      </Col>
      <Col xs="12" sm="12" md="12" lg="4">
        <h3>Heading 3</h3>
        <h5>*H3 - 28 Size, 42 Line </h5>
      </Col>
      <Col xs="12" sm="12" md="12" lg="4">
        <h4>Heading 4</h4>
        <h5>*H4 - 21 Size, 32 Line </h5>
      </Col>
      <Col xs="12" sm="12" md="12" lg="4">
        <h5>Heading 5</h5>
        <h5>*H5 - 16 Size, 26 Line </h5>
      </Col>
      <Col xs="12" sm="12" md="12" lg="4">
        <div className="subheading">Subheading</div>
        <h5>*Subheading - 19 Size, 29 Line </h5>
      </Col>
    </Row>
  </div>
);

export default Heading;
