import React from 'react';
import PropTypes from 'prop-types';
import { CardBody } from 'reactstrap';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'immutable';

import '../styles/components/accordion.scss';
import '../styles/components/nestedaccordion.scss';

class NestedAccordion extends React.Component {
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
    const { size } = this.props;
    return (
      data.map(value => (
        <div key={value.id} className="card custom-card custom-nested-accordion">
          <div
            id={`btn-toggler-${value.id}`}
            className={`card-header ${value.isOpen ? 'header-nested-accordion' : 'header-nested-accordion-noborder'} ${size}`}
            role="presentation"
            onClick={id => this.onAccordionClick(value.id)}
          >
            <h5 className="mb-0 button-card">
              {value.title}
              <span className="card-right">
                <FontAwesomeIcon
                  icon={value.isOpen ? faChevronUp : faChevronDown}
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

NestedAccordion.defaultProps = {
  size: 'medium'
};

NestedAccordion.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string
};

export default NestedAccordion;
