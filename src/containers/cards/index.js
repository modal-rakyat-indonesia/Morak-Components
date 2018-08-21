import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomBasicCard from '../../components/customBasicCard';
import CustomNotificationCard from '../../components/customNotificationCard';

const Cards = () => (
  <div>
    <h2>
      Cards
    </h2>
    <p>This page contains Modal Rakyat standardized controls for cards
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="4">
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
      <Col xs="12" sm="12" md="12" lg="4">
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
    </Row>
  </div>
);

export default Cards;
