const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1,pig2,box3,box4,box2,log1,log2,log3,log4,bird1
var engine, world;
var ground, box1,log1,box3,box4,bird1;

function setup(){
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;
    // creating the 1 layer
log1=new Log(950,500,400,PI/2)

    ground= new Ground(650,680,1300,20);
pig1= new Pig(950,650);
    //object name= new ClassName
   box1= new Box(800,650,70,70);
   box2= new Box(1100,650,70,70)
    console.log(ground);
   // creating  the 2 layer
box3 = new  Box(800,450,70,70);
box4= new  Box(1100,450,70,70)
box
bird1 = new Bird(100,200)
log2= new Log(950,400,400,PI/2)
pig2= new Pig(950,500);
//creating layer 3
box5 = new  Box(800,350,70,70);
box6= new  Box(1100,350,70,70);
pig3= new Pig(950,400)
log3 = new Log(950,300,400,PI/2)

// creating hut
//log4 = new Log(820,250,200,PI/7)
//log5 = new Log(1000,250,200,-PI/7)


}



function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    bird1.display();
    log2.display();
    log3.display();
    box5.display();
    box6.display();
    pig2.display();
    pig3.display();
   // log4.display();
   // log5.display();

}
