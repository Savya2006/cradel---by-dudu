
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
	S = loadImage("ok.png");
}

function setup() {
	createCanvas(800, 700);

	start = createSprite(400,200);
	start.addImage(S);
	start.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	roof1= new roof(430,350,600,20,"black")
	strokeWeight(5);
	stroke("black");

	roof2= new roof(140,470,20,220,"black");
	roof3= new roof(720,470,20,220,"black")


	
	bob3= new bob(280,545,26.5,"pink");
	bob4= new bob(342,545,26.5,"blue");
	bob1= new bob(395,545,26.5,"red");
	bob2= new bob(450,545,26.5,"yellow");
	bob5= new bob(500,545,26.5,"green");
	bob6= new bob(560,545,26.5,"purple");
	
	string4 = new Rope(bob2.body,{x:450,y:350})
	string5 = new Rope(bob3.body,{x:280,y:350})
	string2= new Rope(bob4.body,{x:342,y:350})
	string3= new Rope(bob1.body,{x:395,y:350})
	string1 = new Rope(bob5.body,{x:500,y:350})
	string6 = new Rope(bob6.body,{x:560,y:350})


	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(225);
text("HELLO......, PRESS SPACE TO START",60,60);
 fill(0)
 
  
 

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 bob6.display();
 

 string1.display();
 string2.display();
 string3.display();
 string4.display();
 string5.display();
 string6.display();

 roof1.display();
 roof2.display();
 roof3.display();
  
  drawSprites();
}

function keyPressed(){ 
	if(keyCode === 32){ Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-180,y:190});}
}