import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { Header, HomeScreen } from './containers';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Switch>
        <Route path="/Home" component={HomeScreen} />
        <Redirect to="/Home" />
      </Switch>
    </main>
  </div>
);

export default App;
