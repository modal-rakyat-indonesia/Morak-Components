import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

import '../styles/components/tooltip.scss';

class CustomTooltip extends React.Component {
  componentWillMount() {
    this.setState({
      open: false
    });
  }
  onToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const {
      placement, children, tooltip
    } = this.props;
    const { open } = this.state;
    return (
      <div id={`tooltip-${children.props.id}`} className="tooltip-custom">
        {children}
        <Tooltip
          placement={placement}
          isOpen={open}
          target={`tooltip-${children.props.id}`}
          toggle={this.onToggle}
        >
          {tooltip}
        </Tooltip>
      </div>
    );
  }
}

CustomTooltip.propTypes = {
  placement: PropTypes.string.isRequired,
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired
};

export default CustomTooltip;
