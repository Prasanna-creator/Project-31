
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300


function setup() {
	createCanvas(480, 800);



	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here
  ground=new Ground(240,800,480,20)
  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
  for(var k=0;k<= width;k=k+80){
    divisions.push(new Tree(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    ellipseMode(RADIUS)
    ellipse(j,75,10,10)

  }

  for(var j=15;j<=width-10;j=j+50){
    ellipseMode(RADIUS)
    ellipse(j,175,10,10)

  }
  for(var j=40;j<=width;j=j+50){
    ellipseMode(RADIUS)
    ellipse(j,275,10,10)

  }
  for(var j=15;j<=width-10;j=j+50){
    ellipseMode(RADIUS)
    ellipse(j,375,10,10)

  }
  for(j=0;j<particles.length;j++){
    particles[j].display()
  }
  for(k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  
  ground.display()
  drawSprites();
  
 
}




