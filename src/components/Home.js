import React, { Component } from 'react';
import LeftBar from './leftbar';
import RighBar from './rightbar';
import Canvas from './canvas'

import '../style/main.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <LeftBar />
        <Canvas />
      </div>
    )
  }
}