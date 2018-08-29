import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CustomLabel from './customLabel';

const CustomProfileData = ({ title, status, idNo }) => (
  <Card className="profile-data">
    <CardBody>
      <Row>
        <Col xs="8" className="text-left">
          <h5 className="profile-title">{title}</h5>
          <div className="profile-label">
            <CustomLabel text={status} />
          </div>
        </Col>
        <Col xs="4" className="text-right">
          <span className="id-number">{idNo}</span>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

CustomProfileData.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  idNo: PropTypes.string.isRequired
};

export default CustomProfileData;
