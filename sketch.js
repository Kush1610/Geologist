const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber1,rubber2,rubber3,rubber4,rubber5;
var stone,copper,iron;

function preload()
{
	backIMG=loadImage("background.jpg")
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(450,100,9);
    rubber2 = new Rubber(480,100,9);
    rubber3 = new Rubber(510,100,9);
    rubber4 = new Rubber(540,100,9);
    rubber5 = new Rubber(570,100,9);
    stone = new Stone(250,50);
    iron =new Iron(650,50);
    gold = new Gold(850,50);
  


}

function draw(){
    background(backIMG);
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();
    iron.display();
    gold.display();

    
    
 
}