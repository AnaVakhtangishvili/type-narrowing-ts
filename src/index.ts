import { getArea, Rectangle, Triangle, Circle, Shapes } from "./area";

const rectangle: Rectangle = {
  type: Shapes.Rectangle,
  width: 20,
  height: 30
}

const triangle: Triangle = {
  type: Shapes.Triangle,
  base: 20,
  height: 30
}

const circle: Circle = {
  type: Shapes.Circle,
  radius: 10
}

console.log(getArea(rectangle));
console.log(getArea(triangle));
console.log(getArea(circle));