
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var Wire1,Wire2,Wire3,wire4,wire5;
var bgColor;


gameState = "0";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob3 = new Bob (windowWidth/2,windowHeight/3+windowHeight/3,50);
    bob2 = new Bob (bob3.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob1 = new Bob (bob2.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob4 = new Bob (bob3.body.position.x+100,windowHeight/3+windowHeight/3,50);
	bob5 = new Bob (bob4.body.position.x+100,windowHeight/3+windowHeight/3,50);
	
	wire1 = new wire (bob1.body,{x:bob1.body.position.x,y:windowHeight/3-150});
    wire2 = new wire (bob2.body,{x:bob2.body.position.x,y:windowHeight/3-150});
    wire3 = new wire (bob3.body,{x:bob3.body.position.x,y:windowHeight/3-150});
    wire4 = new wire (bob4.body,{x:bob4.body.position.x,y:windowHeight/3-150});
    wire5 = new wire (bob5.body,{x:bob5.body.position.x,y:windowHeight/3-150});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  background(bgColor);

  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  wire1.display();
  wire2.display();
  wire3.display();
  wire4.display();
  wire5.display();
}


function mouseDragged() {

    if(gameState === "1") {
        Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "2") {
        Matter.Body.setPosition(bob2.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "3") {
        Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "4") {
        Matter.Body.setPosition(bob4.body,{x:mouseX,y:mouseY});
    }

    if(gameState === "5") {
        Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
    }

}



