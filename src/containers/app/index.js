import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from '@coreui/react';
import Home from '../home';
import HowToUse from '../howtouse';
import TextInput from '../textinput';
import Buttons from '../buttons';
import ButtonGroup from '../buttongroup';
import WizardStep from '../wizardstep';
import modal from '../../components/modal';
import Navigation from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';
import Ribbon from '../../components/ribbon';
// import Modal from '../../components/modal';

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
          <Route exact path="/controls/buttons" component={Buttons} />
          <Route exact path="/controls/wizard" component={WizardStep} />
          <Route exact path="/components/modal" component={modal} />
          <Route exact path="/components/button-group" component={ButtonGroup} />
        </Switch>
      </main>
    </div>
  </div>
);

export default App;
