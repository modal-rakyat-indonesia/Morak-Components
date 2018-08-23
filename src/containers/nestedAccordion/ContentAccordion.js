import React, { Component } from 'react';
// import { Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import NestedAccordion from '../../components/NestedAccordion';

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
    const ListDescription = [
      {
        id: 1,
        text: 'Lorem Ipsum sit dolor amet'
      },
      {
        id: 2,
        text: 'Lorem Ipsum sit dolor amet'
      },
      {
        id: 3,
        text: 'Lorem Ipsum sit dolor amet'
      },
      {
        id: 4,
        text: 'Lorem Ipsum sit dolor amet'
      },
      {
        id: 5,
        text: 'Lorem Ipsum sit dolor amet'
      }
    ];

    const description =
      (
        <ol className="list-group vertical-steps">
          {
            ListDescription.map(desc => (
              <li className="list-group-item vertical-step-content" key={desc.id}>
                <p>{desc.text}</p>
              </li>
            ))
          }
        </ol>
      );
    return description;
  }

  render() {
    const { accordionData } = this.state;
    return (
      <div>
        {/* <Row>
          <Col xs="12" sm="12" md="12" lg="12"> */}
        <NestedAccordion data={accordionData} size="medium" />
        {/* </Col> */}
        {/* </Row> */}
      </div>
    );
  }
}
