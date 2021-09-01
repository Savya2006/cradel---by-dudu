class bob{
    
    constructor(x,y,radius,color) {
        var options = { isStatic:false, 
            restitution:1.0, 
            friction:0.1,
             density:1.4 }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.color = color;
       
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(0);
        fill(this.color)
        ellipseMode(RADIUS);
        
        
        ellipse(0,0,this.radius,this.radius);
        
        pop()
        
        
    }}