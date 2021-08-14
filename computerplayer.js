class ComputerPlayer {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        };
        this.body = Bodies.Rectangle(x,y,width,height,options)
        this.height = height
        this.width = width
        this.image= loadImage("./assets/player.png");

        World.add(world, this.body)
    } 

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        Push()
        Translate(pos.x,pos.y);
        rotate(angle);
        ImageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}