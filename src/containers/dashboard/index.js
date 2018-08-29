import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CustomCarousel from '../../components/customCarousel';
import CustomBasicCard2 from '../../components/CustomBasicCard2';
import { listBasicCard, listCardWithTimeData, listCardFooter, contentCard }
  from '../../components/customListData';
import CustomListCardWithTime from '../../components/customListCardWithTime';
import CustomListCard from '../../components/customListCard';
import CustomButton from '../../components/customButton';
import '../../styles/components/dashboard.scss';

const images = [
  {
    id: 1,
    src: 'https://storage.modalrakyat.id/blogs/blog_20180731094641_mr-1-cashback-01-002.png',
    altText: 'Slide 1'
  },
  {
    id: 2,
    src: 'https://storage.modalrakyat.id/documents/6e2ef6a0-9ede-11e8-80e4-23cce26dae3f.jpg',
    altText: 'Slide 2'
  },
  {
    id: 3,
    src: 'https://storage.modalrakyat.id/documents/3b1bb500-9ede-11e8-a12c-f9dba129ac38.jpg',
    altText: 'Slide 3'
  }
];

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
          <Col xs="12" sm="12" md="12" lg="4">
            <div className="dashboard-container">
              <CustomCarousel id="carousel" images={images} interval={3000} />
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
