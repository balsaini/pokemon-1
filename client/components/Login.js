/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    axios.post('/api/login', { email, password })
    .then((req) => {
      localStorage.clear();
      localStorage.setItem('token', req.data.token);
      browserHistory.push('/pokemon');
    })
    .catch(() => {
      // notify user registration failed
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input ref="email" type="text" className="form-control" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input ref="password" type="password" className="form-control" id="url" />
              </div>

              <button onClick={this.login} type="submit" className="btn btn-default">Login</button>
            </form>
          </div>
          <div className="col-xs-9">
          </div>
        </div>
      </div>
    );
  }
}
