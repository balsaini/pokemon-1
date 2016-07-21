import App from './components/App';
import Pokemon from './components/Pokemon';
import Register from './components/Register';
import Login from './components/Login';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="pokemon" component={Pokemon} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
  , document.getElementById('root'));
