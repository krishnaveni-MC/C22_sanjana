const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;



function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ball_option={
    restitution:0.8
  }
  ball=Bodies.circle(200,100,20,ball_option)
  World.add(world,ball);

  var ground_option={
  isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,50,ground_option);
  World.add(world,ground);
 
}

function draw() {
  background("purple"); 
  Engine.update(engine); 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill("brown");
  rect(ground.position.x,ground.position.y,390,50);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}