import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import '../../styles/components/carousel.scss';

const items = [
  {
    src: 'https://storage.modalrakyat.id/blogs/blog_20180731094641_mr-1-cashback-01-002.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://storage.modalrakyat.id/blogs/blog_20180731094641_mr-1-cashback-01-002.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://storage.modalrakyat.id/blogs/blog_20180731094641_mr-1-cashback-01-002.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.caption}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CustomCarousel;
