var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var polygon,stand,stand1;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var chain;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    ground=new Ground(width/2,670,width,10)
	stand=new Ground(390,600,200,20) 
	stand1=new Ground(600,500,120,20) 
	 box1=new Box(330,235,30,40)
     
	 box2=new Box(360,235,30,40)
	 box3=new Box(390,235,30,40)
	 box4=new Box(420,235,30,40)
	 box5=new Box(450,235,30,40)
	 box6=new Box1(360,195,30,40)
	 box7=new Box1(390,195,30,40)
	 box8=new Box1(420,195,30,40)
	 box9=new Box2(390,155,30,40)
	 box10=new Box(570,195,30,40)
	 box11=new Box(600,195,30,40)
	 box12=new Box(630,195,30,40)
	 box13=new Box2(600,165,30,40)
	 polygon=new Paper(200,550,40)
	 chain=new Slingshot(polygon.body,{x:70,y:520})
	Engine.run(engine);
 
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
 stand.display();
 stand1.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 polygon.display();
 chain.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

