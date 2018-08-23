import React from 'react';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';
import { faChevronDown, faChevronUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'immutable';

import '../styles/components/accordion.scss';

class CustomAccordion extends React.Component {
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
    const { size, customClass, isNested } = this.props;
    return (
      data.map(value => (
        <div key={value.id} className={`card custom-card ${customClass} ${isNested ? 'is-nested-accordion' : ''} `}>
          <div
            id={`btn-toggler-${value.id}`}
            className={`card-header ${size}`}
            role="presentation"
            onClick={id => this.onAccordionClick(value.id)}
          >
            <h5 className="mb-0 button-card">
              {value.title}
              <span className="card-right">
                <FontAwesomeIcon
                  icon={isNested ? faEllipsisV : value.isOpen ? faChevronUp : faChevronDown}
                />
              </span>
            </h5>
          </div>
          <div
            id={`accordion-${value.id}`}
            className={`collapse${value.isOpen ? ' show' : ''}`}
            aria-labelledby={value.id}
          >
            <CardBody>{value.description}</CardBody>
          </div>
        </div>
      ))
    );
  }
}

CustomAccordion.defaultProps = {
  size: 'medium',
  customClass: '',
  isNested: false
};

CustomAccordion.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  customClass: PropTypes.string,
  isNested: PropTypes.bool
};

export default CustomAccordion;
