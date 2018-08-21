import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomBasicCard from '../../components/customBasicCard';

const Cards = () => (
  <div>
    <h2>
      Cards
    </h2>
    <p>This page contains Modal Rakyat standardized controls for cards
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <CustomBasicCard
          header="Heading"
          content="A brown fox jumps over the lazy dog. Teddy Bear goes to Hollywood."
          footer="A brown fox jumps over the lazy dog."
          action={() => {
            console.warn('clicked!');
        }}
        />
      </Col>
    </Row>
  </div>
);

export default Cards;
