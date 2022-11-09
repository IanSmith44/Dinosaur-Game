class Player {
  constructor() {
    this.box = new Box(40, GLOBALS.PLAYER_Y, 20, GLOBALS.PLAYER_H);
    this.velY = 0;
    this.jumping = false;
  }

  draw() {
    stroke(GLOBALS.COLORS.PLAYER_STROKE);
    // showCollisionBox(this.box);
    fill(GLOBALS.COLORS.PLAYER_FILL);
    rect(this.box.x, this.box.y, this.box.w, this.box.h);
  }
  
  jump() {
    this.velY = GLOBALS.JUMP_STRENGTH;
    this.jumping = true;
  }

  isGrounded(env) {
    return collideRectRect(
      env.ground.x, env.ground.y, env.ground.w, env.ground.h,
      this.box.x, this.box.y, this.box.w, this.box.h
    );
  }

  isBonk(enemy) {
    return collideRectRect(
      enemy.box.x, enemy.box.y, enemy.box.w, enemy.box.h,
      this.box.x, this.box.y, this.box.w, this.box.h
    );
  } 
  
  update(env) {
    // gravity and jumping
    if (this.jumping || !this.isGrounded(env)) {
      this.box.y += this.velY / GLOBALS.DRAG
      this.velY += GLOBALS.GRAVITY / GLOBALS.DRAG
      this.jumping = false
    }
  }
}