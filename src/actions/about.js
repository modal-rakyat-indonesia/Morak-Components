import { success, error } from 'react-notification-system-redux';
import { Map } from 'immutable';

const constructObject = (title, message, actionLabel, action) => ({
  title,
  message,
  autoDismiss: 0,
  action: {
    label: actionLabel,
    callback: action
  }
});

export const showSuccessNotification = (title, message, actionLabel, action) => (dispatch) => {
  let notificationObj = constructObject(title, message, actionLabel, action);
  if (actionLabel === undefined || actionLabel === '') {
    notificationObj = Map(notificationObj).delete('action').toJS();
  }
  dispatch(success(notificationObj));
};

export const showErrorNotification = (title, message, actionLabel, action) => (dispatch) => {
  const notificationObj = constructObject(title, message, actionLabel, action);
  dispatch(error(notificationObj));
};
