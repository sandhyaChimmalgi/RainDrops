class solidDrops {
    constructor() {
        var options = {
            restitution:0.4,
            density: 0.5
              }
        this.x = floor(random(0,width));
        this.y = floor(random(-500,0));

        this.drop = Bodies.circle(this.x,this.y,1,options);
        World.add(world,this.drop);
    }
    display() {
    
        push();
        translate(this.drop.position.x,this.drop.position.y);
       rotate(this.drop.angle);
       stroke ('white');
       fill ('white')
       ellipseMode(RADIUS);
       ellipse(0,0,1,1);
       pop();
        
    }
    update(){
        if(this.drop.position.y > height) {
            this.y = floor(random(-500,0));
            this.x = floor(random(0,width));
            Matter.Body.setPosition(this.drop,{x:this.x,y:this.y});
        }
    }
}