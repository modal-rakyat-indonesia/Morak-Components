import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { initialMonthName } from '../helpers/textFormatter';

import '../styles/components/card.scss';

const CustomBasicCard = ({
  header, content, timestamp, action
}) => (
  <div className="notification-card">
    <Card>
      <CardBody className="header">
        <Row>
          <Col xs="6">
            <h5>{header}</h5>
          </Col>
          <Col className="text-right align-center" xs="6">
            <p className="timestamp">{initialMonthName(timestamp)}</p>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="content">
        <p>{content}</p>
      </CardBody>
    </Card>
  </div>
);

CustomBasicCard.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  timestamp: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default CustomBasicCard;
