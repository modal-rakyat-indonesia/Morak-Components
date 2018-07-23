import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import home from './home';
import about from './about';

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  home,
  about
});
