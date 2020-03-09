/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config';
import configureStore from './store/configureStore';

import Home from './containers/Home';
import Login from './containers/Login';

const store = configureStore();

const Root = () => (
  <Provider store={store} key={Math.random()}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
