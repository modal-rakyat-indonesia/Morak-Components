import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Navigation from '../../components/topNavigation';
import Meta from '../../components/meta';
import Ribbon from '../../components/ribbon';
import requireAuth from '../../middleware/requireAuth';

const App = () => (
  <div>
    <Meta />
    <Ribbon />
    <header>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={requireAuth(About)} />
      </Switch>
    </main>
  </div>
);

export default App;
