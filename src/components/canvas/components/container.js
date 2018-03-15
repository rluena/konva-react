import React, { Component } from 'react';
import _ from 'lodash';
import { Trigger, Condition } from './Lib';
import Nav from '../../Nav';
import RightBar from '../../rightbar';

import Konva from 'konva';

var cacheLayer;

export default class CanvasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [{
        type: 'trigger',
        props: {
          type: 'list',
          position: { x: 110, y: 0 }
        }
      }, {
        type: 'condition',
        props: {
          type: 'list',
          position: { x: 110, y: 0 }
        }
      }],
    }
  }

  createStage (container) {
    const canvasWidth = window.innerWidth - 260;
    const canvasHeight = window.innerHeight;

    const stage = new Konva.Stage({
      container: container,
      draggable: true,
      width: canvasWidth,
      height: canvasHeight
    });

    const  layer = new Konva.Layer();
    const tempLayer = new Konva.Layer();

    _renderComponents(allComponents, layer);
    stage.add(layer);
    stage.add(tempLayer);
  }

  addComponent (type){
    const obj = {
      type: type,
      props: {
        type: 'list',
        position: { x: 110, y: 0 }
      }
    }
  }

  render() {
    return (
      <div>
        <Nav addComponent = { type => this.addComponent(type) }/>
        <RightBar />
        <div style={{ overflowY: "hidden", height: "92vh"}} id="container" ref={ ref => this.createStage(ref)}></div>
      </div>
    )
  }
}


const allComponents = [{
  type: 'trigger',
  props: {
    type: 'list',
    position: { x: 110, y: 0 }
  }
}, {
  type: 'condition',
  props: {
    type: 'list',
    position: { x: 110, y: 0 }
  }
}];

function _renderComponents(components, layer) {
  _.each(components, (component, i) => {
      if(component.type === 'trigger') {
        layer.add(new Trigger('list', layer));
      }

      if(component.type === 'condition') {
        layer.add(new Condition('list', layer));
      }
    });
}

function _createTempStage(container) {
  const canvasWidth = 360;
  const canvasHeight = window.innerHeight;

  const stage = new Konva.Stage({
    container: container,
    width: canvasWidth,
    height: canvasHeight
  });

  const  layer = new Konva.Layer();

  layer.add(new Trigger('list', layer));

  const tempLayer = new Konva.Layer();
}