let score = 0;

const GLOBALS = {
  GRAVITY: 3,
  JUMP_STRENGTH: -30,
  DRAG: 3,
  SPAWN_RATE: 100,
  ACCELERATION: 1 / 1000,
  GROUND_H: 90,
  PLAYER_H: 30,
  ENEMY_W: 20,
  ENEMY_H: 20,
  ENEMY_RANGE: 150,
  ENEMY_V: 3,
  COLORS: {
    SKY: "#87CEEB",
    GROUND: "gray",
    PLAYER_FILL: "red",
    PLAYER_STROKE: "black",
    COLLISION_BOX: "pink",
    SCORE: "black"
  }
}

class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

function showCollisionBox(box) {
  fill(GLOBALS.COLORS.COLLISION_BOX);
  stroke(GLOBALS.COLORS.COLLISION_BOX);
  strokeWeight(2);
  rect(box.x, box.y, box.w, box.h);
}

function updateScore() {
  score += 1;
  fill(GLOBALS.COLORS.SCORE);
  stroke(GLOBALS.COLORS.SCORE);
  strokeWeight(1);
  textSize(16);
  text("SCORE: " + score, 10, windowHeight - 20);
}

function gameOver() {
  // Put some code here to run when the game ends

  // Stops the draw() from running anymore
  noLoop();
}
