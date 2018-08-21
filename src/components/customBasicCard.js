import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card, CardBody } from 'reactstrap';

import '../styles/components/card.scss';

const CustomBasicCard = ({
  header, content, footer, action
}) => (
  <div className="basic-card">
    <Card>
      <CardBody className="header">
        <Row>
          <Col xs="10">
            <h5>{header}</h5>
          </Col>
          <Col className="text-right" xs="2">
            <button className="btn btn-default btn-next" onClick={action}>
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </button>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="content">
        <p>{content}</p>
      </CardBody>
      <CardBody className="footer">
        {footer}
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
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  action: PropTypes.func.isRequired
};

export default CustomBasicCard;
