import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ Home }></Route>
        </div>
      </Router>
    )
  }
}