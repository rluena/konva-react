import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
// import Nav from "./components/Nav";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home }></Route>
        </div>
      </BrowserRouter>
    )
  }
}