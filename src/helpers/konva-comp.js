/**
 * 
 * @param { String } category In what category trigger is falling onto
 * @param { Object } pos Contains X and Y coordinates for position the component
 * @param { String } layer Name of the layer where component to be rendered.
 * @param { String } tempLayer Name of the temperory layer
 */
export const Trigger = function(category, pos, layer, tempLayer) {
  const that = this;
  that.radius = 70;
  that.x = pos.x || 0;
  that.y = pos.y || 0;
  that.fill = 'red';

  if(category === 'email') {
    that.fill = 'green';
  }

  const containerCircle = new Konva.Circle({
    radius: that.radius,
    fill: that.fill,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2
  });

  const btnDelete = new Konva.Circle({
    x: -14,
    y: -67,
    radius: 15,
    fill: "green",
    stroke: 'white',
    strokeWidth: 2,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2,
    visible: false
  });

  const btnConnect = new Konva.Circle({
    x: that.radius,
    y: 0,
    radius: 20,
    fill: "grey",
    stroke: 'white',
    strokeWidth: 2,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2,
    visible: false,
  });

  // Pointer at the end of the arrow
  const pointerCircle = new Konva.Circle({
    x: 110,
    y: 0,
    radius: 15,
    draggable: true
  });
  
  const connectLine = new Konva.Arrow({
    points: [containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()],
    stroke: 'grey',
    strokeWidth: 3,
    visible: false,
  });

  const group = new Konva.Group({ x: that.x, y: that.y, draggable: true });

  group.add(connectLine);
  group.add(pointerCircle);
  group.add(containerCircle);
  group.add(btnConnect);
  group.add(btnDelete);

  // Handlers
  function hoveringComponent() {
    this.moveToTop();
    btnDelete.visible(true);
    btnConnect.visible(true);
    layer.draw();
  }

  function stopGroupHover() {
    btnDelete.visible(false);
    btnConnect.visible(false);
    layer.draw();
  }
  
  function deleteComponent() {
    group.destroy();
    layer.draw();
  }
  
  function setConnectDraggable() {
    pointerCircle.moveToTop();
    group.draggable(false);
    pointerCircle.position({x: btnConnect.getX(), y: btnConnect.getY()});
    layer.draw();
  }
  
  function resetGroupContainer() {
    group.draggable(true);
    connectLine.visible(false);
    layer.draw();
  }
  
  // Dragging pointer around
  function draggingPointer(e){
    var p=[containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()];
    connectLine.visible(true);
    connectLine.setPoints(p);
    layer.draw();
  }
  
  // Dropping pointer
  function pointerDroped(e) {
    console.log("Dropped");
    pointerCircle.position({x: 110, y:0});
    var p=[containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()];
    connectLine.setPoints(p).visible(false);
    layer.draw();
  }

  // Actions
  group.on('mouseenter', hoveringComponent);
  group.on('mouseleave', stopGroupHover);
  btnDelete.on('click', deleteComponent);
  btnConnect.on('mouseover', setConnectDraggable);
  btnConnect.on('mouseleave', resetGroupContainer);
  pointerCircle.on("dragmove", draggingPointer);
  pointerCircle.on("dragend", pointerDroped);

  return group;
}

/**
 * 
 * @param { String } category In what category condition is falling onto
 * @param { Object } pos Contains X and Y coordinates for position the component
 * @param { String } layer Name of the layer where component to be rendered.
 * @param { String } tempLayer Name of the temperory layer
 */
export const Condition = function(category, pos, layer, tempLayer) {
  const that = this;
  that.radius = 70;
  that.x = pos.x || 0;
  that.y = pos.y || 0;
  that.fill = 'red';

  if (category === 'list') {
    that.fill = 'red';
  }
  
  if (category === 'email') {
    that.fill = 'green';
  }

  const conditionComponent = new Konva.RegularPolygon({
    sides: 8,
    radius: 70,
    fill: that.fill,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2
  });
  
  conditionComponent.rotate(70);

  // Deleting component the button.
  const btnDelete = new Konva.Circle({
    x: -40,
    y: -55,
    radius: 15,
    fill: "green",
    stroke: 'white',
    strokeWidth: 2,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2,
    visible: false
  });

  // Connection button for the component.
  const btnConnect = new Konva.Circle({
    x: that.radius,
    y: 0,
    radius: 20,
    fill: "grey",
    stroke: 'white',
    strokeWidth: 2,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2,
    visible: false,
  });

   // Pointer at the end of the arrow
   const pointerCircle = new Konva.Circle({
    x: 110,
    y: 0,
    radius: 15,
    draggable: true
  });

  const connectLine = new Konva.Arrow({
    points: [conditionComponent.getX(), conditionComponent.getY(), pointerCircle.getX(), pointerCircle.getY()],
    stroke: 'grey',
    strokeWidth: 3,
    visible: false
  });

  const group = new Konva.Group({ x: that.x, y: that.y, draggable: true });
  
  group.add(connectLine);
  group.add(pointerCircle);
  group.add(conditionComponent);
  group.add(btnConnect);
  group.add(btnDelete);

  // Handlers 
  function hoveringComponent() {
    this.moveToTop();
    btnDelete.visible(true);
    btnConnect.visible(true);
    layer.draw();
  }

  function stopGroupHover() {
    btnDelete.visible(false);
    btnConnect.visible(false);
    layer.draw();
  }
  
  function deleteComponent() {
    group.destroy();
    layer.draw();
  }
  
  function setConnectDraggable() {
    pointerCircle.moveToTop();
    group.draggable(false);
    pointerCircle.position({x: btnConnect.getX(), y: btnConnect.getY()});
    layer.draw();
  }
  
  function resetGroupContainer() {
    group.draggable(true);
    connectLine.visible(false);
    btnDelete.visible(false);
    btnConnect.visible(false);
    layer.draw();
  }
  
  function draggingPointer(e){
    var p=[containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()];
    connectLine.visible(true);
    connectLine.setPoints(p);
    layer.draw();
  }
  
  function pointerDroped(e) {
    console.log("Dropped...");
    pointerCircle.position({x: 110, y:0});
    var p=[containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()];
    connectLine.setPoints(p).visible(false);
    layer.draw();
  }

  // Events
  group.on('mouseenter', hoveringComponent);
  group.on('mouseleave', stopGroupHover);
  btnDelete.on('click', deleteComponent);
  btnConnect.on('mouseover', setConnectDraggable);
  btnConnect.on('mouseleave', resetGroupContainer);
  pointerCircle.on("dragmove", draggingPointer);
  pointerCircle.on("dragend", pointerDroped);
  
  return group;
}

export const Action = function(category, pos, layer, tempLayer) {

}