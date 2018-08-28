import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card, CardBody } from 'reactstrap';

import '../styles/components/card.scss';

const CustomBasicCard = ({
  header, contents, footer, action
}) => (
  <div className="basic-card-2">
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
      {
        contents.map((content, index) => (
          <CardBody key={content.id} className={`content${index % 2 !== 0 ? ' odd' : ''}`} onClick={content.action}>
            <Row>
              <Col className="content-text" xs="6">
                <p className="title">{content.title}</p>
              </Col>
              <Col className="amount text-right" xs="6">
                {content.content}
              </Col>
            </Row>
          </CardBody>
          ))
      }
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
  contents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
      PropTypes.object
    ]).isRequired,
    action: PropTypes.func
  })).isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  action: PropTypes.func.isRequired
};

export default CustomBasicCard;
