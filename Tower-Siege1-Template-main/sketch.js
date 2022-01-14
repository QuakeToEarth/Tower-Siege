const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var hexagon;
function preload(){
  rock_img=loadImage("rock.png");

}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

 block1  = new Block (300,275,40,40);
 block2  = new Block (340,275,40,40);
 block3  = new Block (380,275,40,40);
 block4  = new Block (420,275,40,40);
 block5  = new Block (460,275,40,40);

 block6  = new Block (320,235,40,40);
 block7  = new Block (360,235,40,40);
 block8  = new Block (400,235,40,40);
 block9  = new Block (440,235,40,40);

 block10  = new Block (340,195,40,40);
 block11  = new Block (380,195,40,40);
 block12  = new Block (420,195,40,40);

 block13  = new Block (360,155,40,40);
 block14  = new Block (400,155,40,40);

 block15  = new Block (380,115,40,40);


 
 block16  = new Block (640,175,40,40);
 block17  = new Block (680,175,40,40);
 block18  = new Block (720,175,40,40);
 block19  = new Block (760,175,40,40);

 block20  = new Block (660,135,40,40);
 block21  = new Block (700,135,40,40);
 block22  = new Block (740,135,40,40);

 block23  = new Block (680,95,40,40);
 block24  = new Block (720,95,40,40);

 block25  = new Block (700,55,40,40);


hexagon=new Hexagon(100,300,50,50)

  slingShot = new Slingshot(hexagon.body,{x:100,y:300});

}

function draw() {
  background(56,44,44); 
 
  imageMode(CENTER);
  // write image() to display the polygon image 
  //use the same x and y position as ball
  


  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  hexagon.display();
  

  strokeWeight(2);
  stroke(0,0,0);
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("pink");
  block6.display();
  block7.display();
  block8.display();
  block9 .display();
  fill("turquoise");
  block10.display();
  block11.display();
  block12 .display();
  fill("grey");
  block13.display();
  block14 .display();
  fill("skyblue");
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  
  fill("turquoise");
  block20.display();
  block21.display();
  block22.display();
  fill("pink")
  block23.display();
  block24.display();
  fill("gold");
  block15.display();
  block25.display();




  
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}