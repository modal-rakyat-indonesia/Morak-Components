import React from 'react';
import PropTypes from 'prop-types';

import '../styles/controls/togglebutton.scss';

class CustomToggleButton extends React.Component {
  componentWillMount() {
    this.setState({
      active: this.props.active
    });
  }

  onToggle = (callback) => {
    const { active } = this.state;
    this.setState({
      active: !active
    });
    callback(!active);
  }

  render() {
    const {
      toggledTitle, defaultTitle, size, onToggle
    } = this.props;
    const { active } = this.state;
    let sizeCode = 'sm';
    switch (size) {
      case 'small':
        sizeCode = 'xs';
        break;
      case 'medium':
        sizeCode = 'sm';
        break;
      case 'large':
        sizeCode = 'lg';
        break;
      default:
        break;
    }
    return (
      <div className="custom-toggle-button">
        <button
          type="button"
          className={`btn btn-${sizeCode}${active ? ' active' : ''} btn-toggle`}
          data-toggle="button"
          aria-pressed="false"
          autoComplete="off"
          onClick={() => this.onToggle(onToggle)}
        >
          <div className="handle" />
        </button>
        <span className={size}>{active ? toggledTitle : defaultTitle}</span>
      </div>
    );
  }
}

CustomToggleButton.defaultProps = {
  size: 'medium',
  onToggle: () => {
  },
  active: false
};

CustomToggleButton.propTypes = {
  defaultTitle: PropTypes.string.isRequired,
  toggledTitle: PropTypes.string.isRequired,
  active: PropTypes.bool,
  size: PropTypes.string,
  onToggle: PropTypes.func
};

export default CustomToggleButton;
