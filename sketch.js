var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}
var ball1,ball2,ball3,ball4;
var log1;
var chain1,chain2,chain3,chain4;
function setup() {
	createCanvas(1600,400);
	

	 ball1 = new Ball(250,200,20,20);
	 ball2 = new Ball(280,200,20,20);
	 ball3 = new Ball(310,200,20,20);
	 ball4 = new Ball(340,200,20,20);
	 log1 = new	Log(300,100,150,20);
	 chain1 = new Chain(ball1.body,log1.body);
	 chain2 = new Chain(ball2.body,log1.body);
	 chain3 = new Chain(ball3.body,log1.body);
	 chain4 = new Chain(ball4.body,log1.body);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  log1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  drawSprites();
 }



