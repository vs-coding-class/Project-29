class towerBlock{
    constructor(x,y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,20,30,options);
        this.width = 20;
        this.height = 30;
        World.add(world,this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(204,233,246);
        rect(0,0, this.width, this.height);
        pop();
      }
}