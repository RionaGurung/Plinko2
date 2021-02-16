const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

var particle;

var score = 0;

var turn = 0;

var gameState = "start";

function setup(){

  createCanvas(500,800);
  
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2,height,width,20);

    for (var i = 10; i <= width; i = i + 80){

      divisions.push(new Divisions(i, height - divisionHeight/2, 10, divisionHeight));
    
    }

    for (var j = 35; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 35; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }
}

function draw(){

  background("black");

  Engine.update(engine);

  textSize(20)
  textFont("timesnewroman");
  fill("white")
  text("Score :  " + score, width - 500, 40);

  text(100, width - 470, height - 150);
  text(300, width - 390, height - 150);
  text(50, width - 300, height - 150);
  text(100, width - 230, height - 150);
  text(400, width - 150, height - 150);
  text(300, width - 70, height - 150);

  ground.display();

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
    */     
}

function mousePressed(){
 
  if(gameState !== "end"){

    count++

    particle = new Particle(mouseX, 10, 10, 10);
    particle.display();
  }
}

function turns(){

  if(turn === 5){

    gameState = "end"

    textSize(20)
    textFont("timesnewroman");
    fill("white")
    text("Game Over", width - 500, 40);

  }
}