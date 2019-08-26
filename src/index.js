import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from '@material-ui/styles';
import reducers from './store/reducers';
import * as serviceWorker from './serviceWorker';

import theme from './theme';

import App from './App';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={App} />
      </Router>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
);

serviceWorker.unregister();
