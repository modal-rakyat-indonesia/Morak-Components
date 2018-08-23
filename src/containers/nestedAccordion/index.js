import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import CustomAccordion from '../../components/customAccordion';
import ContentAccordion from './ContentAccordion';

import '../../styles/components/nestedaccordion.scss';

export default class ImplementNestedAccordion extends Component {
  componentWillMount() {
    this.setState({
      accordionData: [
        {
          id: 1,
          title: 'M-BCA',
          description: this.setAccordionData(),
          isOpen: false
        },
        {
          id: 2,
          title: 'KlikBCA',
          description: this.setAccordionData(),
          isOpen: false
        }
      ]
    });
  }

  setAccordionData = () => {
    const description = <ContentAccordion />;
    return description;
  }

  render() {
    const { accordionData } = this.state;
    return (
      <div>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <CustomAccordion data={accordionData} size="medium" isNested />
          </Col>
        </Row>
      </div>
    );
  }
}
