import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from '@coreui/react';
import Home from '../home';
import HowToUse from '../howtouse';
import TextInput from '../textinput';
import TextFormatter from '../textformatter';
import Buttons from '../buttons';
import ButtonGroup from '../buttongroup';
import RadioButton from '../radiobutton';
import WizardStep from '../wizardstep';
import Navigation from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';
import Ribbon from '../../components/ribbon';
import Modal from '../modal';
import Heading from '../heading';
import Label from '../label';

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
          <Route exact path="/controls/radio-button" component={RadioButton} />
          <Route exact path="/controls/wizard" component={WizardStep} />
          <Route exact path="/components/modal" component={Modal} />
          <Route exact path="/components/button-group" component={ButtonGroup} />
          <Route exact path="/components/heading" component={Heading} />
          <Route exact path="/components/label" component={Label} />
          <Route exact path="/helpers/text-formatter" component={TextFormatter} />
        </Switch>
      </main>
    </div>
  </div>
);

export default App;
