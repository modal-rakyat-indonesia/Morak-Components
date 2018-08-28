import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CustomCarousel from './CustomCarousel';
import CustomBasicCard2 from '../../components/CustomBasicCard2';
import { listBasicCard, listCardWithTimeData, listCardFooter, contentCard }
  from '../../components/customListData';
import CustomListCardWithTime from '../../components/customListCardWithTime';
import CustomListCard from '../../components/customListCard';
import CustomButton from '../../components/customButton';
import '../../styles/components/dashboard.scss';

const button =
(
  <div>
    <CustomButton size="small card-footer-button-left" type="primary">
  Top Up Dana
    </CustomButton>
    <CustomButton size="small card-footer-button-right" type="dark">
  Marketplace
    </CustomButton>
  </div>
);


export default class Dashboard extends Component {
  componentDidMount
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <div className="dashboard-container">
              <CustomCarousel />
              <CustomBasicCard2
                header="Selamat datang, Adjie! Anda memiliki 7 notifikasi baru."
                contents={contentCard}
                footer={button}
                action={() => {
              console.warn('clicked!');
            }}
              />
              <CustomListCard
                header="Performa Akun"
                contents={listBasicCard}
                footer={listCardFooter}
              />
              <CustomListCardWithTime
                header="Aktifitas Terbaru"
                contents={listCardWithTimeData}
              />

            </div>

          </Col>
        </Row>
      </div>
    );
  }
}
