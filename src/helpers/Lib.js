// Created by Rabii Luena luenarabii@gmail.com

import Konva from 'konva';
import { Trigger, Condition } from './../helpers/konva-comp';



export default (function(){
  let stage;
  let tempLayer;
  let layer;
  let pointerPosition;

  /**
   * Initializing the stage and attaching to the view
   * 
   * @param { Object } props Container, width and height
   * @return { Object } stage
   */
  function createStage(props) {
    const { container, width, height } = props;
    
    stage = new Konva.Stage({
      container,
      width,
      height,
      draggable: true
    });

    layer = new Konva.Layer();
    tempLayer = new Konva.Layer();

    return stage;
  }

  /**
   * Adds component to the stage 
   * 
   * @param { String } type Type of componet that should be added to the scene. Trigger, Condition or ....
   * @param { String } category Category of the component, email, ....
   * @param { Object } pos X and Y position for the component to be dropped
   * 
   * @return void;
   */
  function addComponent(props) {
    if(props.type === 'trigger') {
      layer.add(new Trigger(props.category, props.pos, layer, tempLayer));
    }
    
    if(props.type === 'condition') {
      layer.add(new Condition(props.category, props.pos, layer, tempLayer));
    }

    layer.draw();
  }

  /**
   * Render layer to a stage
   * 
   * @return void;
   */
  function render() {
    stage.add(layer);
  }

  function setPointerPosition() {
    pointerPosition = stage.getPointerPosition() || { x: 0, y: 0 };
  }

  function getPointerPosition() {
    return pointerPosition;
  }
  
  function getStagePosition() {
    return { x: stage.x(), y: stage.y()}
  }

  
  return {
    createStage,
    setPointerPosition,
    getPointerPosition,
    getStagePosition,
    addComponent,
    render
  }
})()
