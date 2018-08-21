import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import CustomLabel from '../../components/customLabel';

const Label = () => (
  <div>
    <h2>
      Custom Label
    </h2>
    <p>This page contains Modal Rakyat standardized style for custom label.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel />
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="primary">
          <div>
            Verified Plus <FontAwesomeIcon icon={faStar} size="sm" />
          </div>
        </CustomLabel>
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="prioritas">
          <div>
            Prioritas <FontAwesomeIcon icon={faStar} size="sm" />
          </div>
        </CustomLabel>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="primary">
          Berhasil
        </CustomLabel>
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="warning">
          Pending
        </CustomLabel>
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="danger">
          Gagal
        </CustomLabel>
      </Col>
    </Row>
    <Row className="mt-2">
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="outline-primary">
          Gagal
        </CustomLabel>
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="outline-warning">
          Gagal
        </CustomLabel>
      </Col>
      <Col xs="12" sm="12" md="12" lg="2">
        <CustomLabel type="outline-danger">
          Gagal
        </CustomLabel>
      </Col>
    </Row>
  </div>
);

export default Label;
