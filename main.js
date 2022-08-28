import { grid } from './drawing.js';

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

context.strokeStyle = "white";
context.lineWidth = 1.5;

let x =  40, y = context.canvas.height / 2;
let dx = 1;
let dy = 0;
let gravity = 0.1;

function frame() {
  context.clearRect(0, 0, context.canvas.width, context.
    canvas.height);
  draw(context);
  update();
}

function update() {
  x += dx;
  y += dy;
  if(x + dx > canvas.width - 40 || x + dx < 40){
    dx = -dx;
  }

  if(y + dy > context.canvas.height - 40){
    dy *= -1;
    console.log(dy);
  }else{
    dy += gravity;

  }

}
function draw(context) {
  grid(canvas, context);
  context.beginPath();
  context.arc(x, y, 40, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
}

setInterval(frame, 1000/60000);