var canvas;
var music;
var rect1,rect2,rect3,rect4,box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    


    //create 4 different surfaces
rect1=createSprite(80,580,150,30);
rect1.shapeColor="pink";
    
rect2=createSprite(280,580,150,30);
rect2.shapeColor="black";

rect3=createSprite(480,580,150,30);
rect3.shapeColor="blue";

rect4=createSprite(680,580,150,30);
rect4.shapeColor="gold";

//create box sprite and give velocity
 box=createSprite(random(20,750));
 box.shapeColor="white";
 box.velocityX=11;
 box.velocityY=-11
    
}

function draw() {
    background(rgb(169,169,169));

if(box.isTouching(rect1)){
    box.shapeColor="pink";
    music.play();
}

if(box.isTouching(rect2)){
    box.shapeColor="black";
    music.stop();
    box.velocityY=0;
    box.velocityX=0;
}   
if(box.isTouching(rect3)){
    box.shapeColor="blue";
   
}

if(box.isTouching(rect4)){
    box.shapeColor="gold";
   
}

    edges=createEdgeSprites();
    box.bounceOff(rect4);
    box.bounceOff(rect3);
    box.bounceOff(rect2);
    box.bounceOff(rect1);
    box.bounceOff(edges);
    
    //create edgeSprite
    drawSprites();
}
