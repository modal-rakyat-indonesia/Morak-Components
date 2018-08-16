import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import I18n from 'redux-i18n';
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import store, { history } from './store';
import App from './containers/app';
import translations from './translations';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="id">
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </I18n>
  </Provider>,
  target
);
