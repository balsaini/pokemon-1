/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { pokemon: [] };
  }

  componentWillMount() {
    const authorization = `JWT ${localStorage.getItem('token')}`;
    axios.get('/api/pokemon', { headers: { authorization } })
    .then((rsp) => {
      this.setState({ pokemon: rsp.data.pokemon });
    });
  }

  create(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const url = this.refs.url.value;
    const authorization = `JWT ${localStorage.getItem('token')}`;
    axios.post('/api/pokemon', { name, url }, { headers: { authorization } })
    .then((rsp) => {
      this.setState({ pokemon: [...this.state.pokemon, rsp.data.pokemon] });
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input ref="name" type="text" className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label htmlFor="url">Image Url</label>
                <input ref="url" type="text" className="form-control" id="url" />
              </div>

              <button onClick={this.create} type="submit" className="btn btn-default">Create</button>
            </form>
          </div>
          <div className="col-xs-9">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Pokemon</th>
                  <th>Image</th>
                </tr>
              </thead>

                {this.state.pokemon.map(p => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td><img className="thumbnail pokemon" alt="pokemon" src={p.url} /></td>
                  </tr>
                ))}

              <tbody>
              </tbody>
            </table>
          </div>
          <div className="col-xs-9"></div>
        </div>

      </div>
    );
  }
}
