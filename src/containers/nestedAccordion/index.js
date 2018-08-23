import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CustomAccordion from '../../components/customAccordion';


export default class NestedAccordion extends Component {
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
        <ul>
          {
            ListDescription.map(desc => (<li key={desc.id}>{desc.text}</li>))
          }
        </ul>
      );
    return description;
  }

  render() {
    const { accordionData } = this.state;
    return (
      <div>
        <Row>
          <Col>
            <div>
              <CustomAccordion data={accordionData} size="medium" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
