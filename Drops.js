class Drops{

    constructor(x,y){
        this.x=x;
        this.y=y;
        var options={
            isStatic:false,
            friction:0.1
        }
        this.body=Bodies.circle(this.x,this.y,20,{isStatic:false})
        World.add(world,this.body)
        
    }
   
    display(){
        var pos=this.body.position;
      
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,20,20)
    }
   update(){
       if(this.body.position.y>height){
           Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)})
       }
   }
}