import { grid } from './drawing.js';

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

context.strokeStyle = "white";
context.lineWidth = 1.5;

let x =  40, y = context.canvas.height / 2;
let dx = 1;
function frame() {
  context.clearRect(0, 0, context.canvas.width, context.
    canvas.height);
  draw(context);
  update();
}

function update() {
  x += dx;
  
}
function draw(context) {
  grid(canvas, context);
  context.beginPath();
  context.arc(x, y, 40, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
}

setInterval(frame, 1000/60);