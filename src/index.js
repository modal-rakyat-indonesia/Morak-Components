import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import store, { history } from './store';
import App from './containers/app';

import './index.css';
import './styles/index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const target = document.querySelector('#root');

library.add(faStroopwafel, faChevronRight, faChevronDown);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
