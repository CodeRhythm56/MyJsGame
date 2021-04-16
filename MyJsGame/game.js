var r;
var g;
var b;
var a;
var yspeed = -3;
var xspeed = 4;
var x = 300;
var y = 200;
var recy = 200;
var border = 0;
var score = 0;

function setup() {
  createCanvas(600, 400);
textAlign(CENTER, CENTER);

}

function draw() {
  background(0);
  ball();
  lin();
  outDirchange();
}

function ball() {
  r = random(0, 250);
  g = random(10, 25);
  b = random(0, 250);
  slabDown = outScreentop();
  slabUp = outScreenbottom();
  noStroke();
  ellipse(x, y, 27, 27);

    textSize(40);
text('Score', 300, 30);
    textSize(33);
text(score, 300, 65);


  if (x > width || x < 15) {
    xspeed = xspeed * -1;
    noStroke();

    fill(r, 0, b);

  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
    noStroke();
    fill(r, g, b);

  }




  x += xspeed;
  y += yspeed;

  if (keyIsDown(UP_ARROW)) {
    recy -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    recy += 5;
  }
  rect(0, recy, 15, 60);
  if (x <= 15 && y > recy && y < recy + 60 || x <= 15 && y < recy && y > recy - 60) {
    console.log("You Win");
    ballTouchSlab();
  }else if(x < 14){
    console.log("You Lose");
  }

  
  
}
function outScreenbottom() {
  if (recy > 400){
    return true;
  }else{
    return false;
  }

}
function outScreentop() {
  if (recy <0){
    return true;
  }else{
   return false;
  }
}
function lin() {
  line(200, 0, 200, 10);
}
function ballTouchSlab(){
  
  score++;
  
}
function outDirchange(){
  if(slabUp == true){
    recy = 0;
  }
  if(slabDown == true){
    recy = 400;
  }
  
  
}