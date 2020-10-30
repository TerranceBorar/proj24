class Dustbin{
   constructor(x,y)
    { this.x=x; this.y=y; 
    this.dustbinWidth=200; 
    this.dustbinHeight=213; 
    this.wallThickness=20; 
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true}) 
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
    this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
    World.add(world, this.bottomBody) 
    World.add(world, this.leftWallBody) 
    World.add(world, this.rightWallBody); 
} 
 
 display()
 {                
    var posb=this.bottomBody.position; 
    var posl=this.leftWallBody.position; 
    var posr=this.rightWallBody.position;
   
    
    
    rectMode(CENTER);
    fill("red") 
    rect(posb.x,posb.y, this.dustbinWidth, this.wallThickness);
    rect(posl.x,posl.y,this.wallThickness, this.dustbinHeight, );
    rect(posr.x,posr.y, this.wallThickness,this.dustbinHeight );
 }
}

   
   
 