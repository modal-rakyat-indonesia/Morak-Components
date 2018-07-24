import React from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notification-system-redux';
import { connect } from 'react-redux';

const Notification = ({ notifications }) => (
  <Notifications notifications={notifications} />
);

Notification.defaultProps = {
  notifications: []
};

Notification.propTypes = {
  notifications: PropTypes.array
};


export default connect(state => ({ notifications: state.notifications }))(Notification);
