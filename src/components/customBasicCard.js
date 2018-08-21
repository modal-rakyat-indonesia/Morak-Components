import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from 'reactstrap';

import '../styles/components/card.scss';

const CustomBasicCard = ({
  header, content, footer, action
}) => (
  <div className="basic-card">
    <Card>
      <CardBody>
        <h5>{header}</h5>
        <button className="btn btn-default btn-next" onClick={action}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </CardBody>
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <CardBody>
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
