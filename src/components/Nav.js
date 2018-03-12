import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-light">
        <div className="left-button-group">
          <div className="navbar-button-group">
            <button type="button" className="btn btn-sm btn-secondary">Guide Book</button>
            <button type="button" className="btn btn-sm btn-secondary"><i className="fa fa-save"></i>&nbsp;&nbsp;Save as Guide</button>
          </div>
        </div>
        <div className="right-button-group">
          <div className="navbar-button-group">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-sm btn-primary">Canvas</button>
              <button type="button" className="btn btn-sm btn-secondary" onClick={ () => this.props.addComponent("Some Trigger") }>Live View</button>
              <button type="button" className="btn btn-sm btn-secondary">Insights</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
