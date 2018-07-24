import { success, error } from 'react-notification-system-redux';

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
  const notificationObj = constructObject(title, message, actionLabel, action);
  console.warn(notificationObj);
  dispatch(success(notificationObj));
};

export const showErrorNotification = (title, message, actionLabel, action) => (dispatch) => {
  const notificationObj = constructObject(title, message, actionLabel, action);
  dispatch(error(notificationObj));
};
