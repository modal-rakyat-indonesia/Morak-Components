import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS
} from '../actions/middleware';

const initialState = {
  credentials: {},
  message: '',
  user: {},
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        credentials: action.credentials
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        authenticated: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.message,
        authenticated: false
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {}
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false
      };

    default:
      return state;
  }
};
