import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card, CardBody } from 'reactstrap';

import '../styles/components/card.scss';

const CustomProfileCard = ({
  header, content, action
}) => (
  <div className="profile-card">
    <Card>
      <CardBody className="header">
        <Row>
          <Col xs="10">
            <h5>{header}</h5>
          </Col>
          <Col className="text-right" xs="2">
            <button className="btn btn-default btn-edit" onClick={action}>
              <FontAwesomeIcon icon={faPencilAlt} size="sm" />
            </button>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="content">
        {content}
      </CardBody>
    </Card>
  </div>
);

CustomProfileCard.propTypes = {
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
  action: PropTypes.func.isRequired
};

export default CustomProfileCard;
