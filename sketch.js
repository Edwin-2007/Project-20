var astronaut;
var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;

function setup() {
  createCanvas(800,400);
  if (keyDown("up")) {
    brush
   }
   if (keyDown("down")) {
    gym
   }
   if (keyDown("left")) {
    eat
   }
   if (keyDown("right")) {
    drink
   }
   if (keyDown("m")) {
    move
   }
   astronaut.bounceOff(edges)
  createSprite(400, 200, 50, 50);
}
function preload(){
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  atroonaut,scale = 0.1;
  bg= loadImage("image/iss.png");
  sleep = loadAnimation("images/sleep/png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png","images/gym22.png");
  eat = loadAnimation("images/eat.png");
  drink = loadAnimation("images/drink.png");
  move = loadAnimation("images/move.png");
}
function draw() {
  background(255,255,255);  
  drawSprites();
}