class Umbrella{
    constructor(x,y){
var options ={

    isStatic : true
}

    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/walking_2.png");
    World.add(world, this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, this.x, this.y, 10,10);
    pop();
    
  };
}   