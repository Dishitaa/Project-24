
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ball, dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new dustbin(650,635,200,20);
	dustbin2 = new dustbin(550,595,20,100);
	dustbin3 = new dustbin(750,595,20,100);

	ball = new paper(50,600,20);

	ground1 = new ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  Engine.update(engine);
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();

  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:13.4,y:-19});
  }
}



