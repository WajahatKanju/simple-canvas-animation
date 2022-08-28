import { grid } from "./drawing.js";

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

function draw_pacman(ctx, radius, mouth) {
  let angle = 0.25 * Math.PI * mouth;
  ctx.save();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, radius, angle, -angle);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

context.strokeStyle = "white";
context.lineWidth = 1.5;
let radius = 40;
let x = radius,
  y = context.canvas.height / 5;
let dx = 1;
let dy = 0;
let gravity = 0.1;
let mouth = 0;

function frame() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  draw(context);
  update();
}

function update() {
  x += dx;
  y += dy;
  dy += gravity;
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }

  if (y + dy > context.canvas.height - radius) {
    dy *= -0.6;
    dx *= 0.95;
  }
  mouth = Math.abs(Math.sin((6 * Math.PI * x ) / context.canvas.width));
}
function draw(context) {
  grid(canvas, context);
  // context.beginPath();
  // context.arc(x, y, radius, 0, 2 * Math.PI);
  // context.fill();
  // context.stroke();
  context.save();
  context.translate(x, y);
  draw_pacman(context, radius, mouth);
  context.restore();
}

setInterval(frame, 1000 / 60000);
