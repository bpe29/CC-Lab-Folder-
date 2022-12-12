let cloudx = 100;
let cloudy = 100;
let lightnings = [];
let trees = [];

let colSomon = "#F28080";
let colYellow= "#EFF2D8";
let colViolet= "#6B5B95"
function setup() {
 let canvas = createCanvas(1420, 500);
  lightnings.push(new Lightning());
  lightnings.push(new Lightning(random(300, 355)));
 canvas.parent("canvasContainer")
}
function draw() {
   background(200,155,mouseX,mouseY);
//   draw bird flying or tree is fine 
   var y = 400;
  stroke(255);
  strokeWeight(1);
  if(mouseIsPressed){
    trees.push(new Tree(mouseX));
  }

  for (let i=0; i<trees.length;i++){
    trees[i].display();
  }
  
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 100)
  cloudx+=0.5;
  for (let i = 0; i < lightnings.length; i++) {
    let l = lightnings[i];
    l.update();
    l.display();
  }

 push()
  translate(355, 0);
  fill(colSomon);
  noStroke();
  rect(-355, 370, 1700, 300);
  noStroke();
  fill(234, 85, 46);
  ellipse(100, 130, 100, 100);
  
  fill(220)
  noStroke();
  triangle(150, 370, 500, 370, 300, 100);
  fill(200);
  triangle(350, 370, 550, 370, 450, 250);
  textSize(30);
  fill(255);
  textFont("Courier New");
  textAlign(CENTER);
  text("Keep calm and keep studying",350, 420);
  
  textSize(18);
  fill(colViolet);
  textFont("Courier New");
  textAlign(CENTER);
  text("Life will get better soon!! ",350, 465);
  
pop()
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
      this.xCoord2 = this.xCoord1 + random(-20, 60);
      this.yCoord2 = this.yCoord1 + random(-10, 50);
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
function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
class Tree {
  constructor(x) {
    this.x = x;
  }

  display() {
  fill (111,72,63);
  rect(this.x,269,20,100);
  fill(72,115,49);
  ellipse(this.x+7,269,70,70);
  }
}
