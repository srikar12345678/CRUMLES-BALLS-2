class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':0.4,
          'friction':0.50,
          'density':0.1
      }
      this.body = Bodies.circle(x,y,70, options);
      this.radius =70;
      
     this.paper=loadImage("paper1.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      
      imageMode(CENTER);
      fill("purple");
      image(this.paper,pos.x,pos.y,60,60);
  
    }
  };
  
  