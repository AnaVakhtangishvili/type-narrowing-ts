enum Shapes {
  Rectangle,
  Triangle,
  Circle
}

interface Rectangle {
  type: Shapes.Rectangle;
  width: number;
  height: number;
}

interface Triangle {
  type: Shapes.Triangle;
  base: number;
  height: number;
}

interface Circle {
  type: Shapes.Circle;
  radius: number;
}

function getRectangleArea ({width, height}: Rectangle): number {
  return width * height;
}
function getTriangleArea ({base, height}: Triangle):number {
  return base * height / 2;
}
function getCircleArea ({radius}:Circle): number {
  return Math.floor(Math.PI * radius**2);
}

let shapeTypes: Rectangle | Triangle | Circle;

function getArea(shapeTypes: Rectangle | Triangle | Circle) {
  switch (shapeTypes.type) {
    case Shapes.Rectangle:
      return getRectangleArea(shapeTypes);
    case Shapes.Triangle:
      return getTriangleArea(shapeTypes);
    case Shapes.Circle:
      return getCircleArea(shapeTypes);
  }
}


export { getArea, Rectangle, Triangle, Circle, Shapes };