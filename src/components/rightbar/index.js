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


const components = [
  { id: "12", type: "condition", categ: "email", name: "Condition Email", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" }, 
  { id: "13", type: "trigger", categ: "email", name: "Trigger Email", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" },
  { id: "14", type: "condition", categ: "list", name: "Condition List", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" },
  { id: "15", type: "trigger", categ: "list", name: "Trigger List", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" },
  { id: "12", type: "condition", categ: "email", name: "First Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" }, 
  { id: "13", type: "trigger", categ: "email", name: "Second Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" },
  { id: "14", type: "condition", categ: "email", name: "Third Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" },
  { id: "15", type: "trigger", categ: "email", name: "fourth Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png" }
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
    // This calculations should be moved to the dragInit function
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
      console.log("Drop element!");

      const props = {
        type: selected.getAttribute('type'),
        category: selected.getAttribute('categ'),
        pos: {
          x: mouseX - posX,
          y: mouseY - posY
        },
      }
      _addComponent(props);

      selected.parentNode.removeChild(selected);
      selected = null;
    }
  }

  document.onmousemove = _moveElement;
  document.onmouseup = _dropElement;
  selected.ondragstart = function(){
    console.log("Drag started one!");
    return false;
  }
}

function _addComponent(props) {
  const { pos } = props;
  KonvaLib.addComponent(props.type, props.category, { x: pos.x, y: pos.y });
}
