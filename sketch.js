const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var backgroundImg
var hero, fly, ground;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 2000);
  engine = Engine.create();
  world = engine.world
  // create sprites here
hero = new Hero(380,330,300,100);
  
fly = new Fly(hero.body,{x:400,y:10});
  
ground = new Ground(600,600,1300,20);

block1=new Block(900,100,50,50);

block2=new Block(900,170,50,50);

block3=new Block(900,240,50,50)

block4 = new Block(900,310,50,50);

//block5=new Block(900,500,70,70);

//block6 =new Block(900,600,70,70);

block7 = new Block(800,100,50,50);

block8 = new Block(800,170,50,50);

block9 = new Block(800,240,50,50);

block10= new Block(800,310,50,50)

//block11 = new Block(800,100,70,70);

//block12= new Block(800,100,70,70);

block13= new Block(700,100,50,50);

block14= new Block(700,170,50,50);

block15= new Block(700,240,50,50);

block16= new Block(700,310,50,50);

//block17= new Block(700,100,70,70);

//block18= new Block(700,100,70,70);

block19= new Block(600,100,50,50);

block20= new Block(600,170,50,50);

block21= new Block(600,240,50,50);

block22= new Block(600,310,50,50);

//block23= new Block(600,100,70,70);

//block24= new Block(600,100,70,70);

//block25= new Block(600,100,70,70);

//block26= new Block(600,100,70,70);

}

function draw() {
  background(backgroundImg);
  
  ground.display();
  hero.display();
  block1.display();
  block2.display(); 
  block3.display(); 
  block4.display();
  //block5.display();
  //block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  //blk1k11.display();
  //blk1k12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  //block17.display();
  //block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  /*block23.display();
  block24.display();
  block25.display();
  block26.display();*/

}


function mouseDragged(){
  Matter.Body.setPosition(hero.body ,{x:mouseX, y:mouseY});
}
