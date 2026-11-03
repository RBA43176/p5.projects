
/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();

  // Create buttons
  enterButton = {
    x: 300,
    y: 300,
    w: 100,
    h: 50,
    text: "Enter"
  };

  a1Button = {
    x: 200,
    y: 300,
    w: 100,
    h: 50,
    text: "A1"
  };

  a2Button = {
    x: 400,
    y: 300,
    w: 100,
    h: 50,
    text: "A2"
  };

  b1Button = {
    x: 200,
    y: 300,
    w: 100,
    h: 50,
    text: "B1"
  };

  b2Button = {
    x: 400,
    y: 300,
    w: 100,
    h: 50,
    text: "B2"
  };
}

/* DRAW LOOP REPEATS */
function draw() {
  background("pink");

  // Display the correct screen
  if (screen == 0) {
    showScreen0();
  } else if (screen == 1) {
    showScreen1();
  } else if (screen == 2) {
    showScreen2();
  } else if (screen == 3) {
    showScreen3();
  } else if (screen == 4) {
    showScreen4();
  } else if (screen == 5) { // End Game Screen
    showScreen5();
  } else {
    text("Error: Invalid screen");
  }
}

/* MOUSE CLICK DETECTION */
function mousePressed() {

  // Screen 0 -> Screen 1
  if (screen == 0) {
    if (buttonClicked(enterButton)) {
      screen = 1;
      print("Display screen 1");
    }
  }

  // Screen 1 -> Screen 2 or 5
  else if (screen == 1) {
    if (buttonClicked(a1Button)) {
      screen = 2;
      print("Display screen 2");
    } else if (buttonClicked(a2Button)) {
      screen = 5;
      print("Display screen 5");
    }
  }

    // Screen 1 -> Screen 2 or 5
  else if (screen == 2) {
    if (buttonClicked(b1Button)) {
      screen = 3;
      print("Display screen 3");
    } else if (buttonClicked(b2Button)) {
      screen = 4;
      print("Display screen 4");
    }
  }

  // Screen 2 -> Screen 3 or 4
 
}

/* CHECK IF BUTTON WAS CLICKED */
function buttonClicked(button) {
  return (
    mouseX >= button.x - button.w / 2 &&
    mouseX <= button.x + button.w / 2 &&
    mouseY >= button.y - button.h / 2 &&
    mouseY <= button.y + button.h / 2
  );
}

/* DRAW BUTTON */
function drawButton(button) {
  rectMode(CENTER);

  fill("black");
  rect(
    button.x,
    button.y,
    button.w,
    button.h,
    5
  );

  fill("white");
  textSize(20);
  textAlign(CENTER, CENTER);
  text(button.text, button.x, button.y);
}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen0() {
  fill("black");
  textSize(20);
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );

  drawButton(enterButton);
}

function showScreen1() {
  fill("black");
  textSize(20);
  text(
    "Welcome to screen 1. Make your first choice.",
    width / 2,
    height / 2 - 100
  );

  drawButton(a1Button);
  drawButton(a2Button);
}

function showScreen2() {
  fill("black");
  textSize(20);
  text(
    "Welcome to screen 2. Make your second choice.",
    width / 2,
    height / 2 - 100
  );

  // ADD: Draw B1 Button 
  drawButton(b1Button);
  // ADD: Draw B2 Button
  drawButton(b2Button);
}

// ADD: Screen 3 Function

// ADD: Screen 4 Function

function showScreen5() {
  fill("black");
  textSize(20);
  text(
    "Welcome to screen 5. End point",
    width / 2,
    height / 2 - 100
  );
}
