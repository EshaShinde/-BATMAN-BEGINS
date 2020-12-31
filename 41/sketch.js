
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops = [];
var umbrella;
var backgroundImg;
var thunder1,thunder2 ,thunderImg1 , thunderImg2 , thunderImg3;
var maxDrops = 100

function preload(){
    thunder1 = loadImage("Images/1.png");
    thunder2 = loadImage("Images/2.png");
    boyImg= loadImage("Images/walking_1.png")
}

function setup(){
 canvas = createCanvas(displayWidth - 20,displayHeight - 30);
 
    engine = Engine.create();
    world = engine.world;
  
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);

boy = createSprite(500,400,2,5)
boy.addImage(boyImg)

    umbrella = new Umbrella(300,500);
}

function draw(){
  
    background(0);
    Engine.update(engine);

  //  if(frameCount % 1 === 0){
     // var drops = new Drop(random(0, windowWidth), -100,10);
    //}

    for(var i = 0; i < maxDrops; i++){
      drops.push(new Drop(random(0,1500), random(0,600)))
    drops[i].display();
    } 

    umbrella.display();


    

    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        ;
      }
    }   
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          ;
        }
      }   
  
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
           
          }
        } 
  
  
    drawSprites();
}   

 7 