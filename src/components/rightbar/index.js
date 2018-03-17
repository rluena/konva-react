import React, { Component } from 'react';
import KonvaLib from '../../helpers/Lib';
import componentsIcons from './components-icons';

export default class RightBar extends Component {
  renderIcons(icons) {
    return icons.map((icon) => {
      return <a key={ icon.id }href="javascript:void(0)" className="draggable-item">
          <article>
            <figure>
              <img type = { icon.type }
                    ref="draggable-img"
                    categ = { icon.categ } 
                    onMouseDown = { (ref) => _draggimage(ref) }
                    className="component-icon" 
                    src={ icon.src } />

              <figcaption>{ icon.name }</figcaption>
            </figure>
          </article>
        </a>
    });
  }
  
  render() {
    return (
      <div className="sidebar rightbar">
        <div className="sidebar-components">
          {
            componentsIcons.map((component, i) => {
              
              return (
                <div key = { i }>
                  <h4 className="component-section-heading"> { component.title }</h4>
                  <div>
                    { this.renderIcons(component.icons) }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    ) 
  }
}

function _draggimage(el) {
  console.log("Starting dragging...");
  let selected = null;
  let right = 0;
  let top = 0;
  let mouseX = 0;
  let posX = 0;
  let posY = 0;
  let mouseY = 0;
  let pointerPosition = {};

  selected = el.target.cloneNode(true);
  const parent = el.target.parentNode;

  selected.style.position = "absolute";
  selected.style.width = 42 + 'px';
  selected.style.height = 42 + 'px';
  selected.style.left = -50 + 'px';
  selected.style.top = -50 + 'px';
  selected.style.zIndex = 1000;

  _startDrag();
  
  function _startDrag(el) {
    if(selected !== null) {
      document.body.appendChild(selected);
      document.ondragstart = function (e) {  return false };
    }
  }
                        
  function _dragElement(e) {
    mouseX = document.all ? window.event.clientX : e.pageX;
    mouseY = document.all ? window.event.clientY : e.pageY;
    
    if(selected !== null) {
      KonvaLib.setPointerPosition();
      selected.style.left = (mouseX - 18) + "px";
      selected.style.top = (mouseY -18) + "px";
    }
  }

  function _dropElement(e) {
    if(selected !== null) {
      const stagePos = KonvaLib.getStagePosition();
      selected.parentNode.removeChild(selected);
      posX = (mouseX - stagePos.x - 42 );
      posY = (mouseY - stagePos.y - 42 );
      
      const props = {
        type: selected.getAttribute('type'),
        category: selected.getAttribute('categ'),
        pos: {
          x: posX,
          y: posY
        },
      }

      selected = null;
      KonvaLib.addComponent(props);
    }
  }

  document.onmousemove = _dragElement;
  document.onmouseup = _dropElement;
}