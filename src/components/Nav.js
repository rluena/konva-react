import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>
      </div>
    )
  }
}
