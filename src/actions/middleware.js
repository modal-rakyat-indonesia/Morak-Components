import { push } from 'react-router-redux';
import Cookies from 'js-cookie';
import { setLanguage } from 'redux-i18n';

export const LOGIN_REQUEST = 'middleware/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'middleware/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'middleware/LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'middleware/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'middleware/LOGOUT_SUCCESS';

export const requestLogin = credentials => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
    credentials
  });
};

export const loginSuccess = user => (dispatch) => {
  Cookies.set('user', user);
  dispatch({
    type: LOGIN_SUCCESS,
    user
  });
  dispatch(push('about-us'));
};

export const loginError = message => (dispatch) => {
  dispatch({
    type: LOGIN_FAILURE,
    message
  });
};

export const logoutRequest = () => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST
  });
};

export const logoutSuccess = () => (dispatch) => {
  Cookies.remove('user');
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

export const changeLanguage = lang => (dispatch) => {
  dispatch(setLanguage(lang));
};
