let mode = 0;

function preload() {
  // Load and hide UI elements
  u = createImg("u standing.png", "");
  u.hide();
  
  library = createImg("library.png", "");
  library.hide();
  
  table1 = createImg("meeting table.png", "");
  table1.hide();
  
  table2 = createImg("blank table.png", "");
  table2.hide();
  
  door = createImg("door.png", "");
  door.hide();
  
  dbutton = createImg("door button.png", "");
  dbutton.hide();
  
  xcorner = createImg("sex corner.png", "");
  xcorner.hide();
  
  yes = createImg("yes.png", "");
  yes.hide();
  
  no = createImg("no.png", "");
  no.hide();

  // Load facial feature images
  mouth1 = loadImage("mouth1.png");
  mouth2 = loadImage("mouth2.png");
  nose1 = loadImage("nose1.png");
  nose2 = loadImage("nose2.png");
  eye1 = loadImage("eye1.png");
  eye2 = loadImage("eye2.png");
}

function setup() {
  createCanvas(400, 400);
  // Set the position and function for each element
  u.position(180, 300);
  u.mousePressed(play);

  table1.position(55, 140);
  table1.mousePressed(clickTable1);

  table2.position(255, 140);
  table2.mousePressed(clickTable2);

  library.position(0, 0);
  door.position(0, 0);

  dbutton.size(80, 50);
  dbutton.mousePressed(open);
  
  button = createButton("ignore");
  button.position(350, 380);
  button.size(50, 20);
  button.mousePressed(ignore);
  button.hide();
  
  xcorner.position(0, 0);
  
  yes.position(160, 130);
  yes.mousePressed(take);
  
  no.position(230, 130);
  no.mousePressed(leave);

  textAlign(CENTER);
  angleMode(DEGREES);
  frameRate(15);
}

function draw() {
  switch (mode) {
    case 0:
      // Start screen
      background(220);
      u.show();
      textSize(30);
      text("click on u to play", 200, 200);
      
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
  }
}

// Switch to the next scene when u is clicked
function play(){
  mode = 1;
}

function scene1() {
  // Hiding u and showing the library scene
  background(220);
  u.hide();
  table1.show();
  table2.show();
  library.show();
}

// Results for table choice
function clickTable1() {
  console.log("🐰 excuse me?/ 🐸 friend we're having a meeting/ 🦊 dont u have eyes?");
  selectedEye = eye1;
  // Switch to the next scene after the click
  mode = 2;
}

function clickTable2() {
  console.log("business as usual");
  selectedEye = eye2;
  mode = 2;
}

function scene2() {
  // Hiding the library scene and showing the door scene
  background(220);
  table1.hide();
  table2.hide();
  library.hide();
  door.show();
  dbutton.show();
  button.show();
  // Make dbutton "waver" when mouse is near
  if (mouseX > 100 && mouseX < 180 && mouseY > 110 && mouseY < 160) {
    dbutton.position(random(98, 102), random(108, 112));
  } else {
    dbutton.position(100, 110);
  }
}

// Results for opening door or ignoring
function open() {
  console.log("door opened ... 😹 thank u");
  selectedNose = nose1;
  mode = 3;
}

function ignore(){
  console.log("😾 is that really a human?")
  selectedNose = nose2;
  mode = 3;
}

function scene3() {
  // Hiding the door scene and showing the sex corner
  door.hide();
  dbutton.hide();
  button.hide();
  xcorner.show();
  yes.show();
  no.show();
}

// Results for taking or leaving
function take(){
  console.log("🐱🐷 giggles and whispers")
  selectedMouth = mouth2;
  mode=4;
}
function leave(){
  console.log("u leave with nothing")
  selectedMouth = mouth1;
  mode=4;
}

// Face generator result
function scene4(){
  // Hiding sex corner elements
  xcorner.hide();
  yes.hide();
  no.hide();
  
  console.log("congrats! u got a face!")
  
  background(random(255), random(255), random(255));
  
  noStroke();
  
  // Ears
  fill(random(255), random(255), random(255));
  ellipse(random(50, 100), random(180, 220), random(50, 100), random(100, 150));
  ellipse(random(300, 350), random(180, 220), random(50, 100), random(100, 150));
  
  // Face
  fill(random(255), random(255), random(255));
  quad(random(60, 100), random(60, 100), random(300, 340), random(60, 100), random(300, 340), random(300, 340), random(60, 100), random(300, 340));
  
  // Eyebrows
  fill(random(255), random(255), random(255));
  triangle(random(190, 200), random(80, 100), random(250, 260), random(80, 100), random(210, 240), random(50, 70));
  triangle(random(120, 130), random(80, 100), random(180, 190), random(80, 100), random(140, 170), random(50, 70));
  
  // Draw the selected face parts
  image(selectedMouth, random(140, 160), random(200, 240), 150, 80);
  image(selectedNose, random(170, 200), random(130, 150), 100, 100);
  image(selectedEye, random(140, 170), random(90, 120), 70, 70);
  image(selectedEye, random(200, 230), random(90, 120), 70, 70);

  noLoop(); 
}
