import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import counter from './counter';

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  counter
});
