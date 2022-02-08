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

console.log(`area of rectange is ${getArea(rectangle)}`);
console.log(`area of triangle is ${getArea(triangle)}`);
console.log(`area of circle is ${getArea(circle)}`);