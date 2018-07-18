import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import home from './home';

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  home
});
