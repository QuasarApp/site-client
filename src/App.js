import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { Header, HomeScreen, ProjectScreen } from './containers';

const App = () => (
  <div className="App">
    <Header />
    <main className="wrap">
      <Switch>
        <Route exact path="/Home" component={HomeScreen} />
        <Route path="/:projectName" component={ProjectScreen} />
        <Redirect to="/Home" />
      </Switch>
    </main>
  </div>
);

export default App;
