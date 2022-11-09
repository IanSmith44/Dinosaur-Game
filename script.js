let player = null;
let env = null;
let enemies = [];
let enemyImg1 = null;

function preload() {
  enemyImg1 = loadImage("images/ded.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  // These variables are set here because windowHeight
  // needs to be accessed from within setup()
  GLOBALS.GROUND_Y = windowHeight-GLOBALS.GROUND_H
  GLOBALS.PLAYER_Y = GLOBALS.GROUND_Y-GLOBALS.PLAYER_H
  
  player = new Player();
  env = new Environment();
}

function draw() {
  env.draw();
  player.draw();
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    if (player.isBonk(enemies[i])) {
      // ends the program
      gameOver();
    }
    enemies[i].update();
  }

  if (score % GLOBALS.SPAWN_RATE === 0) {
    enemies.push(new Enemy(enemyImg1))
  }
  
  updateScore();
  player.update(env);
}

function keyPressed() {
  if (key === " " && player.isGrounded(env)) {
    player.jump();
  }
}