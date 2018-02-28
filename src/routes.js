import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from "./components/Nav";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route path="/" exact component={ Home }></Route>
        </div>
      </BrowserRouter>
    )
  }
}