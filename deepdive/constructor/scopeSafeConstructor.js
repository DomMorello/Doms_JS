function Circle(radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
console.log(circle.getDiameter());

console.dir(Circle);
console.log(Object.getOwnPropertyDescriptors(Circle));