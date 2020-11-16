
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var tree;
var boy;

function preload()
{
	this.image = loadImage("sprites/tree.png");
	this.image = loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  image(tree,400,400100,100);
  boy(boy,200,200,50,50);


  
  drawSprites();
 
}



