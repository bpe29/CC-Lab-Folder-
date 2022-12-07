// LetmyCreature;
let colSomon = "#F28080";
let colYellow= "#EFF2D8";
let colViolet= "#6B5B95"
function setup() {
 let canvas = createCanvas(1420, 500);
 canvas.parent("canvasContainer")
}
function draw() {
  background(200,155,mouseY);
  
//   I want to make if pressed bird fly
  var y = 400;
  stroke(255);
  strokeWeight(1);
  if(mouseIsPressed){
  line(mouseX, y, mouseX, mouseY);
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
class Creature{
  constructor(){
    this.x=200;
    this.y=200;
    this.r=200
    this.headAngle=0
  }
display(){
  noFill();
  push();
  translate(this.x,this.y)
  circle(0,0,5);
  ellipse(0,0,45,80)
  this.drawHead();
  pop();

}
  drawHead(){
    push();
    translate(0,-42)
    rotate(radians(this.headAngle))
    
    fill(34,90,140)
    rect(-15,-15,30,30)
  }

}