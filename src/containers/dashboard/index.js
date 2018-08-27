import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CustomCarousel from './CustomCarousel';
import CustomBasicCard from '../../components/customBasicCard';
import { listBasicCard, listCardWithTimeData, listCardFooter }
  from '../../components/customListData';
import CustomListCardWithTime from '../../components/customListCardWithTime';
import CustomListCard from '../../components/customListCard';
import '../../styles/components/dashboard.scss';

export default class Dashboard extends Component {
  componentWillMount
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <div className="dashboard-container">
              <CustomCarousel />
              <CustomBasicCard
                header="Heading"
                content="A brown fox jumps over the lazy dog. Teddy Bear goes to Hollywood."
                footer="A brown fox jumps over the lazy dog."
                action={() => {
              console.warn('clicked!');
            }}
              />
              <CustomListCardWithTime
                header="Heading"
                contents={listCardWithTimeData}
              />
              <CustomListCard
                header="Heading"
                contents={listBasicCard}
                footer={listCardFooter}
              />
            </div>

          </Col>
        </Row>
      </div>
    );
  }
}
