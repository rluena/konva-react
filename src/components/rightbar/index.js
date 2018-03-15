import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default class RightBar extends Component {
  createScene(container) {
    const tempStage = new Konva.Stage({
      container,
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const stage = new Konva.Stage({
      container,
      height: window.innerHeight,
      width: 220,
      draggable: false
    });

    const  layer = new Konva.Layer();
    const tempLayer = new Konva.Layer();

    _renderComponents(components, layer, tempLayer);

    stage.add(layer);
    stage.add(tempLayer);
  }

  render() {
    return (
      <div className="sidebar rightbar">
        <div className="sidebar-components">
          {
            components.map((component, i) => {
              return <a key={ i }href="javascript:void(0)" className="draggable-item">
                      <article>
                        <figure>
                          <img ref="draggable-img" onMouseDown = { (ref) => _draggimage(ref) } className="component-icon" src={ component.src } />
                          <figcaption>{ component.name }</figcaption>
                        </figure>
                      </article>
                    </a>
            })
          }
        </div>
      </div>
    ) 
  }
}


const components = [
  { id: "12", type: "condition", name: "First Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png", pos: {x: 15, y:20 }}, 
  { id: "13", type: "trigger", name: "Second Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png", pos: {x: 15, y:20 }},
  { id: "14", type: "condition", name: "Third Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png", pos: {x: 15, y:20 }},
  { id: "15", type: "trigger", name: "fourth Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png", pos: {x: 15, y:20 }}
]

function _renderComponents(components, layer, tempLayer) {
  _.each(components, (component, i) => {
    const { pos } = component;

    if(component.type === 'trigger'){
      const rect = new Konva.Rect({
        width: 60,
        height: 60,
        x: pos.x,
        y: pos.y,
        fill: 'red',
        draggable: true
      });

      layer.add(rect);

      rect.on('mouseenter', function() {
        this.moveToTop();
        layer.draw();
      })
    }

    if(component.type === "condition") {
      const circle = new Konva.Circle({
        radius: 35,
        x: pos.x,
        y: pos.y,
        fill: 'green',
        draggable: true,
      });

      layer.add(circle);

      circle.on("mouseenter", function() {
        this.moveToTop();
        layer.draw();
      });

      // circle.on("dragstart", function() {
      //   this.moveTo(tempLayer);
      //   layer.draw();
      // });
    }

  });
}



// Dragging image around
function _draggimage(el) {
  let selected = null;
  let mouseX = 0;
  let mouseY = 0;
  let posX = 36;
  let posY = 0;

  _dragInit(el.target);

  function _dragInit(element) {
    // selected = element.cloneNode(true);
    selected = element;
    selected.zIndex = 1000;
    selected.style.width = 45 + 'px';
    selected.style.height = 45 + 'px';
    selected.style.position = "absolute";
  }

  function _moveElement(e) {
    mouseX = document.all ? window.event.clientX : e.pageX;
    mouseY = document.all ? window.event.clientY : e.pageY;

    if(selected !== null) {
      selected.style.left = (mouseX - posX) + 'px';
      selected.style.top = (mouseY - posY) + 'px';
      document.body.appendChild(selected);
    }
  }

  // TODO: Adding component when dropping offset is 637 else animate to the original position
  function _dropElement() {
    if(selected !== null){
      selected.parentNode.removeChild(selected);
    }
    selected = null;
  }

  document.onmousemove = _moveElement;
  document.onmouseup = _dropElement;
  el.target.ondragstart = function() {
    console.log("Drag started two!")
    return false;
  }

  selected.ondragstart = function(){
    console.log("Drag started one!")
    return false;
  }
}

function _addComponent() {
  console.log("Component will be added!");
}
