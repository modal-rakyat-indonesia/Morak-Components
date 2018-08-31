import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomBasicCard from '../../components/customBasicCard';
import CustomNotificationCard from '../../components/customNotificationCard';
import { listBasicCard, listCardWithTimeData, listCardFooter } from '../../components/customListData';
import CustomListCardWithTime from '../../components/customListCardWithTime';
import CustomListCard from '../../components/customListCard';
import CustomProfileCard from '../../components/customProfileCard';

const Cards = () => (
  <div>
    <h2>
      Cards
    </h2>
    <p>This page contains Modal Rakyat standardized controls for cards
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Basic Card</strong><br />
          <small>Contains basic content, such as heading, content, and footer.</small>
        </p>
        <CustomBasicCard
          header="Heading"
          content="A brown fox jumps over the lazy dog. Teddy Bear goes to Hollywood."
          footer="A brown fox jumps over the lazy dog."
          action={() => {
            console.warn('clicked!');
        }}
        />
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Notification Card</strong><br />
          <small>Contains notification title and content with timestamp.</small>
        </p>
        <CustomNotificationCard
          header="Berhasil Verifikasi!"
          timestamp="2018-03-19 19:20:00"
          content="Selamat! Akun Anda berhasil diverifikasi dan Anda sudah dapat melakukan top up dan memulai pendanaan. Klik di sini untuk melakukan top up dana."
          action={() => {
            console.warn('clicked!');
        }}
        />
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Basic List Card</strong><br />
          <small>Contains card with header and list of contents.</small>
        </p>
        <CustomListCardWithTime
          header="Heading"
          contents={listCardWithTimeData}
        />
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>List Card with Time</strong><br />
          <small>Contains card with header and list of contents, sorted chronologically.</small>
        </p>
        <CustomListCard
          header="Heading"
          contents={listBasicCard}
          footer={listCardFooter}
        />
      </Col>
      <Col xs="12" sm="12" md="12" lg="6">
        <p><strong>Profile Card with Edit Button</strong><br />
          <small>Contains card with header and list of contents, including Edit button on the header.</small>
        </p>
        <CustomProfileCard
          header="Heading"
          content={(
            <div>
              <p className="card-content">
                <span className="text-caption">Tanggal Lahir</span>
                <span className="text-content">31/08/1993</span>
              </p>
              <p className="card-content">
                <span className="text-caption">Tempat Lahir</span>
                <span className="text-content">Jakarta</span>
              </p>
              <p className="card-content">
                <span className="text-caption">Jenis Kelamin</span>
                <span className="text-content">Pria</span>
              </p>
              <p className="card-content">
                <span className="text-caption">Agama</span>
                <span className="text-content">Islam</span>
              </p>
              <p className="card-content">
                <span className="text-caption">Pendidikan Terakhir</span>
                <span className="text-content">SMA</span>
              </p>
              <p className="card-content">
                <span className="text-caption">Pekerjaan</span>
                <span className="text-content">Karyawan</span>
              </p>
            </div>
          )}
          action={() => {
            console.warn('clicked!');
        }}
        />
      </Col>
    </Row>
  </div>
);

export default Cards;
