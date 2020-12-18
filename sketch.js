var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	
	
	Engine.run(engine);

	rope=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
bobObject1=new bob (200,100,200,20)

  
}


function draw() {
	
  
  background(230);
  
 
  drawSprites();
}


