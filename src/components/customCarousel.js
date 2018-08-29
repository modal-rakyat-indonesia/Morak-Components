import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../styles/components/carousel.scss';

class CustomCarousel extends React.Component {
  async componentWillMount() {
    const { images, interval, id } = this.props;

    await this.setState({
      data: images
    });

    $(`#${id}`).carousel({
      interval
    });
  }

  render() {
    const { data } = this.state;
    const { id } = this.props;
    return (
      <div id={id} className="carousel slide">
        <div className="carousel-inner">
          {data.map((image, index) => (
            <div data-id={index} key={image.id} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <img className="d-block w-100" src={image.src} alt={image.altText} />
            </div>
            ))}
        </div>
        <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev" >
          <div className="carousel-nav">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className="sr-only">Previous</span>
          </div>
        </a>
        <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
          <div className="carousel-nav">
            <FontAwesomeIcon icon={faChevronRight} />
            <span className="sr-only">Next</span>
          </div>
        </a>
      </div>
    );
  }
}

CustomCarousel.defaultProps = {
  interval: 5000
};

CustomCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  interval: PropTypes.number
};

export default CustomCarousel;
