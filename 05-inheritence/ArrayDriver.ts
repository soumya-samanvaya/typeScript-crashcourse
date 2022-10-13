import {Shape} from './Shape';
import { Circle } from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10,15);


let myCircle = new Circle(5,10,20);


let myRectangle = new Rectangle(4,5,10,20);

// declare array of shapes

let theShapes : Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myShape);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}