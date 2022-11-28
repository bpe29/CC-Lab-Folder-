let height = 0;
let button;
let NUM_OF_PARTICLES = 33;
let particles = [];
let carlights = [];
let lightnings = [];
let saturation = 100;

function setup() {
  let canvas = createCanvas(800, 700);
  canvas.parent("canvasContainer");
//   button = createButton("click and hold to change stream");
//   button = createButton("press (S) key stream will go up and down");
//   button = createButton("press (W) key stream goes up");
//   button = createButton("press (1) key orange");
//   button = createButton("press (2) key white");
//   button = createButton("click +hold + press (E) = more streams");
//   button = createButton("click +hold + press (W) = water dripplets go up");

  carlights.push(new CarLight(365, 400));
  carlights.push(new CarLight(400, 400));
  carlights.push(new CarLight(665, 400));
  carlights.push(new CarLight(700, 400));
  lightnings.push(new Lightning());
  lightnings.push(new Lightning(random(300, 355)));
}

function draw() {
 

 if (mouseIsPressed) {
    if (mouseX < 400) {
      if (height < 430) {
        fill("grey");
        height = height + 1;
      }
    } else {
      if (height > 0) {
        fill("grey");
        height = height - 1;
      }
    }
   }

  push();
  translate(700, 200);
  rotate(PI);
  rect(-100, -330, 700, height);
  pop();
  
  colorMode(HSB, 100);
  background(0, 1);
  for (let i = 0; i < carlights.length; i++) {
    let c = carlights[i];
    c.update();
    c.display();
  }

  for (let i = 0; i < lightnings.length; i++) {
    let l = lightnings[i];
    l.update();
    l.display();
  }

  particles.push(new SingleStream());
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.nextFrame();
    p.display();
    p.changeSpeed();
    p.changeColor();
    if (mouseIsPressed) {
      p.changeSpeed2();
      // img.resize(10,0);
      while (particles.length > NUM_OF_PARTICLES) {
        particles.splice(0, 1);
        saturation -= 0.1;

      }
    }
  }
  
//
  push();
  stroke(0);
  strokeWeight(30);
  noFill();
  rect(100, 88, 600, 450, 100);
  pop();

  push();
  stroke(0);
  strokeWeight(30);
  fill("black");
  rect(10, 0, 70, 700);
  rect(0, 0, 800, 65);
  rect(0, 550, 800, 150);
  rect(730, 0, 55, 600);
  rect(0, 510, 123, 23);
  rect(0, 500, 111, 20);
  rect(700, 465, 250, 800);
  rect(655, 529, 250, 800);
  rect(700, 90, 50, 69);
  rect(100, 50, 50, 45);
  rect(655, 45, 50, 55);
  rect(100, 20, 10, 110);
  pop();

  push();
  translate(0, 0);
  stroke(0);
  strokeWeight(10);
  fill("grey");
  rect(250, 589, 300, 69);
  pop();
  
 
  push();
  stroke(0);
  strokeWeight(1);
  fill("red");
  rect(275, 598, 10, 50);
  fill("blue");
  rect(515, 598, 10, 50);
  pop();
  


  push();
  stroke(0);
  strokeWeight(0);
  fill("lightyellow");
  rect(395, 594, 10, 59);
  pop();
  
   push();
   textSize(22);
  fill("white");
text('open', 440, 630);
fill("white");
  textSize(22);
text('close', 310, 630);
 pop();
fill("grey");
  textSize(22);
text('Window is currently opened', 100, 75);
  
}

class Lightning {
  constructor() {
    this.xCoord1 = 0;
    this.yCoord1 = 0;
    this.xCoord2 = 0;
    this.yCoord2 = 0;
  }

  display() {
    for (var i = 0; i < random(0.5); i++) {
      this.xCoord1 = this.xCoord2;
      this.yCoord1 = this.yCoord2;
      this.xCoord2 = this.xCoord1 + random(-20, 20);
      this.yCoord2 = this.yCoord1 + random(-10, 20);
      strokeWeight(random(1, 3));
      push();
      translate(0, 0);
      stroke("yellow");
      line(this.xCoord1, this.yCoord1, this.xCoord2, this.yCoord2);
      pop();
    }
  }
  update() {
    if (
      (this.xCoord2 > width) |
      (this.xCoord2 < 0) |
      (this.yCoord2 > 800) |
      (this.yCoord2 < 0)
    ) {
      this.xCoord2 = random(0, width);
      this.yCoord2 = 0;
      push();
      translate(0, 0);
      stroke("yellow");
      pop();
    }
  }
}

class SingleStream {
  constructor() {
    // start of stream
    this.startx = random(15, 700);
    this.starty = random(0, 250);
    this.currentEndX = 0;
    this.currentEndY = 0;
    // //     // end of stream
    this.goalx = this.startx;
    this.goaly = this.starty + 800;
    // //     color
    this.f = 255;
    this.r = 50;
    this.g = 100;
    this.b = 100;
    //     properties
    // this.x = random(0,10);
    // this.y = random(0,400);
    this.xSpd = 1;
    this.ySpd = 0.01;
    this.biggie = 0;
    this.stepnumber = 100;

    this.xDifference = this.goalx - this.startx;
    this.yDifference = this.goaly - this.starty;

    this.xIncrement = this.xDifference / this.stepnumber;
    this.yIncrement = this.yDifference / this.stepnumber;

    this.currentstepnumber = 0;
  }
  display() {
    push();
    translate(this.startx, this.starty);
    stroke(this.r, this.g, this.b, this.f);
    line(0, 0, this.currentEndX, this.currentEndY);
    pop();
  }
  changeSpeed() {
    this.ySpd = 1;
    if (keyIsPressed) {
      if (key == "w") this.currentEndY = 100;
    }
  }

  changeColor() {
    this.f -= 4;
    if (keyIsPressed) {
      if (key == "1") this.r = 10;
      // makes the stream have alot of lines
      this.biggie = 1;
      if (keyIsPressed) {
        if (key == "e") this.xSpd = 10;
        //stream color change to light pink
        if (keyIsPressed) {
          if (key == "2") this.g = 10;
          //makes the stream stays in the middle
          if (keyIsPressed) {
            if (keyIsPressed) {
              if (key == "s") this.startx += this.xSpd * random(0);
              this.starty += this.ySpd * random(-5);
            }
          }
        }
      }
    }
    // if (this.currentstepnumber >= 100 && this.a>=0){
    //     this.a-=2;
    // }
  }

  nextFrame() {
    this.currentstepnumber = this.currentstepnumber + 1;
    if (this.currentstepnumber <= this.stepnumber) {
      this.currentEndX = this.currentEndX + this.xIncrement;
      this.currentEndY = this.currentEndY + this.yIncrement;
    }
  }
  changeSpeed2() {
    this.startx += this.xSpd * random(-2, 2);
    this.starty += this.ySpd * random(-2, 2);
  }
}

class CarLight {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.a = 50;
    this.aInc = 0.3;
  }
  update() {
    this.x--;
    this.a -= this.aInc;
    // console.log("done", this.a)
    if (this.a < 3 || this.a > 50) {
      this.aInc *= -1;
      // console.log("done")
    }

    if (this.x <= 0) {
      this.x = 700;
    }
  }

  display() {
    push();
    noStroke();
    fill(255, this.a);
    ellipse(this.x, this.y + 10, 30, 30);
    pop();
  }
}
