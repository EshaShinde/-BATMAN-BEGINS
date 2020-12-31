class Drop{
    constructor(x,y,radius){
    var options ={
    isStatic : false 
     }

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.x = x;
        this.y = y;
        this.r = radius;
    }
    //a function to update n to reposition the drops whenever they cross the canvas bottom.
    
  
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x, this.y,10,options);
        pop();
    }
  }