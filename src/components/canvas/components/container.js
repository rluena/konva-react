import React, { Component } from 'react';
import _ from 'lodash';
import { Trigger, Condition } from './Lib';
import Nav from '../../Nav';

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
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const stage = new Konva.Stage({
      container: 'container',
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
    console.log("Adding component...");

    const obj = {
      type: type,
      props: {
        type: 'list',
        position: { x: 110, y: 0 }
      }
    }

    // allComponents.push(obj);
    // _renderComponents(allComponents);
  }

  render() {
    return (
      <div>
        <Nav addComponent = { type => this.addComponent(type) }/>
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