class Environment {
  constructor() {
    this.ground = new Box(0, GLOBALS.GROUND_Y, windowWidth, GLOBALS.GROUND_H);  
  }
  
  draw() {
    background(GLOBALS.COLORS.SKY);
    
    stroke(GLOBALS.COLORS.GROUND);
    // showCollisionBox(this.box);
    fill(GLOBALS.COLORS.GROUND);
    rect(this.ground.x, this.ground.y, this.ground.w, this.ground.h);
  }
}