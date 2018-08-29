import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomCarousel from '../../components/customCarousel';

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

const Carousel = () => (
  <div>
    <h2>
      Carousel
    </h2>
    <p>This page contains Modal Rakyat standardized controls for image carousel.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <CustomCarousel id="custom-carousel-1" images={images} interval={3000} />
      </Col>
    </Row>
  </div>
);

export default Carousel;
