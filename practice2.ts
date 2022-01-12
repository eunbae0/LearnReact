//interface

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    // public 으로 선언된 값은 클래스 외부에서 조회 할 수 있다.
    this.radius = radius;
  }
  
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;
  // constructor(width: number, height: number) {
  //   this.width = width;
  //   this.height = height;
  // }
  constructor(private width: number, private height: number) {
    // private으로 선언된 값은 클래스 내부에서만 조회 할 수 있다.
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
const circle = new Circle(5)
const rectangle = new Rectangle(10, 5)
shapes.forEach(shape => {console.log(shape.getArea())})
console.log(circle)
console.log(rectangle)
console.log(rectangle.width)
// Property 'width' is private and only accessible within class 'Rectangle'

