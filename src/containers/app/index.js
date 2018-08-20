import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from '@coreui/react';
import Home from '../home';
import HowToUse from '../howtouse';
import TextInput from '../textinput';
import Navigation from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';
import Ribbon from '../../components/ribbon';

const App = () => (
  <div className="app">
    <Meta />
    <Ribbon />
    <AppHeader fixed>
      <Navigation />
    </AppHeader>
    <div className="app-body">
      <Sidebar />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/how-to-use" component={HowToUse} />
          <Route exact path="/controls/input" component={TextInput} />
        </Switch>
      </main>
    </div>
  </div>
);

export default App;
