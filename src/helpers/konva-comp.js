/**
 * 
 * @param { String } category In what category trigger is falling onto
 * @param { Object } pos Contains X and Y coordinates for position the component
 * @param { String } layer Name of the layer where component to be rendered.
 * @param { String } tempLayer Name of the temperory layer
 */
export const Trigger = function(category, pos, layer, tempLayer) {
  const that = this;
  this.radius = 70;
  this.x = pos.x || 0;
  this.y = pos.y || 0;
  this.fill = 'red';

  if(category === 'list') {
    this.fill = 'red';
  }
  
  if(category === 'email') {
    this.fill = 'green';
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

  const group = new Konva.Group({ x: that.x, y: that.x, draggable: true });

  group.add(connectLine);
  group.add(pointerCircle);
  group.add(containerCircle);
  group.add(btnConnect);
  group.add(btnDelete);

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
  
  if(!category) {
    throw('Category should be specified as paremeter.');
  }
  
  if(!pos) {
    throw('Position should be specified as paremeter.');
  }

  if(!layer) {
    throw('Layer argument is missing.')
  }

  const that = this;
  this.radius = 70;
  this.x = pos.x || 0;
  this.y = pos.y || 0;
  this.fill = '';

  if (category === 'list') {
    this.fill = 'red';
  }
  
  if (category === 'email') {
    this.fill = 'green';
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
  
  return group;
}