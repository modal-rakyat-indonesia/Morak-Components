import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { List } from 'immutable';

class CustomMediaAccordion extends React.Component {
  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  onAccordionClick = (id) => {
    const { data } = this.state;
    const list = List(data);

    const index = list.findIndex(p => p.id === id);
    if (index >= 0) {
      data[index].isOpen = !data[index].isOpen;
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== Number(id)) {
        data[i].isOpen = false; // close all accordions except clicked
      }
    }

    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    const { col } = this.props;
    return (
      <Row>
        {
      data.map(value => (
        <Col xs="12" sm="12" md={col} lg={col}>
          <div className="custom-media-accordion">
            <img className="img-fluid" src={value.src} alt={value.title} />
            <div className="card custom-card">
              <div
                id={`btn-toggler-${value.id}`}
                className={`card-header ${!value.isAccordion ? ' disabled' : ''}`}
                role="presentation"
                onClick={id =>
          (value.isAccordion ?
          this.onAccordionClick(value.id) : () => {})}
              >
                <Row>
                  <Col xs="10">
                    <h5 className="mb-0 button-card">
                      {value.title}
                    </h5>
                    <p>
                      {value.subtitle}
                    </p>
                  </Col>
                  {
            value.isAccordion ? (
              <Col className="text-center icon" xs="2">
                <span className="card-right">
                  <FontAwesomeIcon
                    icon={value.isOpen ? faChevronUp : faChevronDown}
                  />
                </span>
              </Col>
            ) : ''
          }
                </Row>

              </div>
              <div
                id={`accordion-${value.id}`}
                className={`collapse${value.isOpen ? ' show' : ''}`}
                aria-labelledby={value.id}
              >
                <CardBody className="team-card" dangerouslySetInnerHTML={{ __html: value.description }} />
              </div>
            </div>
          </div>
        </Col>
      ))}
      </Row>
    );
  }
}

CustomMediaAccordion.defaultProps = {
  col: '12'
};

CustomMediaAccordion.propTypes = {
  data: PropTypes.array.isRequired,
  col: PropTypes.number
};

export default CustomMediaAccordion;
