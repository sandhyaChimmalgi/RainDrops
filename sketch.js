const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var world,engine;

var drops = [];
var player1;
var player;
var ground;
function preload() {
  player1 = loadImage("boy.png");
 }
function setup() {
  createCanvas(640, 360);
  engine = Engine.create();
  world = engine.world;
  for (var i = 0; i < 500; i++) {
    drops[i] = new solidDrops();
   
  }

  playerBody = Bodies.circle(250,262,80,{isStatic:true});
  World.add(world,playerBody);
  player = createSprite(313,262,200,200);
  player.addImage("player",player1);
  player.scale = 0.3;
  ground = createSprite(321, 354, 800,20);
}


function draw() {
  background(230, 230, 250);
  Engine.update(engine);
  player.x = playerBody.position.x;
  player.y = playerBody.position.y;
  text("x:" + mouseX + ",y:"+mouseY,mouseX,mouseY);
  drawSprites();
  for (var i = 0; i < drops.length; i++) {
    drops[i].update();
    drops[i].display();
    
  }
}