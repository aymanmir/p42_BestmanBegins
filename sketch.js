const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Body=Matter.Body;


var engine, world;
var maxDrops=100;
var drops=[];
var umbrella;


var thunder, t1,t2,t3,t4;
var thunderCreatedFrame=0;
function preload(){
    t1=loadImage("1.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("4.png")
}

function setup(){
   
    createCanvas(600,600);
    engine=Engine.create();
    world=engine.world;

    d1= new Drops(200,200);
   umbrella =new Umbrella(200,500);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,600),random(0,600)));
    }

}

function draw(){
    background(0)
    Engine.update(engine);

    var rand=Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break;
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
            default:break;
        }
        thunder.scale=random(0.7,0.6)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    d1.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    umbrella.display();
    drawSprites();
}   

