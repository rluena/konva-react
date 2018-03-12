/**
*
* Trigger component
*
**/
export const Trigger = function(type, layer) {
  var that = this;
  this.radius = 70;
  this.x = 100;
  this.y = 50;
  this.fill = "red";
  
  if(type === 'list') {
    this.fill = "red";
    this.x = 150;
  }
  
  if(type === 'email') {
    this.fill = "green";
  }
  
  var containerCircle = new Konva.Circle({
    radius: that.radius,
    fill: that.fill,
    shadowColor: 'black',
    shadowBlur: 7,
    shadowOffset: {x : 3, y : 2},
    shadowOpacity: 0.2
  });
  
  var btnDelete = new Konva.Circle({
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
  
  var btnConnect = new Konva.Circle({
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
  var pointerCircle = new Konva.Circle({
    x: 110,
    y: 0,
    radius: 15,
    draggable: true
  });
  
  var connectLine = new Konva.Arrow({
    points: [containerCircle.getX(), containerCircle.getY(), pointerCircle.getX(), pointerCircle.getY()],
    stroke: 'grey',
    strokeWidth: 3,
    visible: true,
    visible: false,
  });
  
  var group = new Konva.Group({ x: that.x, y: that.x, draggable: true });
  
  group.add(connectLine);
  group.add(pointerCircle);
  group.add(containerCircle);
  group.add(btnConnect);
  group.add(btnDelete);
  
  // Objects Methods;
  function hoveringComponent() {
    this.moveToTop();
    btnDelete.visible(true);
    btnConnect.visible(true);
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
  function dragginPointer(e){
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
  btnDelete.on('click', deleteComponent);
  btnConnect.on('mouseover', setConnectDraggable);
  btnConnect.on('mouseleave', resetGroupContainer);
  pointerCircle.on("dragmove", dragginPointer);
  pointerCircle.on("dragend", pointerDroped)
  
  return group;
}

/**
*
* Condition component
*
**/
export const Condition = function(type, layer) {
  var that = this;
  this.radius = 70;
  this.x = 0;
  this.y = 0;
  this.fill = "yellow";
  
  if(type === 'list') {
    that.radius = 70;
    that.x = 200;
    that.y = 200,
    that.fill = "yellow"
  }
  
  var group = new Konva.Group({ x: that.x, y: that.y, draggable: true });
   
  var conditionComponent = new Konva.RegularPolygon({
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
  var btnDelete = new Konva.Circle({
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
  var btnConnect = new Konva.Circle({
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
  
  var conEndX = 110;
  var conEndY = 0;
  
  var connectLine = new Konva.Arrow({
    points: [0, 0, conEndX, conEndY],
    stroke: 'grey',
    strokeWidth: 3,
    visible: false
  });
  
  group.add(connectLine);
  group.add(conditionComponent);
  group.add(btnConnect);
  group.add(btnDelete);
  
  // Deleting component/group
  btnDelete.on('click', function() {
    group.destroy();
    layer.draw();
  });
  
  group.on("mouseenter", function() {
    // Move component to the top
    this.moveToTop();
    btnDelete.visible(true);
    btnConnect.visible(true);
    layer.draw();
  }).on("mouseleave", function() {
    btnDelete.visible(false);
    btnConnect.visible(false);
    layer.draw();
  });
  
  // Deleting component/group
  btnDelete.on('click', function() {
    group.destroy();
    layer.draw();
  });
    
  btnConnect.on("mousedown", function() {
    group.draggable(false);
    connectLine.visible(true);
    layer.draw();
  }).on("mouseup", function(){
    group.draggable(true);
    connectLine.visible(false);
    layer.draw();
  });
  
  
  return group;
}
