import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as notifications } from 'react-notification-system-redux';
import home from './home';
import about from './about';
import auth from '../middleware/auth';

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  auth,
  notifications,
  home,
  about
});
