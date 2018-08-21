import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomMedia from '../../components/customMedia';

const Media = () => (
  <div>
    <h2>
      Media Object
    </h2>
    <p>This page contains Modal Rakyat standardized controls for media
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Media horizontal</strong></p>
        <Row className="funding-content">
          <Col xs="12" sm="12" md="12" lg="12">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              src="/img/nophoto.svg"
              mode="horizontal"
            />
          </Col>
          <Col xs="12" sm="12" md="12" lg="12">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              src="/img/nophoto.svg"
              mode="horizontal"
            />
          </Col>
          <Col xs="12" sm="12" md="12" lg="12">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              src="/img/nophoto.svg"
              mode="horizontal"
            />
          </Col>
        </Row>
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Media vertical</strong></p>
        <Row className="funding-content">
          <Col xs="12" sm="12" md="4" lg="4">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="This is description"
              src="/img/nophoto.svg"
              mode="vertical"
            />
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="This is description"
              src="/img/nophoto.svg"
              mode="vertical"
            />
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <CustomMedia
              title="Title"
              subtitle="Subtitle"
              description="This is description"
              src="/img/nophoto.svg"
              mode="vertical"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Media;
