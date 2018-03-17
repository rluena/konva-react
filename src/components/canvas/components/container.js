import React, { Component } from 'react';
import _ from 'lodash';
import KonvaLib from '../../../helpers/Lib';
import Nav from '../../Nav';
import RightBar from '../../rightbar';

const componentsFromServer = [{
  type: 'trigger',
  category: 'list',
  position: { x: 0, y: 0 }
}, {
  type: 'condition',
  category: 'list',
  position: { x: 300, y: 100 }
}, {
  type: 'trigger',
  category: 'email',
  position: { x: 200, y: 0 }
}, {
  type: 'trigger',
  category: 'list',
  position: { x: 300, y: 0 }
}];

export default class CanvasContainer extends Component {
  createStage (container) {
    const canvasWidth = window.innerWidth - 305;
    const canvasHeight = window.innerHeight;
    const props = {
      container,
      width: canvasWidth,
      height: canvasHeight
    }

    const stage = KonvaLib.createStage(props);
    _renderComponents(componentsFromServer);
    KonvaLib.render();
  }

  render() {
    return (
      <div>
        <Nav/>
        <RightBar />
        <div style={{ overflowY: "hidden", height: "92vh"}} id="container" ref={ ref => this.createStage(ref)}></div>
      </div>
    )
  }
}

function _renderComponents(components) {
  _.each(components, (component, i) => {
    const props = {
      type: component.type,
      category: component.category,
      pos: component.position,
    }
      KonvaLib.addComponent(props);
    });
}