import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

import '../styles/components/media.scss';

const CustomMedia = ({
  src, title, subtitle, description, mode
}) => (mode === 'vertical' ? (
  <div className="custom-media">
    <div className="custom-media-img">
      <img src={src} alt={title} />
    </div>
    <h3 className="title">{title}</h3>
    <p className="subtitle">{subtitle}</p>
    <p className="description">{description}</p>
  </div>
) : (
  <Media className="custom-media-h">
    <Media left>
      <Media object src={src} alt={title} />
    </Media>
    <Media body>
      <Media heading>
        {title}
      </Media>
      <p className="description">{description}</p>
    </Media>
  </Media>
));

CustomMedia.defaultProps = {
  subtitle: '',
  description: '',
  mode: 'vertical'
};

CustomMedia.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string.isRequired,
  mode: PropTypes.string
};

export default CustomMedia;
