import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from 'reactstrap';

import '../styles/components/card.scss';

const CustomListCard = ({
  header, contents, footer
}) => (
  <div className="basic-list-card">
    <Card>
      <CardBody className="header">
        <h5>{header}</h5>
      </CardBody>
      {
        contents.map((content, index) => (
          <CardBody key={content.id} className={`content${index % 2 !== 0 ? ' odd' : ''}`} onClick={content.action}>
            <Row>
              <Col className="content-text" xs="7">
                <p className="title">{content.title}</p>
              </Col>
              <Col className="amount text-right" xs="5">
                {content.content}
              </Col>
            </Row>
          </CardBody>
          ))
      }
      <CardBody className="footer">
        <Row>
          <Col className="content-text" xs="7">
            <p className="title">{footer.title}</p>
          </Col>
          <Col className="amount text-right" xs="5">
            <button onClick={footer.action} className="btn custom-btn btn-dark">
              {footer.content}
            </button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

CustomListCard.propTypes = {
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
  footer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }).isRequired
};

export default CustomListCard;
