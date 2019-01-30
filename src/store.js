import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions/middleware';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  loadingBarMiddleware()
];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  /* eslint-enable */

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

const user = Cookies.get('user');

if (user) {
  store.dispatch({
    type: LOGIN_SUCCESS,
    user
  });
  store.dispatch(push('about-us'));
} else {
  store.dispatch({
    type: LOGIN_FAILURE,
    message: 'Session expired'
  });
}

export default store;
