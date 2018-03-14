import React, { Component } from 'react';

import CanvasContainer from './components/container';
import RightBar from '../rightbar';

export default class Canvas extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
    }
  }

  changeHandler(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  render() {
    return (
      <div className="canvas-area">
        <CanvasContainer />
        <div className="canvas-renaming">
          <input type="text" className="form-control" 
                  placeholder="New app" 
                  onChange={ this.changeHandler.bind(this)}
                  value={ this.state.title }/>
        </div>
      </div>
    )
  }
}
