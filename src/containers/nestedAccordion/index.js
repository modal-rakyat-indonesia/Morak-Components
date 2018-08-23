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
          title: <img className="logo-bank" src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/1280px-BCA_logo.svg.png" alt="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/BCA_logo.svg/1280px-BCA_logo.svg.png" />,
          description: <ContentAccordion />,
          isOpen: false
        },
        {
          id: 2,
          title: <img className="logo-bank" src="https://upload.wikimedia.org/wikipedia/id/3/38/CIMB_Niaga_logo.svg" alt="https://upload.wikimedia.org/wikipedia/id/3/38/CIMB_Niaga_logo.svg" />,
          description: <ContentAccordion />,
          isOpen: false
        }
      ]
    });
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
