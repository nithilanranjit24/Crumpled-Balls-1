class Paper{

    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }

}