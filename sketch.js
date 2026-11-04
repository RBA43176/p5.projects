let maze = [
  "###############",
  "#P....#.......#",
  "#.#.#.#.###...#",
  "#.#.K.#.....#.#",
  "#...#...#...#.#",
  "###.#.###.#...#",
  "#...#.....#...#",
  "#K......K....E#",
  "###############"
];

let playerX = 1;
let playerY = 1;
let kits = 0;
let warmth = 100;
let message = "Find 3 kits, then reach the exit!";
let gameOver = false;
let gameStarted = false;

function setup() {
  createCanvas(620, 430);
}

function draw() {
  background("#344a38");

  if (!gameStarted) {
    showTitleScreen();
    return;
  }

  fill("white");
  textAlign(LEFT);
  textSize(20);
  text("FOGGY GRASSLAND", 40, 35);
  textSize(14);
  text("Warmth: " + warmth + "%", 340, 35);
  text("Kits: " + kits + " / 3", 480, 35);

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      let tile = maze[y][x];
      let drawX = 40 + x * 36;
      let drawY = 60 + y * 36;

      if (tile === "#") {
        fill("#26352b");
      } else {
        fill("#66804d");
      }
      rect(drawX, drawY, 36, 36);

      if (tile === "K") {
        fill("yellow");
        text("+", drawX + 14, drawY + 24);
      }
      if (tile === "E") {
        fill("white");
        text("E", drawX + 13, drawY + 24);
      }

      if (dist(playerX, playerY, x, y) > 3) {
        fill(20, 35, 33, 180);
        rect(drawX, drawY, 36, 36);
      }
    }
  }

  fill("white");
  circle(40 + playerX * 36 + 18, 60 + playerY * 36 + 18, 18);

  fill("white");
  textSize(13);
  text("Use arrow keys or WASD to move. Press R to restart.", 40, 410);
  text(message, 40, 395);
}

function showTitleScreen() {
  fill("white");
  textAlign(CENTER);
  textSize(32);
  text("FOGGY GRASSLAND", width / 2, 145);

  textSize(16);
  text("Find 3 kits and reach the exit before you get too cold.", width / 2, 205);
  textSize(14);
  text("Use the arrow keys or WASD to move.", width / 2, 250);
  text("Click or press ENTER to start", width / 2, 310);
}

function keyPressed() {
  if (!gameStarted && keyCode === ENTER) {
    gameStarted = true;
    return;
  }

  if (key === "r" || key === "R") {
    restartGame();
    return;
  }

  if (gameOver) return;

  let newX = playerX;
  let newY = playerY;

  if (keyCode === LEFT_ARROW || key === "a") newX--;
  if (keyCode === RIGHT_ARROW || key === "d") newX++;
  if (keyCode === UP_ARROW || key === "w") newY--;
  if (keyCode === DOWN_ARROW || key === "s") newY++;

  if (maze[newY][newX] === "#") return;

  playerX = newX;
  playerY = newY;
  warmth = warmth - 5;
  message = "";

  if (maze[newY][newX] === "K") {
    kits++;
    warmth = warmth + 20;
    maze[newY] = maze[newY].substring(0, newX) + "." + maze[newY].substring(newX + 1);
    message = "You found a kit. It warmed you up!";
  }

  if (maze[newY][newX] === "E" && kits === 3) {
    message = "You escaped the grassland! Press R to play again.";
    gameOver = true;
  } else if (warmth <= 0) {
    message = "You got too cold. Press R to try again.";
    gameOver = true;
  }
}

function restartGame() {
  maze = [
    "###############",
    "#P....#.......#",
    "#.#.#.#.###...#",
    "#.#.K.#.....#.#",
    "#...#...#...#.#",
    "###.#.###.#...#",
    "#...#.....#...#",
    "#K......K....E#",
    "###############"
  ];

  playerX = 1;
  playerY = 1;
  kits = 0;
  warmth = 100;
  message = "Find 3 kits, then reach the exit!";
  gameOver = false;
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
  }
}
