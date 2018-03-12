import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

export default class RightBar extends Component {

  createScene(container) {
    const stage = new Konva.Stage({
      container: container,
      width: 240,
      height: 500,
    });
    
    const layer = new Konva.Layer();
    const rect = new Konva.Rect({
      x: 0,
      y: 0,
      width : 50,
      height : 50,
      fill: 'red',
      stroke: 'black',
      shadowBlur : 40,
      draggable : true
    });

    const circle = new Konva.Circle({
      x: stage.getWidth() / 2,
      y: stage.getHeight() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    })

    layer.add(circle);
    layer.add(rect);
    stage.add(layer);

    circle.on('dragstart', () => {
      circle.stopDrag();

      const clone = circle.clone({
        x : 1,
        y : 1
      });

      clone.off('dragstart');

      layer.add(clone);
      clone.startDrag();
    });

    rect.on('dragstart', () => {
      rect.stopDrag();

      const clone = rect.clone({
        x : 1,
        y : 1
      });

      clone.off('dragstart');

      layer.add(clone);
      clone.startDrag();
    });

  }

  render() {
    return (
      <div className="sidebar rightbar">
        <div className="sidebar-components">
         {/* <div id="canvas-container" ref={ ref => this.createScene(ref)}></div>*/}
          {
            components.map((component, i) => {
              return <a key={ i }href="javascript:void(0)" className="draggable-item">
                      <article>
                        <figure>
                          <img className="component-icon" src={ component.src } />
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
  { name: "First Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png"}, 
  { name: "Second Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png"},
  { name: "Third Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png"},
  { name: "fourth Icon", icon: "fa fa-envelope fa-3x", src: "http://coinpot.co/img/coin/bitcoincash/icon.png"}
]