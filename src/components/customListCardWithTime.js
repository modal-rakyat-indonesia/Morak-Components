import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { dateMonthOnly, IDRFormatter } from '../helpers/textFormatter';

import '../styles/components/card.scss';

const CustomListCardWithTime = ({
  header, contents
}) => (
  <div className="list-card-with-time">
    <Card>
      <CardBody className="header">
        <h5>{header}</h5>
      </CardBody>
      {
        contents.map((content, index) => {
          const date = dateMonthOnly(content.date).split(' ');
          return (
            <CardBody key={content.id} className={`content${index % 2 !== 0 ? ' odd' : ''}`} onClick={content.action}>
              <Row>
                <Col className="timestamp" xs="2">
                  <span className="month">{date[0]}</span>
                  <span className="date">{date[1]}</span>
                </Col>
                <Col className="content-text" xs="5">
                  <p className="title">{content.title}</p>
                  <p className="subtitle"><small>{content.subtitle}</small></p>
                </Col>
                <Col className="amount text-right" xs="5">
                  {content.type === 'debit' ? (
                    <span className="debit">
                      -{IDRFormatter(content.amount)}
                    </span>
                  ) : (
                    <span className="credit">
                      +{IDRFormatter(content.amount)}
                    </span>
                  )}
                </Col>
              </Row>
            </CardBody>
          );
        })
      }
    </Card>
  </div>
);

CustomListCardWithTime.propTypes = {
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
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    action: PropTypes.func
  })).isRequired
};

export default CustomListCardWithTime;
