//examples on the different types of data in JavaScript
/*- String: These aresequences of charactersstored inside quotes
- Number: Any mathematical number.
- Boolean values: True and false values.

- Null: It means nothing or empty.
- Undefined: It means that no valuehas been assigned to a variable.*/
//string
var string="this is a string";
console.log(string);

//number
var num=5;
console.log(num)

//Boolean
var boolean=true;
var bool=false;
console.log(boolean);
console.log(bool);

//undefined variable
var object;
console.log(object);

//reassiging the same undefined object to null
//null
object=null;
console.log(object);

//examples of array
// an array holding the same data type
var anything=[1,4,5,2,5,3,5,8,5,4,9,7];
console.log(anything);

//an array holding different data types
var bob=["Valfrid",12,true,"Mysha",6,false];
console.log(bob);

//an array storing a list of arrays
var jeff=[[1,2],["jeff3","jeff4"],[true,false],[1,2,3]];
console.log(jeff);

//access the first element of the array
console.log(jeff[0]);
//accessing the third element of the array
console.log(jeff[2]);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}