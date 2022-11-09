class Enemy {
  constructor(img) {
    this.img = img
    this.box = new Box(windowWidth + GLOBALS.ENEMY_W, random(GLOBALS.GROUND_Y - GLOBALS.ENEMY_RANGE, GLOBALS.GROUND_Y), GLOBALS.ENEMY_W, GLOBALS.ENEMY_H)
    this.vel = GLOBALS.ENEMY_V + score * GLOBALS.ACCELERATION
  }

  draw() {
    // showCollisionBox(this.box)
    image(this.img, this.box.x, this.box.y, this.box.w, this.box.h);
  }

  update() {
    this.box.x -= this.vel;
  }
}